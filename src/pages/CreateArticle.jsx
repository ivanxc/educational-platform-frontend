import React, {useRef, useState} from 'react';
import styles from '../components/article/CreateArticle.module.css'
import "draft-js/dist/Draft.css";
import { convertToRaw } from 'draft-js';
import ArticleEditor from "../components/article/ArticleEditor";

const CreateArticle = () => {

    const [editorState, setEditorState] = useState(null);
    const articleTitleRef = useRef(null);

    const showPreview = () => {
        const content = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
        const previewArticle = JSON.stringify({
            title: articleTitleRef.current.value,
            content: content
        });
        localStorage.setItem("previewArticle", previewArticle);
        window.open('./create/preview', '_blank');
    }

    const publishArticle = () => {
        const content = convertToRaw(editorState.getCurrentContent());
        console.log('rawState ', JSON.stringify(content));
    }

    return (
        <div id={styles.createArticle}>
            <input id={styles.articleName} ref={articleTitleRef} placeholder={"Название статьи"} autoComplete={"off"}/>
            <input id={styles.tags} placeholder={"Теги (через запятую)"} autoComplete={"off"}/>
            <div id={styles.articleContent} className={styles.text}>
                <ArticleEditor readOnly={false} setStateToParent={setEditorState}/>
            </div>

            {editorState !== null ?
            <div id={styles.actions}>
                <button id={styles.previewButton} onClick={(e) => showPreview()}>Предпросмотр</button>
                <button id={styles.publishButton} onClick={(e) => publishArticle()}>Опубликовать</button>
            </div>
                : null
            }
        </div>
    );
};

export default CreateArticle;