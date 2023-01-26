import React from 'react';
import styles from './Course.module.css'
import CourseChapterContent from "./CourseChapterContent";

const CourseContent = ({content}) => {
    return (
        <div id={styles.courseContent}>
            {content?.map(chapter =>
                <CourseChapterContent chapterTitle={chapter.chapterTitle} topics={chapter.topics}/>
            )}
        </div>
    );
};

export default CourseContent;