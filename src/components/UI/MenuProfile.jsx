import React from 'react';
import styles from './MenuProfile.module.css'

const MenuProfile = (props) => {
    return (
        <div id={styles.menuProfile} className={props.hidden ? styles.hide : styles.show}>
            <div id={styles.profile}>
                <a href="/profile" id={styles.avatar}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" alt="avatar"/>
                </a>
                <div id={styles.userNavigation}>
                    <a id={styles.username} href="/profile">Иван</a>
                    <a id={styles.editProfile} href="/profile/edit">Редактировать данные</a>
                </div>
            </div>
            <div id={styles.navigation}>
                <a className={styles.navigationItem} href="/progress">
                    <img src="./../img/icons//progress.svg" className={styles.navigationItemIcon}/>
                    <p className={styles.navigationItemName}>Мой прогресс</p>
                </a>
                <a className={styles.navigationItem} href="/settings">
                    <img src="./../img/icons/settings.svg" className={styles.navigationItemIcon}/>
                    <p className={styles.navigationItemName}>Настройки</p>
                </a>
                <a className={styles.navigationItem}>
                    <img src="./../img/icons/night-mode.svg" className={styles.navigationItemIcon}/>
                    <p className={styles.navigationItemName}>Темная тема</p>
                    <label className={styles.switch}>
                        <input type="checkbox"/>
                            <span className={styles.slider + ' ' + styles.round}></span>
                    </label>
                </a>
                <a className={styles.navigationItem} href="/logout">
                    <img src="./../img/icons/logout.svg" className={styles.navigationItemIcon}/>
                    <p className={styles.navigationItemName}>Выйти</p>
                </a>
            </div>
        </div>
    );
};

export default MenuProfile;