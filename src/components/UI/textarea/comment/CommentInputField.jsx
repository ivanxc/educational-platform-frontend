import React, {useRef, useState} from "react";
import styles from "./CommentInputField.module.css"

const CommentInputField = ({replyTo}) => {

    const [userCommentText, setUserCommentText] = useState('');
    const fieldRef = useRef();

    const preprocessText = () => {
        return userCommentText.replaceAll(/\n{3,}/g, '\n\n')
    }

    return (
        <div id={styles.writeComment}>
            <div id={styles.userCommentField} ref={fieldRef} placeholder="Написать комментарий.." contentEditable={true} onKeyUp={(e) => setUserCommentText(e.target.innerText)}/>
            <img id={styles.sendButton} src="./../../img/icons/send-btn.svg"
                 style={{visibility: userCommentText.length > 0 ? 'visible' : 'hidden'}}
                 onClick={() => {
                     // send comment..
                     console.log("REQUEST: ", {text: preprocessText(), replyTo: replyTo});
                     setUserCommentText('');
                     fieldRef.current.innerText = '';
                 }}/>
        </div>
    );
};

export default CommentInputField;