import React from 'react';
import styles from './Tests.module.css'
import DailyTests from "./DailyTests";
import CourseTests from "./CourseTests";

const ByTopic = () => {

    const topMock = {
        testsOfDay: [
            {course: 'Java', topics: 'Коллекции, Аннотации, Stream API', passed: true, link: 'tests/today/1'},
            {course: 'PostgreSQL', topics: 'Соединения, Триггеры, HAVING', passed: true, link: 'tests/today/5'},
            {course: 'Тестирование', topics: 'TDD, Mockito, BDD', passed: false, link: 'tests/today/12'}
        ],
        timeToRemember: [
            {course: 'Java', topics: 'Generics, Многопоточность, Рекурсия', passed: true, link: 'tests/remember/java'},
            {course: 'PostgreSQL', topics: 'Вложенные запросы, Индексы, Транзакции', passed: false, link: 'tests/remember/postgesql'},
            {course: 'Spring', topics: 'Bean Definition, Dependency Injection', passed: false, link: 'tests/remember/spring'}
        ]
    }

    const testsMock = [
        {
            courseId: 1,
            courseTitle: "Java",
            chapters: [
                {
                    chapterTitle: 'Введение',
                    chapterId: 1,
                    topics: [
                        {id: 1, title: 'Введение в Java'}
                    ]
                },
                {
                    chapterTitle: 'Основы',
                    chapterId: 2,
                    topics: [
                        {id: 2, title: 'Переменные и типы данных'},
                        {id: 3, title: 'Операции'},
                        {id: 4, title: 'Условные выражения и конструкции'},
                        {id: 5, title: 'Массивы'},
                        {id: 6, title: 'Циклы'},
                        {id: 7, title: 'Методы'},
                        {id: 8, title: 'Дополнительно'},
                        {id: 9, title: 'Правила нейминга'}
                    ]
                }
            ]
        },
        {
            courseId: 2,
            courseTitle: "PostgreSQL",
            chapters: [
                {
                    chapterTitle: 'Введение',
                    chapterId: 1,
                    topics: [
                        {id: 1, title: 'Введение в Java'}
                    ]
                },
                {
                    chapterTitle: 'Основы',
                    chapterId: 2,
                    topics: [
                        {id: 2, title: 'Переменные и типы данных'},
                        {id: 3, title: 'Операции'},
                        {id: 4, title: 'Условные выражения и конструкции'},
                        {id: 5, title: 'Массивы'},
                        {id: 6, title: 'Циклы'},
                        {id: 7, title: 'Методы'},
                        {id: 8, title: 'Дополнительно'},
                        {id: 9, title: 'Правила нейминга'}
                    ]
                }
            ]
        },
        {
            courseId: 3,
            courseTitle: "JUnit",
            chapters: [
                {
                    chapterTitle: 'Введение',
                    chapterId: 1,
                    topics: [
                        {id: 1, title: 'Введение в Java'}
                    ]
                },
                {
                    chapterTitle: 'Основы',
                    chapterId: 2,
                    topics: [
                        {id: 2, title: 'Переменные и типы данных'},
                        {id: 3, title: 'Операции'},
                        {id: 4, title: 'Условные выражения и конструкции'},
                        {id: 5, title: 'Массивы'},
                        {id: 6, title: 'Циклы'},
                        {id: 7, title: 'Методы'},
                        {id: 8, title: 'Дополнительно'},
                        {id: 9, title: 'Правила нейминга'}
                    ]
                }
            ]
        },
        {
            courseId: 4,
            courseTitle: "Maven",
            chapters: [
                {
                    chapterTitle: 'Введение',
                    chapterId: 1,
                    topics: [
                        {id: 1, title: 'Введение в Java'}
                    ]
                },
                {
                    chapterTitle: 'Основы',
                    chapterId: 2,
                    topics: [
                        {id: 2, title: 'Переменные и типы данных'},
                        {id: 3, title: 'Операции'},
                        {id: 4, title: 'Условные выражения и конструкции'},
                        {id: 5, title: 'Массивы'},
                        {id: 6, title: 'Циклы'},
                        {id: 7, title: 'Методы'},
                        {id: 8, title: 'Дополнительно'},
                        {id: 9, title: 'Правила нейминга'}
                    ]
                }
            ]
        }
    ]

    return (
        <div id={styles.byTopic}>
            <DailyTests tests={topMock}/>
            <CourseTests tests={testsMock}/>
        </div>
    );
};

export default ByTopic;