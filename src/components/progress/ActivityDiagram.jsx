import React, {useState} from 'react';
import styles from './ActivityDiagram.module.css'

const ActivityDiagram = ({diagram}) => {

    const myFill = () => {
        var from = 0.0;
        var to = 0.0;
        for(var i = 0; i < diagram.columns.length; i++) {
            to += diagram.columns[i].fill;
            if (diagram.myTop > from && diagram.myTop < to) {
                return i;
            }
            from += diagram.columns[i].fill;
        }
        return 0;
    }

    const [selectedColumn, setSelectedColumn] = useState(() => myFill());
    const [selectedAny, setSelectedAny] = useState(false);

    const maxHeight = () => {
        return 100 / Math.max(...diagram.columns.map(c => c.fill));
    }

    return (
        <div id={styles.container}>
            <div id={styles.top}>
                <div id={styles.yourActivity}>
                    <div id={styles.yourTop}>Вы активнее <span>{diagram.myTop * 100}%</span> пользователей</div>
                    <div id={styles.advance}>
                        {diagram.myTop > 0.5 ? "Продолжайте в том же духе!" : "Поднажмите!"}
                    </div>
                </div>
                <div id={selectedAny ? styles.otherActivityVisible : styles.otherActivityHidden}>
                    <div id={styles.otherTop}>Топ <span>{100 - diagram.columns[selectedColumn].top}%</span></div>
                    <div id={styles.otherScores}>{diagram.columns[selectedColumn].range}</div>
                </div>
            </div>
            <div id={styles.diagram} style={{height: maxHeight() * Math.max(...diagram.columns.map(c => c.fill)) + 20}} onMouseLeave={() => {
                setSelectedAny(false);
                setSelectedColumn(myFill());
            }
            }>
                {
                    diagram.columns?.map((column, index) =>
                        <div key={column.range} className={styles.fullHeightColumn} onMouseOver={
                            () => {
                                setSelectedColumn(index);
                                setSelectedAny(true);
                            }
                        }>
                            <div key={column.range} className={styles.column + ' ' + (index === selectedColumn ? styles.my : styles.other)} style={{height: maxHeight() * column.fill}}>
                                <style>{`
                            .${styles.column}{
                                animation: grow 1s ease-out;
                            }
                            
                            @keyframes grow {
                                from {
                                    height: 0;
                                }
                                to {
                                    height: ${maxHeight() * column.fill};
                                }
                            }
                            `}</style>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ActivityDiagram;