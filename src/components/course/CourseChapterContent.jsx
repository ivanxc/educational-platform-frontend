import React from 'react';
import styles from './Course.module.css'

const CourseChapterContent = (props) => {
    var idx = 1;

    return (
        <div className={styles.chapterContent}>
            <div className={styles.chapterTitle}>{props.chapterTitle}</div>
            <div className={styles.chapterTopics}>
                {console.log(props.topics)}
                {props.topics?.map(topic =>
                    <a href={topic.id}>
                        <span>{idx++}. {topic.title}</span>
                        {topic.passed ? <img src="./../img/icons/passed.svg"/> : null}
                    </a>
                )}
            </div>

        </div>
    );
};

export default CourseChapterContent;