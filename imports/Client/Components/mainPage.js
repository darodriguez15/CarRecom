import React, {Component} from "react";
import Header from "./Global/header.js"
export default class App extends Component
{
    constructor(props) {
        super(props);
       var imagen = "";


    }

    //Comentarios
    componentDidMount() {

        

    }


    
    render (){
        return (
            <div>
                <Header/>
                 <div className="FanZone">
                 <br/>
                 <br/>
                 <br/>  
                <div className="row">
                    <div className="col-sm-12">
                        <img className="imageHomePage" src="https://media.istockphoto.com/photos/collection-of-car-brand-logos-picture-id497297141" alt=""/>
                    </div>
                </div>
                <br/>
                
                
                <h1 className="titu">Welcome to CarRecom</h1>

                <br/><br/>
                
                <div className="row">
                <div className="col-sm-6">
                <br/>
                <br/>
                
                <p className="mainDesc"> 
CarRecom is a tool that helps potential buyers of vehicles. CarRecom allows you to see all the brands of vehicles per year, in addition to seeing the models marketed by brand and the specific characteristics of each model. If you do not have an account you can not create reviews but you can see the available ones </p>

                </div>
                <div className="col-sm-6">
                <br/>
                <br/>
                
                <p className="mainDesc">
All the information was taken from CarQueryApi and the images were taken from Qwant Api. No copyright infringement intended.

For the correct operation install the following AddOn: <a target="_blank" href="https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi">Add-On</a> </p>

                </div>
                </div>

                <div className="row">

                    <br/><br/><br/>  



                    <div className="col-sm-6">
                        <img className="uniandes" src="https://serea2017.uniandes.edu.co/images/Logo.png" alt=""/>
                    </div>
                    <div className="col-sm-6">
                    <br/>
                    <br/>
                        <img className="uniandes" src="https://sistemas.uniandes.edu.co/images/headers/50BFD5Movil.png" alt=""/>
                    </div>
                </div>
                <br/><br/>
            </div>
                
            </div>
        );
    }
}