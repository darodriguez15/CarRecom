import React, {Component} from "react";
import PropTypes from "prop-types";
import axios from "axios";


const Base = "https://api.qwant.com/api/search/images?count=1&offset=1&q=";

 class Spec extends Component {
    constructor(props){
        super(props);
        this.state = {
      items: []
    }
    }
   
    componentDidMount() {
    var _this = this;
    tempo="";
    var URL = ""
    console.log("imprimiendo estado");
    console.log(this.props.Spec.Spec_name);
    console.log(this.props.Spec.Spec_make_id)

    var anio = this.props.anio;
    console.log(anio);
    tempo = this.props.Spec.Spec_make_id +"_"+this.props.Spec.Spec_name;

    console.log("imprimiendo tempo");
    console.log(tempo);
    URL = Base + tempo+"_"+anio;
    console.log(URL);
    axios.get(URL)
    .then(function(res){
      _this.setState({
        items: res.data.data.result.items
      });
      tempo="";
    })
    .catch(function(e) {
      console.log("ERROR2 ", e);
    })
  }
    

    render(){
        var componente = this;
        const renderItems = this.state.items.map(function(item, i) {
        
        return <div>
        <center>
        <img className="SpecImage" src={item.media} alt="" />
        </center>
      </div>
    }); 

        return(
            
            
            <div className="col-sm-4">
            {renderItems}
            <h4 className="descripcion">Brand: {this.props.Spec.Spec_make_id}</h4>
            <h5 className="descripcion">Spec: {this.props.Spec.Spec_name}    </h5>
            
                <br/>
            </div>
            

        ); 
    }
}
Spec.PropTypes = {
    Spec : PropTypes.object.isRequired
}

export default Spec;