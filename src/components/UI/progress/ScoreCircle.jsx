import React from 'react';
import styles from "./ScoreCircle.module.css";

const ScoreCircle = ({progress}) => {
    const circumference = Math.PI * 100;
    const zero = Math.PI * 100;
    const full = Math.PI * 10;
    const range = zero - full;

    const progressStyle = {strokeDashoffset: circumference - (progress / 100) * range};

    const scoreTextByNumber = (score) => {
        if (score % 10 === 0 || (score % 10 >= 5 && score % 10 <= 9)) {
            return 'баллов'
        } else if (score % 10 === 1) {
            return 'балл'
        } else if (score % 10 === 2 || score % 10 === 3 || score % 10 === 4) {
            return 'балла'
        }
    }

    return (
        <div className={styles.circleProgressBar}>
            <style>{`
            .${styles.circleProgressBarProgress}{
                animation: progress 0.75s ease-out;
            }
            
            @keyframes progress {
                from {
                    stroke-dashoffset: 314;
                }
                to {
                    stroke-dashoffset: ${circumference - (progress / 100) * range};
                }
            }
            `}</style>
            <svg width="140" height="140" viewBox="0 0 100 100">
                <circle className={styles.circleProgressBarBackground} cx="50" cy="50" r="45"/>
                <circle className={styles.circleProgressBarProgress} style={progressStyle} cx="50" cy="50" r="45"/>
            </svg>
            <div className={styles.circleProgressBarText}>
                <div id={styles.number}>{progress}</div>
                <div id={styles.title}>{scoreTextByNumber(progress)}</div>
            </div>
        </div>
    );
};

export default ScoreCircle;