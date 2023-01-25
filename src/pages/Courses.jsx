import React, {useState} from 'react';
import CourseCardList from "../components/courses/CourseCardList";
import styles from '../components/courses/Courses.module.css'
import Header from "../components/UI/Header";

const Courses = () => {
    const sections = ['Текущие', 'Доступные', 'Пройденные'];
    const sectionsType = ['current', 'available', 'finished'];
    const [sectionsChange, setSectionChange] = useState({previous: null, current: 0});

    const changeSection = (previos, current) => {
        setSectionChange({previous: previos, current: current});
    }

    return (
        <div>
            <Header/>
            <div id={styles.courses}>
            <div id={styles.pageTitle}>Каталог курсов</div>
            <div id={styles.toggles}>
                {sections?.map(section =>
                    <label key={section} onClick={() => changeSection(sectionsChange.current, sections.indexOf(section))}>{section}
                        <div className={sectionsChange.current === sections.indexOf(section) ? styles.showToggle : (
                            sectionsChange.previous === sections.indexOf(section) ? styles.hideToggle : ""
                        )}/>
                    </label>)}
            </div>
            <CourseCardList type={sectionsType[sectionsChange.current]}/>
            </div>
        </div>
    );
};

export default Courses;