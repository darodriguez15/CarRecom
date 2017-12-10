import React, {Component} from "react";

import PropTypes from "prop-types";

import Model from "./Model.js";

class ModelsList extends Component {
    constructor(props){
        super(props);

    }
    
    renderModels(){        
       return this.props.Models.map((t,i) =>{
            return <Model Model ={t} key={i} anio={this.props.anio}/>
        });
    }
    
    render(){
        return(<div className="elPapadeTodos">
             {this.renderModels()}
        </div>);
    }
}

ModelsList.PropTypes = {
    Models : PropTypes.array.isRequired
};

export default ModelsList;