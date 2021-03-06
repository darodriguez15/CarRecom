import React, {Component} from "react";

import  ModelsList from "./ModelsList.js";
import Header from "../Global/header.js"

import axios from "axios";

const Base = "https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getModels&make=";

class  Models extends  Component{
    
    constructor(props){
        super(props);
            this.state={
                 anio:2017,
                 marca:"Audi",
                 Models:[]
             };
         }
    componentDidMount() {
    var _this = this;
    _this.setState(
    {
        Models:[]
    })
    URL="";
    URL = Base + this.state.marca + "&year=" + this.state.anio;
    axios.get(URL)
    .then(function(res){
        var stringSin = res.data;
        var nLength = stringSin.length - 2
        var datajson = stringSin.slice(2, nLength);
        console.log(datajson);
        var daticus = JSON.parse(datajson);
        console.log(daticus);
        console.log("Se imprimio daticus");
        //var daata = JSON.parse(daticus);
       // console.log(dataa);


        _this.setState({
            Models: daticus.Models

      });
    })
    .catch(function(e) {
      console.log("ERROR2 ", e);
        })
    }
   
    handleKeyPress = (event) => {
        if (event.key === 'Enter') {

            this.setState(
                {
                    anio :event.target.value
                })
            console.log('enter press here! ');
            this.componentDidMount();
            this.render();
        }
    
    }
     handleKeyPress2 = (event) => {
        if (event.key === 'Enter') {

            this.setState(
                {
                    marca :event.target.value
                })
            console.log('enter press here! ');
            this.componentDidMount();
            this.render();
        }
    
    }
    render(){
        return(
            <div className=" Models">
            <Header/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            
            < h1 className="titu"> {this.state.marca} Models in  {this.state.anio}   </h1>
            <br/>
            <div> 
             
            <label className="myLabel">Change Year</label>
             <input aria-label="Change Year" type='text' placeholder='Change Year'
                       onKeyPress={this.handleKeyPress.bind(this)}
                />
                </div>

             <div> 
             
            <label className="myLabel">Change Brand</label>
             <input aria-label="Change Brand" type='text' placeholder='Change Brand'
                       onKeyPress={this.handleKeyPress2.bind(this)}
                />
                </div>   
            <div>  
                    <br/>
                < ModelsList  Models={this.state.Models} anio={this.state.anio}/>
            </div>
                
            </div>
        );
    }
}

export default  Models;