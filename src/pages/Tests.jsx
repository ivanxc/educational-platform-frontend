import React, {useState} from 'react';
import styles from '../components/tests/Tests.module.css'
import Header from "../components/UI/Header";
import ByTopic from "../components/tests/ByTopic";
import Unfinished from "../components/tests/Unfinished";
import TestCreation from "../components/tests/TestCreation";

const Tests = () => {
    const sections = ['По темам', 'Незавершенные', 'Создать'];
    const [sectionsChange, setSectionChange] = useState({previous: null, current: 0});

    const changeSection = (previos, current) => {
        setSectionChange({previous: previos, current: current});
    }

    const getSectionContent = () => {
        switch (sectionsChange.current) {
            case sections.indexOf('По темам'):
                return <ByTopic/>
            case sections.indexOf('Незавершенные'):
                return <Unfinished/>
            default:
                return <TestCreation/>;
        }
    }

    return (
        <div>
            <Header/>
            <div id={styles.tests}>
                <div id={styles.pageTitle}>Тесты</div>
                <div id={styles.toggles}>
                    {sections?.map(section =>
                        <label key={section} onClick={() => changeSection(sectionsChange.current, sections.indexOf(section))}>{section}
                            <div className={sectionsChange.current === sections.indexOf(section) ? styles.showToggle : (
                                sectionsChange.previous === sections.indexOf(section) ? styles.hideToggle : ""
                            )}/>
                        </label>)}
                </div>
                {
                    getSectionContent()
                }
            </div>
        </div>
    );
};

export default Tests;