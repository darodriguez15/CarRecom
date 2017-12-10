import React, {Component} from "react";
import PropTypes from "prop-types";
import axios from "axios";


const Base = "https://api.qwant.com/api/search/images?count=1&offset=1&q=";

 class Brand extends Component {
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
    console.log(this.props.Brand.make_display);

    tempo = this.props.Brand.make_display;

    console.log("imprimiendo tempo");
    console.log(tempo);
    URL = Base + tempo +"_logo";
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
        <img className="BrandImage" src={item.media} alt="" />
        </center>
      </div>
    }); 

        return(
            
            
            <div className="col-sm-4">
            {renderItems}
            <h4 className="descripcion">Brand Name: {this.props.Brand.make_display}</h4>
            <h5 className="descripcion">Country: {this.props.Brand.make_country}    </h5>
            
                <br/>
            </div>
            

        ); 
    }
}
Brand.PropTypes = {
    Brand : PropTypes.object.isRequired
}

export default Brand;