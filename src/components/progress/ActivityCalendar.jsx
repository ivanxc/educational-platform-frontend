import React, {useState} from 'react';
import styles from './ActivityCalendar.module.css'

const ActivityCalendar = ({dates}) => {

    const [showScores, setShowScores] = useState(null);
    const [clickedAtX, setClickedAtX] = useState(null);

    const datesAsMap = new Map(Object.entries(dates));
    const year = new Date().getFullYear();

    const defineClassByScore = (scores) => {
        if (scores > 0 && scores <= 20) {
            return styles.scoreA;
        } else if (scores > 20 && scores <= 40) {
            return styles.scoreB;
        } else if (scores > 40 && scores <= 60) {
            return styles.scoreC;
        } else if (scores > 60 && scores <= 80) {
            return styles.scoreD;
        } else if (scores > 80 && scores <= 100) {
            return styles.scoreE;
        } else if (scores > 100) {
            return styles.scoreF;
        } else {
            return styles.emptyCell;
        }
    }

    const months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const monthsNames = ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"];
    const monthsNamesWhenCursorOnCell = ["янв", "фев", "мар", "апр", "мая", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"];
    const scoreTextByNumber = (score) => {
        if (score % 10 === 0 || (score % 10 >= 5 && score % 10 <= 9)) {
            return 'баллов'
        } else if (score % 10 === 1) {
            return 'балл'
        } else if (score % 10 === 2 || score % 10 === 3 || score % 10 === 4) {
            return 'балла'
        }
    }


    const generateMonth = (month, weeks) => {
        const startWithIdx = new Date(year, month).getDay() === 0 ? 6 : new Date(year, month, 0).getDay();
        const endWithIdx = startWithIdx + new Date(year, month + 1, 0).getDate();
        var idx = 0;
        return [...Array(weeks).keys()].map(i =>
            <div key={i} className={styles.week}>
                {
                    [...Array(7).keys()].map(j =>
                        <div key={idx++} className={idx < startWithIdx || idx >= endWithIdx ? styles.cellHidden :
                            defineClassByScore(datesAsMap.get(new Date(year, month, idx - startWithIdx + 2).toISOString().split('T')[0]))}
                             onMouseOver={(event) => {
                                 setShowScores((7 * i + j < startWithIdx || 7 * i + j >= endWithIdx) ? null : new Date(year, month, i * 7 + j - startWithIdx + 2).toISOString().split('T')[0])
                                 setClickedAtX(event.clientX);
                             }
                             } onMouseLeave={() => setShowScores(null)}>
                            {
                                showScores === new Date(year, month, i * 7 + j - startWithIdx + 2).toISOString().split('T')[0] ?
                                <div className={styles.showScoresAtDate} style={{width: clickedAtX < 80 || clickedAtX + 80 > window.screen.width ? 'fit-content' : 'max-content'
                                }}>
                                    {
                                        (datesAsMap.get(showScores) === undefined ? '0 баллов' :
                                            (datesAsMap.get(showScores)) + ' ' + scoreTextByNumber(datesAsMap.get(showScores))) + ' ' + new Date(year, month, i * 7 + j - startWithIdx + 1).getDate() + ' ' +
                                        monthsNamesWhenCursorOnCell[new Date(year, month, i * 7 + j - startWithIdx + 1).getMonth()] + ' ' + new Date(year, month, i * 7 + j - startWithIdx + 1).getFullYear()
                                }
                                </div> : null
                            }
                        </div>
                    )
                }
            </div>

        )
    }

    function getWeeks(year, month)
    {
        var l = new Date(year, month + 1, 0);
        return Math.ceil((l.getDate() - (l.getDay()? l.getDay() : 7)) / 7) + 1;
    }

    return (
        <div id={styles.calendar}>
            <div id={styles.year}>
                {
                    months.map(month =>
                        <div key={month} className={styles.month}>
                            <div className={styles.weeks}>
                                {generateMonth(month, getWeeks(year, month))}
                            </div>
                            <div className={styles.monthName}>{monthsNames[month]}</div>
                        </div>
                    )
                }
            </div>
        </div>

    );
};

export default ActivityCalendar;