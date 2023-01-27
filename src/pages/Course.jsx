import React from 'react';
import CoursePreview from "../components/course/CoursePreview";
import styles from '../components/course/Course.module.css'
import CourseProgress from "../components/course/CourseProgress";
import Header from "../components/UI/Header";
import CourseContent from "../components/course/CourseContent";

const Course = () => {

    const mockChapters = [
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

    return (
        <div>
            <Header/>
            <div id={styles.course}>
                <div id={styles.container}>
                    <a id={styles.backToCourses} href="/courses"> <img src="./../img/icons/chevron-to-left.svg"/>Назад к курсам</a>
                    <CoursePreview/>
                    <CourseProgress/>
                    <CourseContent content={mockChapters}/>
                </div>
            </div>
        </div>
    );
};

export default Course;