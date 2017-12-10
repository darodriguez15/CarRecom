import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import PropTypes from "prop-types";
import ReactDOM from 'react-dom';
import Recom from './Recom';
import { Meteor } from 'meteor/meteor';
import { Recoms } from "../../../api/recoms";
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import Header from "../Global/header.js";
// App component - represents the whole app
class App extends Component {

  constructor(props) {
    super(props);
 
    this.state = {
        busqueda: "hidden",

    };
  }

  renderTasks() {
          return this.props.recoms.map((recom) => (
              <Recom key={recom._id} recom={recom}  />
          ));
    }
    handleSubmit() {
        event.preventDefault();

        // Find the text field via the React ref
        const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
        console.log("llegué aca");                    
                Meteor.call('recoms.insert', text);

        // Clear form
        ReactDOM.findDOMNode(this.refs.textInput).value = '';


    }
    handleChange() {
        const text = ReactDOM.findDOMNode(this.refs.textInputo).value.trim();
        console.log(text);
        this.setState({ busqueda: "" });
        for (i = 0; i < this.props.recoms.length; i++) {
            Meteor.call('recoms.fore', this.props.recoms[i]._id);
        }
        for (i = 0; i < this.props.recoms.length; i++) {
            if (this.props.recoms[i].text == (text)) {
                Meteor.call('recoms.fore2', this.props.recoms[i]._id);
            }
        }
    }
    handleChange2() {
        const text = ReactDOM.findDOMNode(this.refs.genero).value.trim();
        console.log(text);
        this.setState({ busqueda: "" });
        for (i = 0; i < this.props.recoms.length; i++) {
            Meteor.call('recoms.fore', this.props.recoms[i]._id);
        }
        for (i = 0; i < this.props.recoms.length; i++) {
            if (this.props.recoms[i].genero.includes(text)) {
                Meteor.call('recoms.fore2', this.props.recoms[i]._id);
            }
        }
    }
    handleChange3() {
        const text = ReactDOM.findDOMNode(this.refs.autor).value.trim();
        console.log(text);
        this.setState({ busqueda: "" });
        for (i = 0; i < this.props.recoms.length; i++) {
            Meteor.call('recoms.fore', this.props.recoms[i]._id);
        }
        for (i = 0; i < this.props.recoms.length; i++) {
            if (this.props.recoms[i].username.includes(text)) {
                Meteor.call('recoms.fore2', this.props.recoms[i]._id);
            }
        }
    }
    handleChange4() {
        const text = ReactDOM.findDOMNode(this.refs.idioma).value.trim();
        console.log(text);
        this.setState({ busqueda: "" });
        for (i = 0; i < this.props.recoms.length; i++) {
            Meteor.call('recoms.fore', this.props.recoms[i]._id);
        }
        for (i = 0; i < this.props.recoms.length; i++) {
            if (this.props.recoms[i].idioma.includes(text)) {
                Meteor.call('recoms.fore2', this.props.recoms[i]._id);
            }
        }
    }

    handleChange5() {
        const text = ReactDOM.findDOMNode(this.refs.clave).value.trim();
        console.log(text);
        this.setState({ busqueda: "" });
        for (i = 0; i < this.props.recoms.length; i++) {
            Meteor.call('recoms.fore', this.props.recoms[i]._id);
        }
        for (i = 0; i < this.props.recoms.length; i++) {
            if (this.props.recoms[i].text.includes(text)) {
                Meteor.call('recoms.fore2', this.props.recoms[i]._id);
            }
        }
    }

    render() {
        paila = true;
        for (i = 0; i < this.props.recoms.length; i++) {
            if (this.props.recoms[i].busquedaH == "") {
                paila = false;
            }
        }
        if (paila) {
            for (i = 0; i < this.props.recoms.length; i++) {
                Meteor.call('recoms.paila', this.props.recoms[i]._id);
            }
        }
        return (
            <div className="container">
                <br/><br/><br/><br/>
                <Header/> 
                <div className="row">
                    <div className="col-sm-10">
                        <h1>List of reviews
                            </h1>
                </div>
                    <div className="col-sm-2"> <br/><br/>

                        <AccountsUIWrapper/></div>


                </div>


                <h2>Search</h2>
                <br/>
                <div id="panelBusquedas">
                    <form className="new-task" onSubmit={this.handleChange.bind(this)} ><p>
                        <label>Recommendation by brand</label>
                        <input
                            aria-label = "Recommendations searchs"
                        type="text"
                        ref="textInputo"
                        placeholder="Recommendations by brand" /></p>
                    </form>
                    <form className="new-task" onSubmit={this.handleChange2.bind(this)} ><p>
                        <label>Recommendation by model</label>
                        <input
                            type="text"
                            ref="genero"
                            aria-label = "Buscar libro por genero"
                            placeholder="Recommendation by Model" /></p>
                    </form>
                    <form className="new-task" onSubmit={this.handleChange3.bind(this)} ><p>
                        <label>Recommendations by user</label>
                        <input
                            type="text"
                            ref="autor"
                            aria-label = "Buscar libro por autor"
                            placeholder="Recomendations by user" /></p>
                    </form>
                    <form className="new-task" onSubmit={this.handleChange4.bind(this)} ><p>
                        <label>Recommendations by year</label>
                        <input
                            type="text"
                            ref="idioma"
                            aria-label = "Buscar libro por idioma"
                            placeholder="Recommendations by year" /></p>
                    </form>
                </div>

                <a className="btn btn-default 	proyectButton	" role="button" id="descrpBotuuno">See browsing options&raquo;</a><br/><br/><br/><br/>


            {this.props.currentUser ?
                  <div>
                <h3>Add new review</h3>
                    <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                        <p><input
                            type="text"
                            ref="textInput"
                            aria-label = "Nombre de tu nuevo libro"
                            placeholder="Brand of the reviewed car" /></p>
                    </form> </div>: ''
                    }

                    {this.renderTasks()}



            </div>
        );
    }



    abrrirBoton() {
        this.setState({ busqueda: "hidden" });
    }
}
App.propTypes = {
    recoms: PropTypes.array.isRequired,
    currentUser: PropTypes.object,
};

export default createContainer(() => {

    Meteor.subscribe('recoms');
    return {
        recoms: Recoms.find({}).fetch(),
        currentUser: Meteor.user(),
    };
}, App);