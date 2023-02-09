import React from 'react';
import styles from "./Tasks.module.css";
import TaskItem from "./TaskItem";

const TasksList = ({tasks}) => {

    return (
        <div id={styles.tasksList}>

            <div className={styles.taskItemHeader}>
                <div className={styles.taskItemStatus}>
                    Статус
                </div>
                <div className={styles.taskItemName}>Название</div>
                <div className={styles.taskItemSolution}>Решение</div>
                <div className={styles.taskItemDifficulty}>Сложность</div>
                <div className={styles.taskItemAcceptance}>Правильных решений</div>
            </div>

            <div style={{height: 1, width: '100%', background: '#D7D7D7'}}/>

            {tasks?.map((task, i) =>
                <TaskItem task={task} key={task.id} grayBackground={i % 2 === 1}/>
            )}
        </div>
    );
};

export default TasksList;