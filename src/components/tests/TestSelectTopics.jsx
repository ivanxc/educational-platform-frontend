import React, {useState} from 'react';
import styles from "./Tests.module.css";

const TestSelectTopics = ({course, state}) => {

    const [showChapters, setShowChapters] = useState(false);
    const [visibleChapters, setVisibleChapters] = useState([]);

    const getAllTopics = () => {
        return course.chapters.flatMap(ch => ch.topics.map(t => t.id));
    }

    const addTopics = topics => {
        state.setSelectedTopics([...state.selectedTopics].concat(topics));
    }

    const removeTopics = topics => {
        state.setSelectedTopics([...state.selectedTopics].filter(t => !topics.includes(t)));
    }

    return (
        <div className={styles.courseTest}>
            <div className={styles.courseTestContent}>
                <div className={styles.courseTestCourseName} onClick={(e) => {
                    setShowChapters(!showChapters);
                    setVisibleChapters([]);
                }}>
                    {course.courseTitle}
                    <div className={styles.selectBlock} onClick={(e) => {
                        e.stopPropagation();
                        const selectedTopics = getAllTopics().filter(topic => state.selectedTopics.includes(topic));
                        selectedTopics.length === 0 ? addTopics(getAllTopics()) : removeTopics(selectedTopics)
                    }}>
                        {getAllTopics().filter(topic => state.selectedTopics.includes(topic)).length > 0 ?
                            <img
                                src={getAllTopics().filter(topic => state.selectedTopics.includes(topic)).length === getAllTopics().length ? "/img/icons/selected.svg" : "/img/icons/minus.svg"}
                            /> : null
                        }
                    </div>

                </div>
                <div className={styles.courseChapters}>
                    {showChapters ? (course.chapters?.map(chapter => (
                            <div className={styles.courseChapter} key={chapter.chapterId}>
                                <div className={styles.courseChapterName} onClick={(e) => {
                                    if (visibleChapters.includes(chapter.chapterId)) {
                                        setVisibleChapters([...visibleChapters].filter(id => id !== chapter.chapterId));
                                    } else {
                                        setVisibleChapters([...visibleChapters, chapter.chapterId]);
                                    }
                                }}>
                                    {chapter.chapterTitle}
                                    <div className={styles.selectBlock} onClick={e => {
                                        e.stopPropagation();
                                        chapter.topics.map(topic => topic.id).filter(topicFromAll => state.selectedTopics.includes(topicFromAll)).length === 0 ?
                                            addTopics(chapter.topics.map(topic => topic.id)) :
                                            removeTopics(chapter.topics.map(topic => topic.id));
                                    }}>
                                        {
                                            chapter.topics.map(topic => topic.id).filter(topicFromAll => state.selectedTopics.includes(topicFromAll)).length !== 0 ?
                                                <img src={chapter.topics.map(topic => topic.id).filter(topicFromAll => state.selectedTopics.includes(topicFromAll)).length === chapter.topics.length ? "/img/icons/selected.svg" : "/img/icons/minus.svg"}/> :
                                                null
                                        }
                                    </div>
                                </div>
                                {visibleChapters.includes(chapter.chapterId) ?
                                    <div className={styles.courseChapterTopics}>
                                        {chapter.topics?.map(topic => (
                                            <div className={styles.courseChapterTopic} key={topic.id}>
                                                {topic.title}
                                                <div className={styles.selectBlock} onClick={e =>
                                                    state.selectedTopics.includes(topic.id) ?
                                                        removeTopics([topic.id]) : addTopics([topic.id])
                                                }>
                                                    {
                                                        state.selectedTopics.includes(topic.id) ?
                                                            <img src="/img/icons/selected.svg"/> : null
                                                    }
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    : null
                                }
                            </div>
                        )
                    )) : null}
                </div>
            </div>
        </div>
    );
};

export default TestSelectTopics;