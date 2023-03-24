import CodeEditor from "../UI/textarea/CodeEditor";
import React, {useRef, useState} from "react";
import styles from './CodeInsertion.module.css'

const CodeInsertion = ({codeEditorRef, content, onClick}) => {

    const widthRef = useRef(null);
    const heightRef = useRef(null);

    const [selectedWidth, setSelectedWidth] = useState(50);
    const [selectedHeight, setSelectedHeight] = useState(20);

    const reset = () => {
        setSelectedWidth(50);
        setSelectedHeight(20);
    }

    return <div id={styles.codeInsertion}>

        <div id={styles.elementStyle}>
            <p>Ширина элемента (%): </p> <span>{selectedWidth}</span>
            <input ref={widthRef} type="range" min="10" max="100" step="1" value={selectedWidth} onChange={() => setSelectedWidth(widthRef.current.value)}/>
        </div>

        <div id={styles.elementStyle}>
            <p>Отображать строк: </p> <span>{selectedHeight}</span>
            <input ref={heightRef} type="range" min="1" max="32" step="1" value={selectedHeight} onChange={() => setSelectedHeight(heightRef.current.value)}/>
        </div>


        <p>Код: </p>
        <div id={styles.content}>
            <CodeEditor ref={codeEditorRef} editable={true} value={content}/>
        </div>

        <div id={styles.actionButtons}>
            <button id={styles.cancelButton} onClick={() => reset()}>Сбросить</button>
            <button id={styles.okButton} onClick={() => onClick(selectedWidth, selectedHeight * 20 + 10)}>Сохранить</button>
        </div>
    </div>
}

export default CodeInsertion;