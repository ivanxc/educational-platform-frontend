import styles from "./ArticleEditor.module.css";
import CodeEditor from "../UI/textarea/CodeEditor";
import React, {useRef} from "react";

const Code = (props) => {

    const codeRef = useRef(null);
    const codeEditorRef = useRef(null);

    const setWidthToParent = () => {
        try {
            codeRef.current.parentElement.style.width = props.width + '%';
        } catch (ignoredException) {
        }
    }

    const setHeightToParent = () => {
        try {
            codeRef.current.parentElement.style.height = props.height + 'px';
        } catch (ignoredException) {
        }
    }

    setTimeout(() => setWidthToParent(), 25);
    setTimeout(() => setHeightToParent(), 25);

    return <div ref={codeRef} id={styles.codeEditor} onKeyPress={e => e.preventDefault()}>
        {props.readOnly ? null :
            <div id={styles.controls}>
                <div id={styles.edit} onClick={() => props.onClickCode(props.id)}>Изменить</div>
                <div id={styles.remove} onClick={() => props.onClickCode(props.remove(props.blockKey))}>Удалить</div>
            </div>
        }
        <CodeEditor ref={codeEditorRef} editable={false} value={props.content}/>
        <div className={styles.insertionOnClick} onClick={() => props.insert('after', props.blockKey)}/>
    </div>
}

export default Code;