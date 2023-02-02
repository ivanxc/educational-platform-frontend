import React, {useState} from 'react';
import styles from "./Tests.module.css";
import TestSelectTopics from "./TestSelectTopics";
import MyModal from "../UI/modal/MyModal";

const TestCreation = () => {

    const getSavedTests = () => {
        return [{id: 14425341, title: 'Random', content: [1, 2, 3, 4, 18, 35]},
            {id: 14425342, title: 'Java + Postgres', content: [1, 2, 3, 5, 4, 18, 35]},
            {id: 14425343, title: 'Spring Framework', content: [18, 35]},
            {id: 14425344, title: 'Spring Context', content: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 18, 35]},
            {id: 14425345, title: 'Java Collections and Streams', content: [35]},
            {id: 14425346, title: 'Hibernate + JDBC', content: [1]},
            {id: 14425347, title: 'JDBC select', content: [6]},
            {id: 14425348, title: 'hard', content: [25]},
            {id: 14425349, title: 'easy', content: [31]}
        ];
    }

    const testsMock = [
        {
            courseId: 1,
            courseTitle: "Java",
            chapters: [
                {
                    chapterTitle: 'Введение',
                    chapterId: 1,
                    topics: [
                        {id: 1, title: 'Введение в Java'}
                    ]
                },
                {
                    chapterTitle: 'Основы',
                    chapterId: 2,
                    topics: [
                        {id: 2, title: 'Переменные и типы данных'},
                        {id: 3, title: 'Операции'},
                        {id: 4, title: 'Условные выражения и конструкции'},
                        {id: 5, title: 'Массивы'},
                        {id: 6, title: 'Циклы'},
                        {id: 7, title: 'Методы'},
                        {id: 8, title: 'Дополнительно'},
                        {id: 9, title: 'Правила нейминга'}
                    ]
                }
            ]
        },
        {
            courseId: 2,
            courseTitle: "PostgreSQL",
            chapters: [
                {
                    chapterTitle: 'Введение',
                    chapterId: 3,
                    topics: [
                        {id: 10, title: 'Введение в Java'}
                    ]
                },
                {
                    chapterTitle: 'Основы',
                    chapterId: 4,
                    topics: [
                        {id: 11, title: 'Переменные и типы данных'},
                        {id: 12, title: 'Операции'},
                        {id: 13, title: 'Условные выражения и конструкции'},
                        {id: 14, title: 'Массивы'},
                        {id: 15, title: 'Циклы'},
                        {id: 16, title: 'Методы'},
                        {id: 17, title: 'Дополнительно'},
                        {id: 18, title: 'Правила нейминга'}
                    ]
                }
            ]
        },
        {
            courseId: 3,
            courseTitle: "JUnit",
            chapters: [
                {
                    chapterTitle: 'Введение',
                    chapterId: 5,
                    topics: [
                        {id: 19, title: 'Введение в Java'}
                    ]
                },
                {
                    chapterTitle: 'Основы',
                    chapterId: 6,
                    topics: [
                        {id: 20, title: 'Переменные и типы данных'},
                        {id: 31, title: 'Операции'},
                        {id: 32, title: 'Условные выражения и конструкции'},
                        {id: 33, title: 'Массивы'},
                        {id: 34, title: 'Циклы'},
                        {id: 35, title: 'Методы'},
                        {id: 36, title: 'Дополнительно'},
                        {id: 37, title: 'Правила нейминга'}
                    ]
                }
            ]
        },
        {
            courseId: 4,
            courseTitle: "Maven",
            chapters: [
                {
                    chapterTitle: 'Введение',
                    chapterId: 7,
                    topics: [
                        {id: 38, title: 'Введение в Java'}
                    ]
                },
                {
                    chapterTitle: 'Основы',
                    chapterId: 8,
                    topics: [
                        {id: 39, title: 'Переменные и типы данных'},
                        {id: 40, title: 'Операции'},
                        {id: 41, title: 'Условные выражения и конструкции'},
                        {id: 42, title: 'Массивы'},
                        {id: 43, title: 'Циклы'},
                        {id: 44, title: 'Методы'},
                        {id: 45, title: 'Дополнительно'},
                        {id: 46, title: 'Правила нейминга'}
                    ]
                }
            ]
        }
    ]
    var [savedTestMock, setSavedTestMock] = useState(() => [
        {id: 0, title: 'Пустой тест', content: []}
    ].concat(getSavedTests()));

    const [selectedTopics, setSelectedTopics] = useState([]);
    const [modal, setModal] = useState(true);
    const [newTestName, setNewTestName] = useState('Новый тест')

    const handleDeleteSavedTest = (e, id) => {
        e.stopPropagation();
        // send request to server
        savedTestMock = setSavedTestMock([...savedTestMock].filter(st => st.id !== id));
    }

    const handleSaveTest = (title) => {
        // request save(title, selectedTopics)
        setModal(false);
        setNewTestName("Новый тест")
    }

    const showSave = (title) => {
        return <div style={{display: 'flex', flexDirection: 'column', rowGap: 16}}>
            <strong>Сохранить тест</strong>
            <input value={newTestName} onChange={e => setNewTestName(e.target.value)}/>
            <button onClick={() => handleSaveTest(newTestName)}>Сохранить</button>
        </div>
    }

    return (
        <div>
            <MyModal visible={modal} setVisible={setModal}>
                {showSave("Новое")}
            </MyModal>
            <div className={styles.creationButtons}>
                {savedTestMock?.length > 0 ?
                    <div className={styles.savedTestsBlock}>
                        {savedTestMock?.map(savedTest =>
                            <div className={styles.savedTest} onClick={(e) => {
                                e.preventDefault();
                                setSelectedTopics(savedTest.content)
                            }
                            } key={savedTest.id}>
                                {savedTest.title}
                                <img src="/img/icons/delete.svg" onClick={e => handleDeleteSavedTest(e, savedTest.id)}/>
                            </div>
                        )}
                    </div> : null
                }
                <div>Выбрано тем {selectedTopics.length}</div>
                <button type="button" className={styles.createButton}>Начать тестирование</button>
                <button type="button" className={styles.saveButton} onClick={() =>
                    setModal(true)
                }>Сохранить тест</button>
            </div>
            <div id={styles.courseTestList}>
                <div>
                    {testsMock?.map((courseTest, index) => (
                        index % 2 === 0 ? <TestSelectTopics course={courseTest} state={{selectedTopics: selectedTopics, setSelectedTopics: setSelectedTopics}} key={courseTest.courseId}/>
                            : null
                    ))}
                </div>

                <div>
                    {testsMock?.map((courseTest, index) => (
                        index % 2 === 1 ? <TestSelectTopics course={courseTest} state={{selectedTopics: selectedTopics, setSelectedTopics: setSelectedTopics}} key={courseTest.courseId}/>
                            : null
                    ))}
                </div>
            </div>
        </div>

    );
};

export default TestCreation;