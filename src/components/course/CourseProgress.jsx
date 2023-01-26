import React from 'react';
import styles from './Course.module.css'
import Circle from "../UI/progress/Circle";

const CourseProgress = () => {
    return (
        <div id={styles.progress}>
            <div id={styles.mainProgress}>
                <div id={styles.progressTitle}>Прогресс</div>
                <div id={styles.indicators}>
                    <div className={styles.indicator}>
                        <div className={styles.indicatorName}>Темы</div>
                        <div className={styles.indicatorValues}>
                            <div>9</div>
                            <div className={styles.separator}/>
                            <div>9</div>
                        </div>
                    </div>
                    <div className={styles.indicator}>
                        <div className={styles.indicatorName}>Практика</div>
                        <div className={styles.indicatorValues}>
                            <div>9</div>
                            <div className={styles.separator}/>
                            <div>9</div>
                        </div>
                    </div>
                    <div className={styles.indicator}>
                        <div className={styles.indicatorName}>Задачи</div>
                        <div className={styles.indicatorValues}>
                            <div>47</div>
                            <div className={styles.separator}/>
                            <div>47</div>
                        </div>
                    </div>
                </div>
            </div>
            <Circle progress={77.77}/>
        </div>
    );
};

export default CourseProgress;