import React from 'react';
import styles from './Progress.module.css'
import ScoreCircle from "../UI/progress/ScoreCircle";
import ActivityDiagram from "./ActivityDiagram";
import ActivityCalendar from "./ActivityCalendar";
import PassedCourses from "./PassedCourses";

const PlayerStat = ({data}) => {
    return (
        <div id={styles.container}>
            <div id={styles.activity}>
                <div id={styles.activityTitle}>Ваша активность</div>
                <div className={styles.activityText}>Сегодня</div>
                <div id={styles.topBlock}>
                    <div id={styles.todayValues}>
                        <ScoreCircle progress={data.myScore}/>
                        <div id={styles.indicators}>
                            <div className={styles.indicator}>
                                <img src="./../img/icons/articles-read.svg"/>Прочитано статей <span>{data.todayArticles}</span>
                            </div>
                            <div className={styles.indicator}>
                                <img src="./../img/icons/tests-passed.svg"/>Пройдено тестов <span>{data.todayTests}</span>
                            </div>
                            <div className={styles.indicator}>
                                <img src="./../img/icons/tasks-solved.svg"/>Решено задач <span>{data.todayTasks}</span>
                            </div>
                        </div>
                        <ActivityDiagram diagram={data.diagram}/>
                    </div>
                </div>
                <div className={styles.activityText}>В этом году</div>
                <div className={styles.topBlock}>
                    <ActivityCalendar dates={data.dates}/>
                </div>
            </div>
            <PassedCourses myCourses={data.myCourses}/>
        </div>
    );
};

export default PlayerStat;