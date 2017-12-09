import React, {Component} from "react";

import PropTypes from "prop-types";

import Brand from "./Brand.js";

class BrandsList extends Component {
    constructor(props){
        super(props);
    }
    
    renderBrands(){        
       return this.props.Brands.map((t,i) =>{
            return <Brand Brand ={t} key={i}/>
        });
    }
    
    render(){
        return(<div>
             {this.renderBrands()}
        </div>);
    }
}

BrandsList.PropTypes = {
    Brands : PropTypes.array.isRequired
};

export default BrandsList;