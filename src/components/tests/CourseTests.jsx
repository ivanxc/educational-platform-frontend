import React from 'react';
import styles from './Tests.module.css'
import CourseTopics from "./CourseTopics";

const CourseTests = ({tests}) => {
    return (
        <div id={styles.courseTestList}>
            <div>
                {tests?.map((courseTest, index) => (
                    index % 2 === 0 ? <CourseTopics course={courseTest} key={courseTest.courseId}/>
                        : null
                ))}
            </div>

            <div>
                {tests?.map((courseTest, index) => (
                    index % 2 === 1 ? <CourseTopics course={courseTest} key={courseTest.courseId}/>
                        : null
                ))}
            </div>
        </div>
    );
};

export default CourseTests;