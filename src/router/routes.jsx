import {Navigate} from "react-router-dom";
import Courses from "../pages/Courses";
import Auth from "../pages/Auth";
import Error from "../pages/Error";
import Landing from "../pages/Landing";
import Course from "../pages/Course";
import MyProgress from "../pages/MyProgress";
// import Tests from "../pages/Tests";

export const publicRoutes = [
    {path: '/welcome', component: <Landing/>},
    {path: '/auth', component: <Auth/>},
    {path: '/error', component: <Error/>},
    {path: '*', component: <Navigate to='/auth'/>}
]

export const privateRoutes = [
    {path: '/courses', component: <Courses/>},
    {path: '/courses/java', component: <Course/>},
    {path: '/tests', component: <Tests/>},
    {path: '/progress', component: <MyProgress/>},
    {path: '*', component: <Navigate to='/courses'/>}
]