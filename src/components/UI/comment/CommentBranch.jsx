import React, {useState} from 'react';
import styles from "./Comment.module.css";
import Comment from "./Comment";
import CommentInputField from "../textarea/comment/CommentInputField";

const CommentBranch = ({comment}) => {

    const [show, setShow] = useState(false);
    const [replyToUsername, setReplyToUsername] = useState(null);
    const [replyToCommentId, setReplyToCommentId] = useState(null);

    const handleReplyButton = (replyToComment) => {
        if (replyToUsername === null) {
            setShow(true);
        } else if (replyToUsername === replyToComment.username) {
            setShow(!show);
        }
        setReplyToUsername(replyToComment.username);
        setReplyToCommentId(replyToComment.commentId);
    }

    return (
        <div>
            <Comment currentComment={comment} replyToComment={comment.replyToComment} handleClickOnReplyButton={handleReplyButton}/>
            <div id={styles.replies}>
                {comment?.replies.map(comment =>
                    <Comment key={comment.commentId} currentComment={comment} replyToComment={comment.replyToComment} handleClickOnReplyButton={handleReplyButton}/>)}
                {show ?
                    <div className={styles.myReply}>
                        <p className={styles.myReplyUsername}>{replyToUsername},</p>
                        <CommentInputField replyTo={replyToCommentId}/>
                    </div>
                    : null
                }
            </div>
        </div>
    );
};

export default CommentBranch;