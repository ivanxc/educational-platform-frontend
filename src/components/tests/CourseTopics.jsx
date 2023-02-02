import React, {useState} from 'react';
import styles from './Tests.module.css'

const CourseTopics = ({course}) => {
    const [showChapters, setShowChapters] = useState(false);
    const [visibleChapters, setVisibleChapters] = useState([]);

    return (
        <div className={styles.courseTest}>
            <div className={styles.courseTestContent}>
                <a className={styles.courseTestCourseName} href={'test' + '?course=' + course.courseId}>
                    {course.courseTitle}
                    <div className={styles.plusMinus} onClick={(e) => {
                        e.preventDefault();
                        setShowChapters(!showChapters);
                        setVisibleChapters([]);
                    }}>
                        <img src={showChapters ? "/img/icons/minus.svg" : "/img/icons/plus.svg"}/>
                    </div>

                </a>
                <div className={styles.courseChapters}>
                    {showChapters ? (course.chapters?.map(chapter => (
                        <div className={styles.courseChapter} key={chapter.chapterId}>
                            <a className={styles.courseChapterName} href={'test' + '?course=' + course.courseId + '&chapter=' + chapter.chapterId}>
                                {chapter.chapterTitle}
                                <div className={styles.plusMinus} onClick={(e) => {
                                    e.preventDefault();
                                    if (visibleChapters.includes(chapter.chapterId)) {
                                        setVisibleChapters([...visibleChapters].filter(id => id !== chapter.chapterId));
                                    } else {
                                        setVisibleChapters([...visibleChapters, chapter.chapterId]);
                                    }
                                }}>
                                    <img src={visibleChapters.includes(chapter.chapterId) ? "/img/icons/minus.svg" : "/img/icons/plus.svg"}/>
                                </div>
                            </a>
                            {visibleChapters.includes(chapter.chapterId) ?
                                <div className={styles.courseChapterTopics}>
                                    {chapter.topics?.map(topic => (
                                        <a className={styles.courseChapterTopic} key={topic.id}
                                           href={'test' + '?course=' + course.courseId + '&chapter=' + chapter.chapterId + '&topic=' + topic.id}>
                                            {topic.title}
                                        </a>
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

export default CourseTopics;