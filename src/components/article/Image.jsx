import styles from "./ArticleEditor.module.css";
import React, {useRef} from "react";

const Image = (props) => {

    const imageRef = useRef(null);

    const setWidthToParent = () => {
        try {
            imageRef.current.parentElement.style.width = props.width + '%';
        } catch (ignoredException) {
        }
    }

    setTimeout(() => setWidthToParent(), 25);

    return <div ref={imageRef} id={styles.image} onKeyPress={e => e.preventDefault()}>
        {props.readOnly ? null :
            <div id={styles.controls}>
                <div id={styles.edit} onClick={() => props.onClickImage(props.id)}>Изменить</div>
                <div id={styles.remove} onClick={() => props.onClickImage(props.remove(props.blockKey))}>Удалить</div>
            </div>
        }
        <div style={{width: '100%'}}>
            <img src={props.src} id={styles.imageContent}/>
        </div>
        <div className={styles.insertionOnClick} onClick={() => props.insert('after', props.blockKey)}/>
    </div>;
};

export default Image;