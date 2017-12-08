import React, {Component} from "react";
import {Router, Route} from "react-router";
import createBrowserHistory from 'history/createBrowserHistory';
const browserHistory = createBrowserHistory();

//Components

import mainPage from "./Components/mainPage";


export const renderRoutes = () => (

    <Router history={browserHistory}>
    <div>
    <Route exact path="/" component={mainPage}/>
    <Route path="/prueba" component = {mainPage}/>
</div>
</Router>
);