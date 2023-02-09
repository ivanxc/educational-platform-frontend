import React from 'react';
import styles from "./TopicsSideBar.module.css";

const ChapterSideBar = ({chapter, courseName, chapterNumber}) => {
    return (
        <div className={styles.chapter}>
            <div className={styles.chapterTitle}>
                <div className={styles.chapterNumber}>{chapterNumber + '.'}</div>
                <div>{chapter.chapterTitle}</div>
            </div>
            <div className={styles.chapterContent}>
                {chapter.topics?.map((topic, index) =>
                    <a className={styles.topic} href={courseName + '/' + topic.id + '/test'} key={topic.title}>
                        <div className={styles.topicNumber}>
                            {chapterNumber + '.' + (index + 1) + '.'}
                        </div>
                        <div>
                            {topic.title}
                        </div>
                    </a>
                )}
            </div>

        </div>
    );
};

export default ChapterSideBar;