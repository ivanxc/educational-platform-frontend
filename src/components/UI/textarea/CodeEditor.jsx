import React, {useState} from 'react';
import styles from "./CodeEditor.module.css";
import "./CodeMirrorOverride.css"
import CodeMirror, {basicSetup} from '@uiw/react-codemirror';
import {java} from "@codemirror/lang-java";

const CodeEditor = ({value, setValue, editable}) => {

    const [editorTheme, setEditorTheme] = useState('light');
    const themes = [{title: 'Светлая', theme: 'light'}, {title: 'Темная', theme: 'dark'}];

    const onChange = React.useCallback((value, viewUpdate) => {
    }, []);

    window.addEventListener("keydown", function(e) {
        if (e.key === 114 || (e.ctrlKey && e.keyCode === 70)) {
            e.stopImmediatePropagation();
        }
    }, true);

    return (
        <div id={styles.codeEditor}>
            <CodeMirror className={styles.codeMirror}
                value={value}
                extensions={[java(), basicSetup({tabSize: 4,
                    foldGutter: false,
                    autocompletion: true
                })]}
                onChange={onChange}
                height={"100%"}
                editable={editable}
                theme={editorTheme}
            />
        </div>
    );
};

export default CodeEditor;