import React from 'react';
import styles from './Courses.module.css'
import CourseCard from "./CourseCard";

const CourseCardList = (props) => {

    const courses1 = [
        {title: 'Java', link: '/courses/java', imgSrc: '/img/previews/java-course-preview.png'},
        {title: 'Java Memory Model', link: '/java-memory-model', imgSrc: '/img/previews/java-memory-model-course-preview.png'},
        {title: 'Postgres', link: '/postgres', imgSrc: '/img/previews/postgres-course-preview.png'},
        {title: 'JDBC', link: '/jdbc', imgSrc: '/img/previews/jdbc-course-preview.png'},
        {title: 'Hibernate', link: '/hibernate', imgSrc: '/img/previews/hibernate-course-preview.png'},
        {title: 'Web', link: '/web', imgSrc: '/img/previews/web-course-preview.png'}
    ]

    const courses2 = [
        {title: 'Java', link: '/courses/java', imgSrc: '/img/previews/java-course-preview.png'},
        {title: 'Java Memory Model', link: '/java-memory-model', imgSrc: '/img/previews/java-memory-model-course-preview.png'},
        {title: 'Hibernate', link: '/hibernate', imgSrc: '/img/previews/hibernate-course-preview.png'},
        {title: 'Web', link: '/web', imgSrc: '/img/previews/web-course-preview.png'}
    ]

    const courses3 = [
        {title: 'Java', link: '/courses/java', imgSrc: '/img/previews/java-course-preview.png'},
        {title: 'Java Memory Model', link: '/java-memory-model', imgSrc: '/img/previews/java-memory-model-course-preview.png'}
    ]

    const getCourses = (type) => {
        switch (type) {
            case 'current':
                return courses1;
            case 'available':
                return courses2;
            case 'finished':
                return courses3;
        }
    }

    return (
        <div className={styles.courseCards}>
            <form>
                <input type="text" placeholder="Введите курс или тему.."/>
                <button type="submit">
                    <img src="./img/icons/search.svg"/>
                </button>
            </form>
            <div className={styles.courseCardList}>
                {getCourses(props.type)?.map(c =>
                    <CourseCard key={c.title} title={c.title} imgSrc={c.imgSrc} link={c.link}/>
                )}
            </div>

        </div>
    );
};

export default CourseCardList;