import React, {Component} from "react";

import PropTypes from "prop-types";

import Spec from "./Spec.js";

class SpecsList extends Component {
    constructor(props){
        super(props);

    }
    
    renderSpecs(){        
       return this.props.Specs.map((t,i) =>{
            return <Spec Spec ={t} key={i} anio={this.props.anio}/>
        });
    }
    
    render(){
        return(<div className="elPapadeTodos">
             {this.renderSpecs()}
        </div>);
    }
}

SpecsList.PropTypes = {
    Specs : PropTypes.array.isRequired
};

export default SpecsList;