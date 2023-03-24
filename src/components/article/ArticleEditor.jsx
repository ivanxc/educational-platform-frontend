import React, {useRef, useState} from 'react';
import { List } from 'immutable'
import styles from './ArticleEditor.module.css'
import "draft-js/dist/Draft.css";
import {Editor, EditorState, RichUtils} from 'draft-js';
import {getDefaultKeyBinding, AtomicBlockUtils, ContentBlock, SelectionState, genKey} from 'draft-js';
import {filterEditorState } from "draftjs-filters"
import TextStylePopUpMenu from "./TextStylePopUpMenu";
import Modifier from "draft-js/lib/DraftModifier";
import MediaPopUpMenu from "./MediaPopUpMenu";
import MyModal from "../UI/modal/MyModal";
import Media from "./Media";
import CodeInsertion from "./CodeInsertion";
import ImageInsertion from "./ImageInsertion";
import { convertFromRaw } from 'draft-js';

const ArticleEditor = ({initialState, readOnly, setStateToParent}) => {

    const [editorState, setEditorState] = useState(() => {
        if (initialState) {
            return EditorState.createWithContent(convertFromRaw(initialState));
        } else {
            return EditorState.createEmpty();
        }
    });
    const [coordinates, setCoordinates] = useState({top: 0, left: 0});
    const [mediaCoordinates, setMediaCoordinates] = useState({top: 0, left: 20});
    const [showPopUp, setShowPopUp] = useState(null);
    const [showMediaPopUp, setMediaShowPopUp] = useState(null);
    const textStylePopUpMenuRef = useRef(null);
    const editorRef = useRef(null);
    const mediaPopUpMenuRef = useRef(null);
    const codeEditorRef = useRef(null);
    const [codeValues, setCodeValues] = useState([]);
    const [imageValues, setImageValues] = useState([]);
    const [currentCodeIdx, setCurrentCodeIdx] = useState(-1);
    const [currentImageIdx, setCurrentImageIdx] = useState(-1);
    const [idx, setIdx] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [contentToEdit, setContentToEdit] = useState("class Solution{\n}");
    const [isNewCode, setIsNewCode] = useState(true);
    const [isNewImage, setIsNewImage] = useState(true);
    const [imageToEdit, setImageToEdit] = useState(null);
    const [idxToKey, setIdxToKey] = useState(new Map([]));
    const [lastPressedKey, setLastPressedKey] = useState(null);
    const modalContentTypes = {code: 1, image: 2};
    const [modalContentType, setModalContentType] = useState(null);

    const styleMap = {
        'STRIKETHROUGH': {
            textDecoration: 'line-through',
        },
        'BORDERED': {
            background: "#fafafa",
            border: "1px gray solid",
            borderRadius: "7px",
            padding: "2px 4px",
            fontFamily: 'Consolas, "Courier New", monospace',
            fontWeight: "500",
        }
    };

    function getBlockStyle(block) {
        switch (block.getType()) {
            case 'H1':
                return styles.h1text;
            case 'H2':
                return styles.h2text;
            default:
                return styles.text;
        }
    }

    const setBold = (e) => {
        e.preventDefault();
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
    }

    const setItalic = (e) => {
        e.preventDefault();
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
    }

    const setStrikethrough = (e) => {
        e.preventDefault();
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'STRIKETHROUGH'));
    }

    const setUnderline = (e) => {
        e.preventDefault();
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'));
    }

    const setBordered = (e) => {
        e.preventDefault();
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'BORDERED'));
    }

    const setH1 = (e) => {
        e.preventDefault();
        setEditorState(RichUtils.toggleBlockType(editorState, 'H1'));
    }

    const setH2 = (e) => {
        e.preventDefault();
        setEditorState(RichUtils.toggleBlockType(editorState, 'H2'));
    }

    const canInsert = (direction, key) => {
        const block = editorState.getCurrentContent().getBlockForKey(key);

        if (!block.getType() === 'atomic') {
            return;
        }

        const hasNoElementAfter = editorState.getCurrentContent().getBlockAfter(key) === undefined;

        const betweenTwoBlocks = (editorState.getCurrentContent().getBlockBefore(key)?.getType() === 'atomic' && direction === 'before')
            || (editorState.getCurrentContent().getBlockAfter(key)?.getType() === 'atomic' && direction === 'after');

        return (direction === 'after' && hasNoElementAfter) || betweenTwoBlocks;
    }

    const insert = (direction, key) => {
        if (!canInsert(direction, key)) {
            return;
        }
        const selection = editorState.getSelection();
        const contentState = editorState.getCurrentContent();
        const currentBlock = contentState.getBlockForKey(key);

        const blockMap = contentState.getBlockMap()
        const blocksBefore = blockMap.toSeq().takeUntil(function (v) {
            return v === currentBlock
        })
        const blocksAfter = blockMap.toSeq().skipUntil(function (v) {
            return v === currentBlock
        }).rest()
        const newBlockKey = genKey()
        let newBlocks = direction === 'before' ? [
            [newBlockKey, new ContentBlock({
                key: newBlockKey,
                type: 'unstyled',
                text: '',
                characterList: List(),
            })],
            [currentBlock.getKey(), currentBlock],
        ] : [
            [currentBlock.getKey(), currentBlock],
            [newBlockKey, new ContentBlock({
                key: newBlockKey,
                type: 'unstyled',
                text: '',
                characterList: List(),
            })],
        ];
        const newBlockMap = blocksBefore.concat(newBlocks, blocksAfter).toOrderedMap()
        const newContentState = contentState.merge({
            blockMap: newBlockMap,
            selectionBefore: selection,
            selectionAfter: selection,
        })

        const newEditorState = EditorState.push(editorState, newContentState, 'insert-fragment');

        const newSelection = new SelectionState({
            anchorKey: newBlockKey,
            anchorOffset: 0,
            focusKey: newBlockKey,
            focusOffset: 0,
            hasFocus: true
        });
        const finalEditorState = EditorState.forceSelection(newEditorState, newSelection);
        setTimeout(() => setEditorState(finalEditorState), 50);

        return newBlockKey;
    }

    const handleOnFocus = () => {
        if (lastPressedKey === 8) {
            setLastPressedKey(null);
        }
    }

    const onSelect = () => {
        handleOnFocus();

        if (editorState.getCurrentContent().getBlockForKey(editorState.getSelection().getFocusKey()).getType() === 'atomic') {
            setShowPopUp(false);
            return;
        }
        if (window.getSelection().isCollapsed) {
            setShowPopUp(false);
            return;
        }

        const selection = window.getSelection();
        const elementWidth = selection.getRangeAt(0).getBoundingClientRect().right -
            selection.getRangeAt(0).getBoundingClientRect().left;

        const popUpWidth = textStylePopUpMenuRef.current.offsetWidth;
        const popUpHeight = textStylePopUpMenuRef.current.offsetHeight;

        setCoordinates({
            top: selection.getRangeAt(0).getBoundingClientRect().top - popUpHeight - 16 + window.pageYOffset,
            left: selection.getRangeAt(0).getBoundingClientRect().left + ((elementWidth - popUpWidth) / 2)
        });
        setShowPopUp(true);
    }

    const handleMediaPopUpCursorMove = (state) => {
        const cursorOnBlockKey = state.getSelection().getFocusKey();
        const cursorOnBlock = state.getCurrentContent().getBlockForKey(cursorOnBlockKey);
        if (cursorOnBlock?.getText().length === 0) {
            if (state.getSelection().hasFocus) {
                updateMediaPosition();
            }

            setTimeout(() => {
                setMediaShowPopUp(true);
            }, 1);
        } else {
            setMediaShowPopUp(false);
        }
    }

    const updateMediaPosition = () => {
        setTimeout(()=> {
            setMediaCoordinates({
                top: window.getSelection().anchorNode.parentElement.offsetTop + 170,
                left: window.getSelection().anchorNode.parentElement.getBoundingClientRect().left - 50
            })
        }, 1);
    }

    const onTab = (e) => {
        e.preventDefault();
        let newContentState = Modifier.replaceText(
            editorState.getCurrentContent(),
            editorState.getSelection(),
            '\t'
        );
        setEditorState(EditorState.push(editorState, newContentState, 'insert-characters'));
    }

    const handleKeys = (e) => {
        setLastPressedKey(e.keyCode);

        const selection = editorState.getSelection();
        const currentContent = editorState.getCurrentContent();

        if (editorState.getCurrentContent().getBlockForKey(editorState.getSelection().getFocusKey())?.getType() === 'atomic') {
            e.preventDefault();
            return null;
        }

        // Запрещаем удаление из начала строки при наличии символов
        if (e.keyCode === 8 && editorState.getCurrentContent().getBlockForKey(editorState.getSelection().getFocusKey()).getType() !== 'atomic') {
            const selectedFullText = Math.abs(selection.getEndOffset() - selection.getStartOffset()) === currentContent.getBlockForKey(selection.getFocusKey()).getText().length;
            const removeFromStartWhenTrereIsSymbols = currentContent.getBlockForKey(selection.getFocusKey()).getText().length > 0
                && selection.getStartOffset() === 0 && currentContent.getBlockBefore(selection.getFocusKey())?.getType() === 'atomic';
            if (removeFromStartWhenTrereIsSymbols && !selectedFullText) {
                e.preventDefault();
                return 'handled';
            }
        }

        // Вставка новой строки
        if (e.keyCode === 13 && e.shiftKey === true) {
            let newContentState = Modifier.insertText(
                editorState.getCurrentContent(),
                editorState.getSelection(),
                '\n'
            );
            setEditorState(EditorState.push(editorState, newContentState, 'insert-characters'));
            return 'handled';
        } else if (e.keyCode === 13) {
            return getDefaultKeyBinding(e);
        } else {
            return getDefaultKeyBinding(e);
        }
    }

    const confirmMedia = (urlType, data) => {
        const contentState = editorState.getCurrentContent();
        const contentStateWithEntity = contentState.createEntity(urlType, 'IMMUTABLE', { src: data.src, content: data.content, id: idx, width: data.width, height: data.height});
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        setIdxToKey(idxToKey.set(idx, entityKey));
        setIdx(idx + 1);
        const newEditorState = EditorState.set(editorState, { currentContent: contentStateWithEntity });
        setEditorState(AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, ' '));
    }

    const updateMedia = (urlType, data) => {
        const contentState = editorState.getCurrentContent();
        const newContentState = contentState.mergeEntityData(data.entityKey, data);

        setEditorState(EditorState.push(editorState, newContentState, "update"));
        const selection = editorState.getSelection();

        onChange(EditorState.forceSelection(editorState, selection));
    }

    const promptForMedia = (type, data) => {
        confirmMedia(type, data);
    }

    const onClickCode = (id) => {
        if (typeof id !== "number") {
            return;
        }

        setModalContentType(modalContentTypes.code);
        setIsNewCode(false);
        setCurrentCodeIdx(id);
        setShowModal(true);
        setContentToEdit(id === -1 ? "class Solution{\n}" : codeValues[id]);
    }

    const onClickImage = (id) => {
        if (typeof id !== "number") {
            return;
        }

        setModalContentType(modalContentTypes.image);
        setIsNewImage(false);
        setCurrentImageIdx(id);
        setImageToEdit(id === -1 ? null : imageValues[id]);
        setShowModal(true);
    }

    function mediaBlockRenderer(block) {
        if (block.getType() === 'atomic') {
            return {
                component: Media,
                editable: false,
                props: {
                    onClickCode: onClickCode,
                    insert: insert,
                    onClickImage: onClickImage,
                    removeBlock: removeBlock,
                    readOnly: readOnly
                },
            };
        }
        return null;
    }

    const removeBlock = (blockKey) => {
        const contentState = editorState.getCurrentContent();
        const currentBlock = contentState.getBlockForKey(blockKey);

        if (currentBlock.getType() === 'atomic') {
            const blockMap = contentState.getBlockMap().delete(blockKey);
            const newContentState = contentState.merge({ blockMap });
            const newEditorState = EditorState.push(editorState, newContentState, 'remove-range');
            setEditorState(newEditorState);
        }
    }

    const addCode = (width, height) => {
        setIsNewCode(true);
        const content = codeEditorRef.current.editor.doc.getValue()
            .split('\n')
            .map(e => e.trimEnd())
            .join('\n');
        promptForMedia('code', {content: content, width: width, height: height});
        setCodeValues([...codeValues, content]);
        setShowModal(false);
        setMediaShowPopUp(false);
        setContentToEdit("class Solution{\n}");
    }

    const modifyCode = (width, height) => {
        setIsNewCode(false);
        const newCode = codeEditorRef.current.editor.doc.getValue()
            .split('\n')
            .map(e => e.trimEnd())
            .join('\n');
        const newValues = [...codeValues];
        newValues[currentCodeIdx] = newCode;
        setCodeValues(newValues);

        updateMedia('code', {content: newCode, entityKey: idxToKey.get(currentCodeIdx), width: width, height: height});

        setIsNewCode(true);
        setShowModal(false);
        setContentToEdit("class Solution{\n}");
    }

    const addImage = (width, imageSrc, file) => {
        setIsNewImage(true);
        promptForMedia('image', {content: file, src: imageSrc, width: width});
        setImageValues([...imageValues, file]);
        setShowModal(false);
        setImageToEdit(null);
        setMediaShowPopUp(false);
    }

    const modifyImage = (width, imageSrc, file) => {
        setIsNewImage(false);
        updateMedia('image', {src: URL.createObjectURL(file), content: file, entityKey: idxToKey.get(currentImageIdx), width: width});
        setShowModal(false);
        setImageToEdit(null);
        setIsNewImage(true);
    }

    function onChange(newState) {
        handleMediaPopUpCursorMove(newState);
        const currentContentState = editorState.getCurrentContent();
        const newContentState = newState.getCurrentContent();

        let filteredState = newState;

        mediaPopUpMenuRef.current.hideOptions();

        if (newContentState.getBlockForKey(newState.getSelection().getFocusKey()).getText().length === 0) {
            setMediaShowPopUp(true);
        } else {
            setMediaShowPopUp(false);
        }

        if (currentContentState !== newContentState) {
            if (newState.getLastChangeType() === "insert-fragment") {
                filteredState = filterEditorState(
                    {
                        blocks: ['H1', 'H2'],
                        styles: ["BOLD", "ITALIC", "STRIKETHROUGH", "UNDERLINE", "BORDERED", "H1", "H2"],
                        entities: [
                            {
                                type: "image",
                                attributes: ["src", "id", "width", "content"],
                                allowlist: {
                                    src: true,
                                }
                            },
                            {
                                type: "code"
                            },
                            {
                                type: 'unstyled'
                            }
                        ],
                        maxNesting: 1,
                        whitespacedCharacters: ["📷"],
                    },
                    filteredState,
                )
            }
        } else {
            onSelect();
        }

        setEditorState(filteredState);
        setStateToParent(editorState);
    }

    const addMediaCode = () => {
        setModalContentType(modalContentTypes.code);
        setCurrentCodeIdx(-1);
        setShowModal(true);
    }

    const addMediaImage = () => {
        setModalContentType(modalContentTypes.image);
        setCurrentImageIdx(-1);
        setImageToEdit(null);
        setShowModal(true);
    }

    const getModalContentByType = () => {
        if (modalContentType === modalContentTypes.code) {
            return <MyModal visible={showModal} setVisible={setShowModal}
                            children={
                                <CodeInsertion codeEditorRef={codeEditorRef}
                                               content={contentToEdit}
                                               onClick={isNewCode ? addCode : modifyCode}
                                />}/>
        } else if (modalContentType === modalContentTypes.image) {
            return <MyModal visible={showModal} setVisible={setShowModal}
                            children={
                                <ImageInsertion file={imageToEdit}
                                                onClick={isNewImage ? addImage : modifyImage}
                                />}/>
        } else {
            return null;
        }
    }

    return (
        <div id={styles.createArticle}>
            <div id={styles.articleContent} className={styles.text}>
                <Editor editorRef={editorRef} editorState={editorState} readOnly={readOnly}
                        onChange={onChange} customStyleMap={styleMap}
                        blockStyleFn={getBlockStyle} blockRendererFn={mediaBlockRenderer}
                        className={styles.articleContent} onFocus={e => onSelect(e)} onTab={(e) => onTab(e)}
                        placeholder={"Поделитесь знаниями здесь.."} autoComplete={"off"}
                        keyBindingFn={e => handleKeys(e)}
                />
            </div>

            <TextStylePopUpMenu ref={textStylePopUpMenuRef} top={coordinates.top} left={coordinates.left} visible={!readOnly && showPopUp}
                                setBold={setBold} setItalic={setItalic} setStrikethrough={setStrikethrough} setUnderline={setUnderline}
                                setH1={setH1} setH2={setH2} setBordered={setBordered}
            />
            <MediaPopUpMenu ref={mediaPopUpMenuRef} top={mediaCoordinates.top} left={mediaCoordinates.left}
                            visible={!readOnly && showMediaPopUp} addMedia={{addCode: addMediaCode, addImage: addMediaImage}}/>


            {getModalContentByType()}
        </div>
    );
};

export default ArticleEditor;