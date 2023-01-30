import React, {useState} from 'react';
import styles from './Header.module.css'
import HeaderSections from "./HeaderSections";
import MenuProfile from "./MenuProfile";

const Header = () => {
    const [showSections, setShowSections] = useState(false);
    const [showProfile, setShowProfile] = useState(null);

    return (
        <div>
            <div id={styles.container}>
                <div id={styles.navigationSmallScreen}>
                    <img id={styles.sectionsIcon} src="./../img/icons/sections-icon.png" id={styles.sectionsIcon}
                         onClick={() => setShowSections(!showSections)}/>
                </div>
                <a href="/" id={styles.logo}>
                    <img src={process.env.PUBLIC_URL + "/img/icons/capsula-logo64.svg"} alt="logo"/>
                    <div>
                        <p id={styles.name}>Capsula</p>
                        <p id={styles.tagline}>Современное IT-образование</p>
                    </div>
                </a>
                <HeaderSections style={styles.sections}/>
                <nav id={styles.navigation}>
                    <div id={styles.user}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" alt="avatar"
                        onClick={() => setShowProfile(!showProfile)}/>
                    </div>
                </nav>
                {showSections ? <HeaderSections style={styles.sectionsSmallScreen}/> : null}
            </div>
            {showProfile === null ? null : showProfile ? <MenuProfile hidden={false}/> : <MenuProfile hidden={true}/>}
        </div>
    );
};

export default Header;