import React from 'react';
import styles from '../components/tasks/Tasks.module.css'
import TopicsSideBar from "../components/UI/sidebar/TopicsSideBar";
import Header from "../components/UI/Header";
import TasksList from "../components/tasks/TasksList";

const Tasks = () => {

    const mockCourse = {
        courseName: 'Java',
        courseProgress: '75%',
        chapters: [
            {
                chapterTitle: 'Введение',
                topics: [
                    {id: 1, title: 'Введение в Java', passed: true}
                ]
            },
            {
                chapterTitle: 'Основы',
                topics: [
                    {id: 2, title: 'Переменные и типы данных', passed: true},
                    {id: 3, title: 'Операции', passed: true},
                    {id: 4, title: 'Условные выражения и конструкции', passed: true},
                    {id: 5, title: 'Массивы', passed: true},
                    {id: 5, title: 'Циклы', passed: true},
                    {id: 5, title: 'Методы', passed: false},
                    {id: 5, title: 'Дополнительно', passed: false},
                    {id: 5, title: 'Правила нейминга', passed: false}
                ]
            }
        ]
    }

    const tasks = [
        {
            id: 1,
            name: '#12 Сумма A и B',
            status: 'SOLVED',
            difficulty: 'EASY',
            acceptanceRate: 95.0
        },
        {
            id: 2,
            name: '#13 Сложение массивов',
            status: 'SOLVED',
            difficulty: 'EASY',
            acceptanceRate: 90
        },
        {
            id: 3,
            name: '#14 Удалить дубликаты из массива',
            status: 'SOLVED',
            difficulty: 'EASY',
            acceptanceRate: 89.5
        },
        {
            id: 4,
            name: '#15 Является ли число палиндромом',
            status: 'IN_PROGRESS',
            difficulty: 'MEDIUM',
            acceptanceRate: 73.8
        },
        {
            id: 5,
            name: '#16 Поиск кратчайшего пути в графе',
            status: 'IN_PROGRESS',
            difficulty: 'HARD',
            acceptanceRate: 50
        },
        {
            id: 6,
            name: '#17 Соединить k массивов',
            status: 'NO_ATTEMPTS',
            difficulty: 'HARD',
            acceptanceRate: 23
        }
    ];

    return (
        <div id={styles.tasks}>
            <Header/>
            <div id={styles.container}>
                <TopicsSideBar courseInfo={mockCourse}/>
                <div id={styles.tasksContent}>
                    <div id={styles.tasksHeader}>Задачи по теме <strong>2.5. Циклы</strong></div>
                    <div id={styles.tasksSolvedCounter}>Решено 5/7</div>
                    <div id={styles.tasksListContainer}>
                        <TasksList tasks={tasks}/>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Tasks;