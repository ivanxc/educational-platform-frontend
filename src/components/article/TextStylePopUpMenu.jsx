import React, {forwardRef} from 'react';
import styles from './ArticleEditor.module.css'

const TextStylePopUpMenu = forwardRef((props, ref) => {
    return (
        <div id={styles.popUp} className={!props.visible ? styles.hidden : (props.visible ? styles.show : styles.hide)} style={{left: props.left, top: props.top}}>
        <div ref={ref} id={styles.popUpElements}>
            <div className={styles.bold} onMouseDown={e => props.setBold(e)}>
                B
            </div>
            <div className={styles.italic} onMouseDown={e => props.setItalic(e)}>
                I
            </div>
            <div className={styles.crossedOut} onMouseDown={e => props.setStrikethrough(e)}>
                S
            </div>
            <div className={styles.underline} onMouseDown={e => props.setUnderline(e)}>
                U
            </div>
            <div className={styles.bordered} onMouseDown={e => props.setBordered(e)}>
                B
            </div>
            <div id={styles.verticalLine}/>
            <div className={styles.h1} onMouseDown={e => props.setH1(e)}>
                H1
            </div>
            <div className={styles.h2} onMouseDown={e => props.setH2(e)}>
                H2
            </div>
        </div>
        <div id={styles.popUpArrow}/>
        </div>
    );
});

export default TextStylePopUpMenu;