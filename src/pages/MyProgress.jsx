import React from 'react';
import PlayerStat from "../components/progress/PlayerStat";
import Header from "../components/UI/Header";
import styles from '../components/progress/Progress.module.css'

const MyProgress = () => {

    const mockStat = {
        todayArticles: 5,
        todayTests: 3,
        todayTasks: 2,
        dates: {
            '2023-01-01': 1,
            '2023-01-02': 15,
            '2023-01-03': 35,
            '2023-01-04': 55,
            '2023-01-05': 75,
            '2023-01-06': 95,
            '2023-01-07': 915,
            '2023-02-01': 915,
            '2023-02-28': 4,
            '2023-03-04': 22,
            '2023-04-30': 10,
            '2023-06-14': 60,
            '2023-07-14': 80,
            '2023-08-14': 90,
            '2023-09-14': 20,
            '2023-10-14': 70,
            '2023-11-14': 50,
            '2023-12-25': 43,
            '2023-12-31': 52,
        },
        diagram: {
            myScore: 78,
            myTop: 0.75,
            columns: [
                {top: 10, range: '1-10', fill: 0.05},
                {top: 20, range: '11-20', fill: 0.06},
                {top: 30, range: '21-30', fill: 0.09},
                {top: 40, range: '31-40', fill: 0.15},
                {top: 50, range: '41-54', fill: 0.25},
                {top: 60, range: '55-69', fill: 0.14},
                {top: 70, range: '66-89', fill: 0.10},
                {top: 80, range: '> 90', fill: 0.09},
                {top: 90, range: '> 120', fill: 0.05},
                {top: 99, range: '> 160', fill: 0.02},
            ]
        },
        myCourses: {
            easy: [
                {img: "./../img/icons/java-logo.svg", name: 'Java', link: 'courses/java', passed: true, bg: '#005377'},
                {img: "./../img/icons/maven-logo.svg", name: 'Maven', link: 'courses/maven', passed: true, bg: '#FFA570'},
                {img: "./../img/icons/gradle-logo.svg", name: 'Gradle',link: 'courses/gradle', passed: false, bg: '#00AAAA'},
                {img: "./../img/icons/git-logo.svg", name: 'Git', link: 'courses/git', passed: true, bg: '#E8D07C'},
                {img: "./../img/icons/junit-logo.svg", name: 'JUnit', link: 'courses/junit', passed: true, bg: '#7FC882'},
                {img: "./../img/icons/postgresql-logo.svg", name: 'PostgreSQL', link: 'courses/postgresql', passed: false, bg: '#0073DD'}
            ],
            medium: [
                {img: "./../img/icons/jdbc-logo.svg", name: 'JDBC', link: 'courses/jdbc', passed: true, bg: '#000000'},
                {img: "./../img/icons/hibernate-logo.svg", name: 'Hibernate', link: 'courses/hibernate', passed: true, bg: '#D95CC5'},
                {img: "./../img/icons/web-logo.svg", name: 'Web', link: 'courses/web', passed: false, bg: '#00EAC0'},
                {img: "./../img/icons/spring-framework-logo.svg", name: 'Spring', link: 'courses/spring-framework', passed: true, bg: '#038100'},
                {img: "./../img/icons/bash-logo.svg", name: 'Bash', link: 'courses/bash',  passed: false, bg: '#670081'}
            ],
            hard: [
                {img: "./../img/icons/docker-logo.svg", name: 'Docker', link: 'courses/docker', passed: true, bg: '#83DAFF'},
                {img: "./../img/icons/devops-logo.svg", name: 'DevOps', link: 'courses/devops', passed: false, bg: '#96DD00'},
                {img: "./../img/icons/microservices-logo.svg", name: 'Микросервисы', link: 'courses/microservices', passed: false, bg: '#BE6CFF'}
            ]
        }
    };

    return (
        <div id={styles.myProgress}>
            <Header/>
            <PlayerStat data={mockStat}/>
        </div>
    );
};

export default MyProgress;