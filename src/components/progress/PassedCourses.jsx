import React from 'react';
import styles from "./PassedCourses.module.css";

const PassedCourses = ({myCourses}) => {
    const passedCoursesCount = myCourses.easy.filter(c => c.passed).length +
        myCourses.medium.filter(c => c.passed).length +
        myCourses.hard.filter(c => c.passed).length;
    const coursesCount = myCourses.easy.length + myCourses.medium.length + myCourses.hard.length;

    return (
        <div id={styles.passedCourses}>
            <div id={styles.passedCoursesStat}>Пройдено <span>{passedCoursesCount}/{coursesCount}</span> курсов по специальности <span>Java разработчик</span></div>

            <div id={styles.courseList}>
                <div className={styles.commonBlock}>
                    <div className={styles.leftBlock}>Уровень</div>
                    <div className={styles.rightBlock}>Курсы</div>
                </div>
                <div className={styles.commonBlock}>
                    <div className={styles.leftBlock}>
                        <img src="./../img/icons/star.svg"/>
                    </div>
                    <div className={styles.rightBlock}>
                        {
                            myCourses?.easy.map(c =>
                                <a href={c.link} className={styles.courseCard} style={{backgroundColor: c.bg}}>
                                    <img src={c.img}/>
                                    <div>{c.name}</div>
                                    {c.passed ? null : <div className={styles.notPassedCourse}/>}
                                </a>
                            )
                        }
                    </div>
                </div>
                <div className={styles.commonBlock}>
                    <div className={styles.leftBlock}>
                        <img src="./../img/icons/star.svg"/>
                        <img src="./../img/icons/star.svg"/>
                    </div>
                    <div className={styles.rightBlock}>
                        {
                            myCourses.medium?.map(c =>
                                <a href={c.link} className={styles.courseCard} style={{backgroundColor: c.bg}}>
                                    <img src={c.img}/>
                                    <div>{c.name}</div>
                                    {c.passed ? null : <div className={styles.notPassedCourse}/>}
                                </a>
                            )
                        }
                    </div>
                </div>
                <div className={styles.commonBlock}>
                    <div className={styles.leftBlock}>
                        <img src="./../img/icons/star.svg"/>
                        <img src="./../img/icons/star.svg"/>
                        <img src="./../img/icons/star.svg"/>
                    </div>
                    <div className={styles.rightBlock}>
                        {
                            myCourses.hard?.map(c =>
                                <a href={c.link} className={styles.courseCard} style={{backgroundColor: c.bg}}>
                                    <img src={c.img}/>
                                    <div>{c.name}</div>
                                    {c.passed ? null : <div className={styles.notPassedCourse}/>}
                                </a>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PassedCourses;