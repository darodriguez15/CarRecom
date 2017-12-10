import React, {Component} from "react";

export default class App extends Component
{  
    render() {
        return (
            <div className="header">
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand navi" href="/">Home</a>
                        </div>
                        <div id="navbar" className  ="navbar-collapse collapse">
                           <ul className="nav navbar-nav navbar-right">
                                <li><a href="/brands">Brands</a></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="/models">Models</a></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="/profiles">Specs</a></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="/profiles">Profile</a></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="/profiles">Reco</a></li>
                            </ul>
                        </div>

                    </div>
                </nav>
            </div>
        );
    }
}