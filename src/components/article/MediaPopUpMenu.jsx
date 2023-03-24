import React, {forwardRef, useImperativeHandle, useState} from 'react';
import styles from './MediaPopUpMenu.module.css'

const MediaPopUpMenu = forwardRef((props, ref) => {

    const [showOptions, setShowOptions] = useState(null);

    useImperativeHandle(ref, () => ({
        hideOptions() {
            setShowOptions(false);
        },

        showOptions() {
            setShowOptions(true);
        }
    }));

    return (
        <div ref={ref} id={styles.mediaPopUpMenu} className={
            !props.visible ? styles.hidden : (props.visible ? styles.show : styles.hide)} style={{left: props.left, top: props.top}}>
            <div id={styles.btn} onClick={() => {setShowOptions(showOptions === null ? true : !showOptions)}}>
                <img id={styles.btnImg} src="./../img/icons/plus.svg" className={showOptions === null ? "" : (showOptions ? styles.btnShowOptions : styles.btnHideOptions)}/>
            </div>

            <div id={styles.mediaOptions} className={showOptions ? styles.showOptions : styles.hideOptions}>
                <div id={styles.pictureLogo} onClick={() => props.addMedia.addImage()}>
                    <img src="./../img/icons/picture.svg"/>
                </div>
                <div id={styles.codeLogo} onClick={() => props.addMedia.addCode()}>
                    <img src="./../img/icons/code.svg"/>
                </div>
            </div>
        </div>
    );
});

export default MediaPopUpMenu;