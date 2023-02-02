import React from 'react';
import CourseTests from "./CourseTests";

const Unfinished = () => {

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
                }
            ]
        }
    ]

    return (
        <div>
            <CourseTests tests={testsMock}/>
        </div>
    );
};

export default Unfinished;