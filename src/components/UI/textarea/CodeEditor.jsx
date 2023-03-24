import React, {forwardRef} from 'react';
import styles from "./CodeEditor.module.css";
import './CodeMirrorOverride.css'
import CodeMirror from "@uiw/react-codemirror";

const CodeEditor = forwardRef(({value, editable}, codeEditorRef) => {

    // Fix bug: фон gutter не смещался вниз при прокрутке блока кода
    setTimeout(() => {
        const gutters = document.getElementsByClassName('CodeMirror-gutters');
        for (let gutter of gutters) {
            let styles = gutter.getAttribute('style');
            gutter.setAttribute('style', styles.replace(/height: \d+px/, 'height:' + gutter.style.height +  ' !important'));
        }
    }, 10);

    const cursorBlinkRate = editable ? 530 : -1;

    return (
        <div id={styles.codeEditor}>
            <CodeMirror ref={codeEditorRef}
                value={value}
                options={{
                    mode: 'java',
                    tabSize: 4,
                    fixedGutter: true,
                    cursorBlinkRate: cursorBlinkRate,
                    viewportMargin: Infinity,
                }}
            />
        </div>
    );

});

export default CodeEditor;