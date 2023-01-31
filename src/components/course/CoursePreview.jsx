import React from 'react';
import styles from './Course.module.css'

const CoursePreview = () => {
    return (
        <div id={styles.preview}>
                <img id={styles.imgPreview} src="/img/previews/java-course-preview.png"/>
                <div id={styles.textPreview}>
                    <div id={styles.title}>Java</div>
                    <div id={styles.description}>Ваш первый шаг в Java разработке</div>
                </div>
        </div>
    );
};

export default CoursePreview;