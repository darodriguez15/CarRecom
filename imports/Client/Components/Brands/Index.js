import React, {Component} from "react";

import  BrandsList from "./BrandsList.js";

class  Brands extends  Component{
    
    constructor(props){
        super(props);
            this.state={
                 Brands:[{"make_id":"acura","make_display":"Acura","make_is_common":"1","make_country":"USA"},{"make_id":"audi","make_display":"Audi","make_is_common":"1","make_country":"Germany"},{"make_id":"bentley","make_display":"Bentley","make_is_common":"1","make_country":"UK"},{"make_id":"bmw","make_display":"BMW","make_is_common":"1","make_country":"Germany"},{"make_id":"buick","make_display":"Buick","make_is_common":"1","make_country":"USA"},{"make_id":"cadillac","make_display":"Cadillac","make_is_common":"1","make_country":"USA"},{"make_id":"chevrolet","make_display":"Chevrolet","make_is_common":"1","make_country":"USA"},{"make_id":"chrysler","make_display":"Chrysler","make_is_common":"1","make_country":"USA"},{"make_id":"dodge","make_display":"Dodge","make_is_common":"1","make_country":"USA"},{"make_id":"fiat","make_display":"Fiat","make_is_common":"1","make_country":"Italy"},{"make_id":"ford","make_display":"Ford","make_is_common":"1","make_country":"USA"},{"make_id":"gmc","make_display":"GMC","make_is_common":"1","make_country":"USA"},{"make_id":"honda","make_display":"Honda","make_is_common":"1","make_country":"Japan"},{"make_id":"hyundai","make_display":"Hyundai","make_is_common":"1","make_country":"South Korea"},{"make_id":"infiniti","make_display":"Infiniti","make_is_common":"1","make_country":"Japan"},{"make_id":"jaguar","make_display":"Jaguar","make_is_common":"1","make_country":"UK"},{"make_id":"jeep","make_display":"Jeep","make_is_common":"1","make_country":"USA"},{"make_id":"kia","make_display":"Kia","make_is_common":"1","make_country":"South Korea"},{"make_id":"lamborghini","make_display":"Lamborghini","make_is_common":"1","make_country":"Italy"},{"make_id":"lexus","make_display":"Lexus","make_is_common":"1","make_country":"Japan"},{"make_id":"lincoln","make_display":"Lincoln","make_is_common":"1","make_country":"USA"},{"make_id":"maserati","make_display":"Maserati","make_is_common":"1","make_country":"Italy"},{"make_id":"mazda","make_display":"Mazda","make_is_common":"1","make_country":"Japan"},{"make_id":"mclaren","make_display":"McLaren","make_is_common":"1","make_country":"UK"},{"make_id":"mercedes-benz","make_display":"Mercedes-Benz","make_is_common":"1","make_country":"Germany"},{"make_id":"mini","make_display":"Mini","make_is_common":"1","make_country":"UK"},{"make_id":"mitsubishi","make_display":"Mitsubishi","make_is_common":"1","make_country":"Japan"},{"make_id":"nissan","make_display":"Nissan","make_is_common":"1","make_country":"Japan"},{"make_id":"porsche","make_display":"Porsche","make_is_common":"1","make_country":"Germany"},{"make_id":"rolls-royce","make_display":"Rolls-Royce","make_is_common":"1","make_country":"UK"},{"make_id":"scion","make_display":"Scion","make_is_common":"1","make_country":"Japan"},{"make_id":"smart","make_display":"Smart","make_is_common":"1","make_country":"France"},{"make_id":"subaru","make_display":"Subaru","make_is_common":"1","make_country":"Japan"},{"make_id":"toyota","make_display":"Toyota","make_is_common":"1","make_country":"Japan"},{"make_id":"volkswagen","make_display":"Volkswagen","make_is_common":"1","make_country":"Germany"},{"make_id":"volvo","make_display":"Volvo","make_is_common":"1","make_country":"Sweden"}]
            };
         }
    componentDidMount(){
        /** ACA VA LO QUE NO SE HACER :( **/
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