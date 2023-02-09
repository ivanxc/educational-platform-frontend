import React from 'react';
import styles from "./Tasks.module.css";

const TaskItem = ({task, grayBackground}) => {

    const difficultyToStyle = new Map([
        ['EASY', styles.difficultyEasy],
        ['MEDIUM', styles.difficultyMedium],
        ['HARD', styles.difficultyHard]
    ]);

    const difficultyToText = new Map([
        ['EASY', 'Легкая'],
        ['MEDIUM', 'Средняя'],
        ['HARD', 'Сложная']
    ]);

    const statusToImg = new Map([
        ['SOLVED', "/img/icons/solved.svg"],
        ['IN_PROGRESS', "/img/icons/in-progress.svg"],
        ['NO_ATTEMPTS', null]
    ])

    return (
        <div className={styles.taskItem + ' ' + (grayBackground ? styles.taskItemGray : null)}>
            <div className={styles.taskItemStatus}>
                <img src={statusToImg.get(task.status)}/>
            </div>
            <a href={'tasks/' + task.id} className={styles.taskItemName}>{task.name}</a>
            <div className={styles.taskItemSolution}>
                <a href={'tasks/' + task.id + '/solution'}>
                    <img src="/img/icons/solution.svg"/>
                </a>
            </div>
            <div className={styles.taskItemDifficulty + ' ' + difficultyToStyle.get(task.difficulty)}>
                {difficultyToText.get(task.difficulty)}
            </div>
            <div className={styles.taskItemAcceptance}>{task.acceptanceRate}%</div>
        </div>
    );
};

export default TaskItem;