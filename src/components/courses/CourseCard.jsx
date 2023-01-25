import React from 'react';
import styles from './Courses.module.css'

const CourseCard = (props) => {
    return (
        <a className={styles.courseCard}>
            <a href={props.link}>
                <img src={props.imgSrc}/>
            </a>
            <div className={styles.title}>{props.title}</div>
        </a>
    );
};

export default CourseCard;