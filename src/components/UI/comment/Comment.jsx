import React, {useState} from 'react';
import styles from "./Comment.module.css";

const Comment = ({currentComment, replyToComment, handleClickOnReplyButton}) => {

    const [hasLike, setHasLike] = useState(currentComment.isLiked);
    const [likesCount, setLikesCount] = useState(currentComment.likes);

    function handleLikeClick() {
        setHasLike(!hasLike);
        if (!hasLike) {
            setLikesCount(likesCount + 1);
        } else {
            setLikesCount(likesCount - 1);
        }
        // запрос на сервер
    }

    function highlightComment(commentId) {
        const commentToHighlight = document.getElementById('comment-' + commentId);
        commentToHighlight.className += ' ' + styles.highlighted;
        setTimeout(() => {
            commentToHighlight.className = commentToHighlight.className.replaceAll(' ' + styles.highlighted, '');
        }, 1000)
    }

    return (
        <div id={'comment-' + currentComment.commentId} className={styles.comment}>
            <img className={styles.userPhoto} src={currentComment.photoUrl}/>
            <div className={styles.commentInfo}>
                <div className={styles.authorInfo}>
                    <span className={styles.username}>{currentComment.username}</span>
                    <span className={styles.commentDate}>{currentComment.date}</span>
                </div>
                <div className={styles.commentText}>
                    {replyToComment ?
                        <span className={styles.replyToUser} onClick={() => highlightComment(replyToComment.commentId)}>{replyToComment.username}, </span>
                        : null
                    }
                    <span>{currentComment.text}</span>
                </div>
                <div className={styles.commentActions}>
                    <div className={styles.likes}>
                        <img src="./../img/icons/like-icon.svg" className={hasLike ? styles.liked : ''} onClick={() => handleLikeClick()}/>
                        <span>{likesCount}</span>
                    </div>
                    <button className={styles.replyButton}
                            onClick={() => handleClickOnReplyButton(currentComment)}>Ответить</button>
                </div>
            </div>
        </div>
    );
};

export default Comment;