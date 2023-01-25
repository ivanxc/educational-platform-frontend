import {BrowserRouter, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router/routes";

function AppRouter() {
    const isAuth = true;

    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route path={route.path} element={route.component} exact={route.exact} key={Date.now()}/>
                )}
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route path={route.path} element={route.component} exact={route.exact} key={Date.now()}/>
                )}
            </Routes>
    );
}

export default AppRouter;