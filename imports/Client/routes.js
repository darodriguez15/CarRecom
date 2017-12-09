import React, {Component} from "react";
import {Router, Route} from "react-router";
import createBrowserHistory from 'history/createBrowserHistory';
const browserHistory = createBrowserHistory();

//Components

import mainPage from "./Components/mainPage";
import imagenes from "./Components/items";
import Brands from "./Components/Brands/Index";

export const renderRoutes = () => (

    <Router history={browserHistory}>
    <div>
    <Route exact path="/" component={mainPage}/>
    <Route path="/prueba" component = {mainPage}/>
    <Route path="/imagenes" component = {imagenes}/>
    <Route path="/brands" component = {Brands}/>
</div>
</Router>
);