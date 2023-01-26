import React from 'react';
import styles from './Circle.module.css'

const Circle = ({progress}) => {
    const circumference = Math.PI * 100;
    const zero = Math.PI * 100;
    const full = Math.PI * 10;
    const range = zero - full;

    const progressStyle = {strokeDashoffset: circumference - (progress / 100) * range};
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
            <svg width="100" height="100" viewBox="0 0 100 100">
                <circle className={styles.circleProgressBarBackground} cx="50" cy="50" r="45"/>
                <circle className={styles.circleProgressBarProgress} style={progressStyle} cx="50" cy="50" r="45"/>
                <text x="50" y="50" className={styles.circleProgressBarText}>
                    {progress}%
                </text>
            </svg>
        </div>
    );
};
export default Circle;