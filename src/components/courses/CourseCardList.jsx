import React from 'react';
import styles from './Courses.module.css'
import CourseCard from "./CourseCard";

const CourseCardList = (props) => {

    const courses1 = [
        {title: 'Java', link: '/java', imgSrc: 'https://psv4.userapi.com/c235031/u142670512/docs/d33/a44edd4e007d/java-course-preview.png?extra=2MxMydyvH2Vc_8ucH77_uOtTwoRiCd85UP8leDcKeI-mCkYThvtZcmrCMRUBNyFf5TKct7-24DEcbnJyvR17Fm0uCglgjUeTYHneL_a-2EnJGwox0k730zMZKK96c-vLd-mQYmU-avXZRqmRjjdfWNlKVg'},
        {title: 'Java Memory Model', link: '/java-memory-model', imgSrc: 'https://psv4.userapi.com/c235031/u142670512/docs/d9/d4e78e65f77c/java-memory-model-course-preview.png?extra=px792U1rBfDWQAN_yHoZVqiTo5V_9ygI5og9iox1mPggDpJUe44yYBDPuBO9vqzHOEzHbAjoDAg5icfCWqV-NqmZnoaOwrlUm8vuP7IQ0CPsA5ben4dP-Y7NgzWUA_3CfUX0NNxRsIXr5xn-l6HufWxPaw'},
        {title: 'Postgres', link: '/postgres', imgSrc: 'https://psv4.userapi.com/c235031/u142670512/docs/d45/2204b69eab5e/postgres-course-preview.png?extra=z5zIKCe61erTwrIWTJt0Z5EVOWCcjojR-rzvOqGomeuxqp-3yOa31jOyScYimTPyI3gEDHbn443__fxbXl8rfItSrSDJdS6_PJlFslv9W1ZIgBUT4DwQp33p7vkmjKqlgN9QCKCrPHlxKFiIl-lol6Gbqg'},
        {title: 'JDBC', link: '/jdbc', imgSrc: 'https://psv4.userapi.com/c235031/u142670512/docs/d46/c6cd9ea1f0e5/jdbc-course-preview.png?extra=bYpWJqI2hwthGsMMeazIINGce83KpBTCRa-2LO7x8-bzcGQOnJ5bK12iYMZxb3qbG4uuyd_OSl0QnmJJZtyvSEbBEjx9s8SCLFewF9UMXpWmSvNBApmxwPbOWwJmWbX3lEGHl52il-csbweOavhnE9E66Q'},
        {title: 'Hibernate', link: '/hibernate', imgSrc: 'https://psv4.userapi.com/c235031/u142670512/docs/d4/9de10a05788a/hibernate-course-preview.png?extra=jPtjmEfg_fP4IHyQs1BiSOi-uiPCqA2FY_OM4zDQza_B1Zn8tOYr_iw6g4AyA1BCtwYtIC9RB4m27002JSMx_Sav9rfHY1Paf-8drDKvAxWSziMXm8JWkJkfr7EG1p36P6OIudBSic--KKYPwtqkJarl7A'},
        {title: 'Web', link: '/web', imgSrc: 'https://psv4.userapi.com/c235031/u142670512/docs/d33/e467c1314f60/web-course-preview.png?extra=9nH-pv0D2WMTq_Mk5Fq_b7x_zrQVp6MPywYfpW1t5xt0kSgd4aeC5dN6Bs1El9fS3ZGu0KI4oJPHge_-f38Kq-tf-_5xDPha5ws4FBPVUlFUH44znvaP39sgjvWHVogad0Yp7sWhT5aKTMI607ulGH17ew'}
    ]

    const courses2 = [
        {title: 'Java', link: '/java', imgSrc: 'https://psv4.userapi.com/c235031/u142670512/docs/d33/a44edd4e007d/java-course-preview.png?extra=2MxMydyvH2Vc_8ucH77_uOtTwoRiCd85UP8leDcKeI-mCkYThvtZcmrCMRUBNyFf5TKct7-24DEcbnJyvR17Fm0uCglgjUeTYHneL_a-2EnJGwox0k730zMZKK96c-vLd-mQYmU-avXZRqmRjjdfWNlKVg'},
        {title: 'Java Memory Model', link: '/java-memory-model', imgSrc: 'https://psv4.userapi.com/c235031/u142670512/docs/d9/d4e78e65f77c/java-memory-model-course-preview.png?extra=px792U1rBfDWQAN_yHoZVqiTo5V_9ygI5og9iox1mPggDpJUe44yYBDPuBO9vqzHOEzHbAjoDAg5icfCWqV-NqmZnoaOwrlUm8vuP7IQ0CPsA5ben4dP-Y7NgzWUA_3CfUX0NNxRsIXr5xn-l6HufWxPaw'},
        {title: 'Hibernate', link: '/hibernate', imgSrc: 'https://psv4.userapi.com/c235031/u142670512/docs/d4/9de10a05788a/hibernate-course-preview.png?extra=jPtjmEfg_fP4IHyQs1BiSOi-uiPCqA2FY_OM4zDQza_B1Zn8tOYr_iw6g4AyA1BCtwYtIC9RB4m27002JSMx_Sav9rfHY1Paf-8drDKvAxWSziMXm8JWkJkfr7EG1p36P6OIudBSic--KKYPwtqkJarl7A'},
        {title: 'Web', link: '/web', imgSrc: 'https://psv4.userapi.com/c235031/u142670512/docs/d33/e467c1314f60/web-course-preview.png?extra=9nH-pv0D2WMTq_Mk5Fq_b7x_zrQVp6MPywYfpW1t5xt0kSgd4aeC5dN6Bs1El9fS3ZGu0KI4oJPHge_-f38Kq-tf-_5xDPha5ws4FBPVUlFUH44znvaP39sgjvWHVogad0Yp7sWhT5aKTMI607ulGH17ew'}
    ]

    const courses3 = [
        {title: 'Java', link: '/java', imgSrc: 'https://psv4.userapi.com/c235031/u142670512/docs/d33/a44edd4e007d/java-course-preview.png?extra=2MxMydyvH2Vc_8ucH77_uOtTwoRiCd85UP8leDcKeI-mCkYThvtZcmrCMRUBNyFf5TKct7-24DEcbnJyvR17Fm0uCglgjUeTYHneL_a-2EnJGwox0k730zMZKK96c-vLd-mQYmU-avXZRqmRjjdfWNlKVg'},
        {title: 'Java Memory Model', link: '/java-memory-model', imgSrc: 'https://psv4.userapi.com/c235031/u142670512/docs/d9/d4e78e65f77c/java-memory-model-course-preview.png?extra=px792U1rBfDWQAN_yHoZVqiTo5V_9ygI5og9iox1mPggDpJUe44yYBDPuBO9vqzHOEzHbAjoDAg5icfCWqV-NqmZnoaOwrlUm8vuP7IQ0CPsA5ben4dP-Y7NgzWUA_3CfUX0NNxRsIXr5xn-l6HufWxPaw'},
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