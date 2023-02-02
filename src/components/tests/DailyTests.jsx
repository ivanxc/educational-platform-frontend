import React from 'react';
import styles from "./Tests.module.css";
import TopTests from "./TopTests";

const DailyTests = ({tests}) => {
    return (
        <div id={styles.dailyTests}>
            <TopTests topTestHeaderName="Тесты дня" topTestContent={tests.testsOfDay}/>
            <TopTests topTestHeaderName="Время повторить" topTestContent={tests.timeToRemember}/>
        </div>
    );
};

export default DailyTests;