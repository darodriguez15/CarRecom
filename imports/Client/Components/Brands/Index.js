import React, {Component} from "react";

import  BrandsList from "./BrandsList.js";
import Header from "../Global/header.js"

import axios from "axios";

const Base = "https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes&year=";

class  Brands extends  Component{
    
    constructor(props){
        super(props);
            this.state={
                 anio:2017,
                 Brands:[]
             };
         }
    componentDidMount() {
    var _this = this;
    _this.setState(
    {
        Brands:[]
    })
    URL="";
    URL = Base + this.state.anio;
    axios.get(URL)
    .then(function(res){
        var stringSin = res.data;
        var nLength = stringSin.length - 2
        var datajson = stringSin.slice(2, nLength);
        var daticus = JSON.parse(datajson);
        console.log(daticus);
        console.log(daticus.Makes);

        _this.setState({
         Brands: daticus.Makes

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
    render(){
        return(
            <div className=" Brands">
            <Header/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            
            < h1 className="titu"> Car Brands in  {this.state.anio}   </h1>
            <br/>
            <div> 
             
            <label className="myLabel">Change Year</label>
             <input aria-label="Change Year" type='text' placeholder='Change Year'
                       onKeyPress={this.handleKeyPress.bind(this)}
                />
                </div>
            <div>  
                    <br/>
                < BrandsList  Brands={this.state. Brands}/>
            </div>
                
            </div>
        );
    }
}

export default  Brands;