import React, {Component} from "react";

import  SpecsList from "./SpecsList.js";
import Header from "../Global/header.js"

import axios from "axios";

const Base = "https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getTrims&";

class  Specs extends  Component{
    
    constructor(props){
        super(props);
            this.state={
                 anio:2017,
                 marca:"Bmw",
                 modelo:"M5",
                 Specs:[]
             };
         }
    componentDidMount() {
    var _this = this;
    _this.setState(
    {
        Specs:[]
    })
    URL="";
    URL = Base + "make="+ this.state.marca + "&model=" + this.state.modelo + "&year=" + this.state.anio;
    console.log(URL);
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
            Specs: daticus.Specs

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
            <div className=" Specs">
            <Header/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            
            < h1 className="titu"> {this.state.marca} Specs in  {this.state.anio}   </h1>
            <br/>
            <div> 
             
            <label id="myLabel">Change Year</label>
             <input type='text' placeholder='Change Year'
                       onKeyPress={this.handleKeyPress.bind(this)}
                />
                </div>

             <div> 
             
            <label id="myLabel">Change Brand</label>
             <input type='text' placeholder='Change Brand'
                       onKeyPress={this.handleKeyPress2.bind(this)}
                />
                </div>   
            <div>  
                    <br/>
                < SpecsList  Specs={this.state.Specs} anio={this.state.anio}/>
            </div>
                
            </div>
        );
    }
}

export default  Specs;