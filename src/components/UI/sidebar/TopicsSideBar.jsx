import React from 'react';
import styles from "./TopicsSideBar.module.css";
import ChapterSideBar from "./ChapterSideBar";

const TopicsSideBar = ({courseInfo, viewTopicId}) => {
    return (
        <div id={styles.topicsSideBar}>
            <div id={styles.courseInfo}>
                <img id={styles.coursePreviewImg} src="/img/previews/java-course-preview.png"/>
                <div id={styles.coursePreviewText}>
                    <div id={styles.courseName}>Java</div>
                    <div id={styles.courseProgress}>Пройдено 50%</div>
                </div>

            </div>
            <div id={styles.content}>
                {courseInfo.chapters?.map((chapter, index) =>
                    <ChapterSideBar key={chapter.chapterTitle} chapter={chapter} courseName={courseInfo.courseName}
                                    chapterNumber={index + 1} viewTopicId={viewTopicId}/>
                )}
            </div>
        </div>
    );
};

export default TopicsSideBar;