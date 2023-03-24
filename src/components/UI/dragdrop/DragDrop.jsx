import React, {forwardRef, useImperativeHandle, useState} from 'react';
import styles from './DragDrop.module.css';
import LoadingCircle from "../animation/LoadingCircle";

const DragDrop = forwardRef(({status, dragDropStatus, loadedImage}, ref) => {

    const getContentByStatus = () => {
        if (status === dragDropStatus.noFile) {
            return <div id={styles.content} className={styles.noFile}>
                <img id={styles.sectionsIcon} src="./../img/icons/upload-file.svg"/>
                <p>Нажмите или перетащите файл</p>
            </div>
        } else if (status === dragDropStatus.loading) {
            return <div id={styles.content}>
                <LoadingCircle/>
                <p>Файл загружается</p>
            </div>
        } else if (status === dragDropStatus.present) {
            return <div id={styles.content}>
                <img id={styles.loadedImage} src={loadedImage}/>
            </div>
        }
    }

    return (
        <div id={styles.dragDropContainer}>
            {getContentByStatus()}
        </div>
    );
});

export default DragDrop;