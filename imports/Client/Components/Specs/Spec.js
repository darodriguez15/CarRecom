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

    var anio = this.props.Spec.model_year;
    console.log(anio);
    tempo = this.props.Spec.model_make_id +"_"+this.props.Spec.model_name; 

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
            
            
            <div className="col-sm-6">
            {renderItems}
            
            <h4 className="descripcion">Brand: {this.props.Spec.model_make_id}</h4>
            <h5 className="descripcion">Spec: {this.props.Spec.model_name}    </h5>
            
                <br/>

             <table className="TablaCoqueta">

  <tr>

    <td> Model Trim </td>

    <td> {this.props.Spec.model_trim} </td>
    

  </tr>

  <tr>

    <td>Model Year</td>

    <td>{this.props.Spec.model_year}</td>

   

  </tr>

  <tr>

    <td>Model Body</td>

    <td>{this.props.Spec.model_body}</td>

  </tr>
    
  <tr>

    <td> Engine(cc) </td>

    <td>{this.props.Spec.model_engine_cc}</td>

  </tr>
  <tr>

    <td> Power(PS) </td>

    <td>{this.props.Spec.model_engine_power_ps}</td>

  </tr>
  <tr>

    <td> Top Speed (k/h) </td>

    <td>{this.props.Spec.model_top_speed_kph}</td>

  </tr>
  <tr>

    <td> 0 to 100 (k/h) </td>

    <td>{this.props.Spec.model_0_to_100_kph}</td>

  </tr>
  <tr>

    <td> Drive </td>

    <td>{this.props.Spec.model_drive}</td>

  </tr>
  <tr>

    <td> Transmission </td>

    <td>{this.props.Spec.model_transmission_type}</td>

  </tr>
  
</table>   
<br/>
<br/>
<br/>
            </div>
            

        ); 
    }
}
Spec.PropTypes = {
    Spec : PropTypes.object.isRequired
}

export default Spec;