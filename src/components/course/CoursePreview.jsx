import React from 'react';
import styles from './Course.module.css'

const CoursePreview = () => {
    return (
        <div id={styles.preview}>
                <img id={styles.imgPreview} src="https://psv4.userapi.com/c235031/u142670512/docs/d33/a44edd4e007d/java-course-preview.png?extra=2MxMydyvH2Vc_8ucH77_uOtTwoRiCd85UP8leDcKeI-mCkYThvtZcmrCMRUBNyFf5TKct7-24DEcbnJyvR17Fm0uCglgjUeTYHneL_a-2EnJGwox0k730zMZKK96c-vLd-mQYmU-avXZRqmRjjdfWNlKVg"/>
                <div id={styles.textPreview}>
                    <div id={styles.title}>Java</div>
                    <div id={styles.description}>Ваш первый шаг в Java разработке</div>
                </div>
        </div>
    );
};

export default CoursePreview;