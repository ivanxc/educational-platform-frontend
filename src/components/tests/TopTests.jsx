import React from 'react';
import styles from './Tests.module.css'

const TopTests = ({topTestHeaderName, topTestContent}) => {
    return (
        <div className={styles.topTest}>
            <div className={styles.topTestHeader}>{topTestHeaderName}</div>
            <div className={styles.topTestList}>
                {topTestContent?.map(content =>
                    <a href={content.link} className={content.passed ? styles.topTestCoursePassed : styles.topTestCourse} key={content.link}>
                        <div>
                            <span className={styles.topTestCourseName}>{content.course}</span> <span className={styles.topTestCourseTopics}>{content.topics}</span>
                        </div>
                        <img src={content.passed ? "./../img/icons/check-mark.svg" : "./../img/icons/arrow-to-right.svg"}/>
                    </a>
                )}
            </div>
        </div>
    );
};

export default TopTests;