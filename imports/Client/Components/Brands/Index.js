import React, {Component} from "react";

import  BrandsList from "./BrandsList.js";

import axios from "axios";

const URL = "https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes&year=";

class  Brands extends  Component{
    
    constructor(props){
        super(props);
            this.state={
                 anio:2017,
                 Brands:[]
             };
         }
    componentDidMount(){
    var componente = this;
    URL = URL + this.state.anio;
    axios.get(URL)
    .then(function(res){
        console.log(res);
        var daticus = $.parseJSON(res.data);
        console.log(daticus);

      componente.setState({
        Brands: res.data

      });
    })
    .catch(function(e) {
      console.log("ERROR2 ", e);
    })
    }

    render(){
        return(
            <div className=" Brands">
            <h1> Brands Season 2017</h1>
                <br/>
                < BrandsList  Brands={this.state. Brands}/>
            </div>
        );
    }
}

export default  Brands;