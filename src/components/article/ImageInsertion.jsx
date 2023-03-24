import styles from './ImageInsertion.module.css'
import React, {useRef, useState} from "react";
import { FileUploader } from "react-drag-drop-files";
import DragDrop from "../UI/dragdrop/DragDrop";

const ImageInsertion = ({file, onClick}) => {

    const [selectedWidth, setSelectedWidth] = useState(25);
    const [imageLoadingDisabled, setImageLoadingDisabled] = useState(file !== null);
    const dragDropStatus = {noFile: 1, loading: 2, present: 3};
    const [loadedFile, setLoadedFile] = useState(null);

    const widthRef = useRef(null);

    const fileTypes = ["JPG", "JPEG", "PNG", "GIF", "SVG"];

    const loadFile = (file) => {
        setLoadedFile(file);
    };

    const handleChange = (file) => {
        setImageLoadingDisabled(true);
        loadFile(file);
    };

    const reset = () => {
        setSelectedWidth(25);
        setImageLoadingDisabled(false);
        setLoadedFile(null);
    }

    const save = () => {
        onClick(selectedWidth, getImage(), loadedFile === null ? file : loadedFile);
        reset();
    }

    const getImage = () => {
        if (file === null && loadedFile === null) {
            return null;
        } else if (loadedFile !== null) {
            return URL.createObjectURL(loadedFile);
        } else if (file !== null) {
            return URL.createObjectURL(file);
        } else {
            return URL.createObjectURL(loadedFile);
        }
    }

    const getStatus = () => {
        return file !== null || loadedFile !== null ? dragDropStatus.present : dragDropStatus.noFile;
    }

    return <div id={styles.insertion}>
        <div id={styles.elementStyle}>
            <p>Ширина элемента (%): </p>  <span>{selectedWidth}</span>
            <input ref={widthRef} type="range" min="10" max="100" step="1" value={selectedWidth} onChange={() => setSelectedWidth(widthRef.current.value)}/>
        </div>

        <div id={styles.content} className={loadedFile ? styles.blockPointerEvents : ""}>
            <FileUploader disabled={file !== null} handleChange={handleChange} name="file" types={fileTypes} children={
                <DragDrop status={getStatus()} loadedImage={getImage()}
                          dragDropStatus={dragDropStatus}/>
            }/>
        </div>
        <div id={styles.actionButtons}>
            <button id={styles.cancelButton} onClick={() => reset()}>Сбросить</button>
            <button id={styles.okButton} onClick={() => save()}>Сохранить</button>
        </div>

    </div>
}

export default ImageInsertion;