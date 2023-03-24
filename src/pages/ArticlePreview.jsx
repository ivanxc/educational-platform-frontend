import React from 'react';
import styles from '../components/article/Article.module.css'
import TopicsSideBar from "../components/UI/sidebar/TopicsSideBar";
import Header from "../components/UI/Header";

import ArticleEditor from "../components/article/ArticleEditor";
import CommentInputField from "../components/UI/textarea/comment/CommentInputField";
import MyModal from "../components/UI/modal/MyModal";

const Article = () => {

    const mockCourse = {
        courseName: 'Java',
        courseProgress: '75%',
        chapters: [
            {
                chapterTitle: 'Введение',
                topics: [
                    {id: 1, title: 'Введение в Java', passed: true}
                ]
            },
            {
                chapterTitle: 'Основы',
                topics: [
                    {id: 2, title: 'Переменные и типы данных', passed: true},
                    {id: 3, title: 'Операции', passed: true},
                    {id: 4, title: 'Условные выражения и конструкции', passed: true},
                    {id: 5, title: 'Массивы', passed: true},
                    {id: 5, title: 'Циклы', passed: true},
                    {id: 5, title: 'Методы', passed: false},
                    {id: 5, title: 'Дополнительно', passed: false},
                    {id: 5, title: 'Правила нейминга', passed: false}
                ]
            }
        ]
    }

    const mockArticle = {
        topicId: 1,
        title: JSON.parse(localStorage.previewArticle || '{ errorMessage: "Что-то пошло не так.."}').title,
        author: null,
        content: JSON.parse(JSON.parse(localStorage.previewArticle || '{ errorMessage: "Что-то пошло не так.."}').content)
    }
    if (mockArticle.content.errorMessage) {
        return (<MyModal visible={true} children={<h1>Что-то пошло не так..</h1>}/>);
    }

    return (
        <div id={styles.articleContainer}>
            <Header/>
            <div id={styles.article}>
                <TopicsSideBar courseInfo={mockCourse}/>
                <div id={styles.articleContent}>
                    <h1 id={styles.articleTitle}>{mockArticle.title}</h1>
                    <ArticleEditor initialState={mockArticle.content} readOnly={true}/>

                    <div id={styles.comments}>
                        <p id={styles.commentsHeader}>Комментарии (0)</p>
                        <p id={styles.commentWarning}>Уважаемые пользователи! Комментарии, несоответствующие <a href={"/comment-rules"} target="_blank">требованиям к комментариям</a>, будут удалены!</p>
                        <CommentInputField replyTo={null}/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Article;