import React, { Component } from "react";
import axios from "axios";

const URL = "https://api.qwant.com/api/search/images?count=4&offset=1&q=renault_clio_2005";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    var _this = this;
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

  render() {
    const renderItems = this.state.items.map(function(item, i) {
      return <div>
      <li key={i}>{item.media}</li>
      <img src={item.media} alt="" />
      </div>
    });

    return (
      <ul className="App">
       {renderItems}
      </ul>
    );
  }
}