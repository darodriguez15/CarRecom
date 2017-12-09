import React, {Component} from "react";
import PropTypes from "prop-types";
import axios from "axios";


const URL = "https://api.qwant.com/api/search/images?count=1&offset=1&q=";

 class Brand extends Component {
    constructor(props){
        super(props);
        this.state = {
      items: []
    }
    }
   
    componentDidMount() {
    var _this = this;
    URL = URL + this.props.Brand.make_display +"logo";
    axios.get(URL)
    .then(function(res){
      _this.setState({
        items: res.data.data.result.items
      });
    })
    .catch(function(e) {
      console.log("ERROR2 ", e);
    })
  }
    

    render(){
        var componente = this;
        const renderItems = this.state.items.map(function(item, i) {
        
      return <div>
      <li key={i}>{item.media}</li>
      <img src={item.media} alt="" />
      </div>
    });

        return(
            
            <div>
            <ul className="App">
            {renderItems}
            </ul>
            <h2>{this.props.Brand.make_display     }</h2>
            <p>{this.props.Brand.make_country}</p>
            
                <br/>
            </div>

        );
    }
}
Brand.PropTypes = {
    Brand : PropTypes.object.isRequired
}

export default Brand;