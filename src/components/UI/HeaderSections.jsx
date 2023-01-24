import React from 'react';
import styles from "./Header.module.css";

const HeaderSections = (props) => {
    return (
        <div id={props.style}>
            <a href="/jobs">Работа</a>
            <a href="/interview">Интервью</a>
            <a href="/tests">Тесты</a>
            <a href="/community">Сообщество</a>
        </div>
    );
};

export default HeaderSections;