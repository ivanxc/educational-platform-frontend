import {Navigate} from "react-router-dom";
import Courses from "../pages/Courses";
import Auth from "../pages/Auth";
import Error from "../pages/Error";
import Landing from "../pages/Landing";
import Course from "../pages/Course";
import MyProgress from "../pages/MyProgress";
import Tests from "../pages/Tests";
import CreateArticle from "../pages/CreateArticle";
import Tasks from "../pages/Tasks";
import Article from "../pages/Article";
import ArticlePreview from "../pages/ArticlePreview";

export const publicRoutes = [
    {path: '/welcome', component: <Landing/>, exact: true},
    {path: '/auth', component: <Auth/>, exact: true},
    {path: '/error', component: <Error/>, exact: true},
    {path: '*', component: <Navigate to='/auth'/>, exact: true}
]

export const privateRoutes = [
    {path: '/courses', component: <Courses/>, exact: true},
    {path: '/courses/java', component: <Course/>, exact: true},
    {path: '/tests', component: <Tests/>, exact: true},
    {path: '/tasks', component: <Tasks/>, exact: true},
    {path: '/articles/create', component: <CreateArticle/>, exact: true},
    {path: '/articles/create/preview', component: <ArticlePreview/>, exact: true},
    {path: '/articles/1', component: <Article/>, exact: true},
    {path: '/progress', component: <MyProgress/>, exact: true},
    {path: '*', component: <Navigate to='/courses'/>, exact: true}
]