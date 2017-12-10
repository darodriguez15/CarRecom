import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { Recoms } from '../../../api/recoms';
import { createContainer } from 'meteor/react-meteor-data';

// Task component - represents a single todo item
class Recom extends Component {
    constructor(props) {
        super(props);

        this.state = {
            noDioLike: true,
            noDioDislike: true
        };
    }

    render() {
        const bookClassName = this.props.recom.genre ? 'checked' : '';
        return (
            <div className={this.props.recom.busquedaH} >
                <br />
                <div className="row contenedora">
                    <div className="col-sm-4 ">

                        <br />
                        <img className="imagenLibro" src={this.props.recom.imagen} onClick={this.mostrarImagen.bind(this)} alt="" height="100" width="100" /><br />
                        {this.props.currentUser ?
                            <form className={this.props.recom.mI} onSubmit={this.cambiarImagen.bind(this)}>
                                <input type="text" ref="textInputIm" placeholder="Direccion url de la imagen" aria-label = "Direccion url de la imagen" />
                            </form> : ''}
                        <br />
                        <p className="descLibro" onClick={this.mostrarGenero.bind(this)}>Model: {this.props.recom.genero}</p>
                        {this.props.currentUser ?
                            <form className={this.props.recom.mG} onSubmit={this.editarGenre.bind(this)}>
                                <input type="text" ref="textInputiss" placeholder={this.props.recom.genero} aria-label = "Nuevo Genero del libro"/>
                            </form> : ''}
                        <p className="descLibro" onClick={this.mostrarIdioma.bind(this)}> Year: {this.props.recom.idioma}</p>
                        {this.props.currentUser ?
                            <form className={this.props.recom.mL} onSubmit={this.editarLan.bind(this)}>
                                <input type="text" ref="textInputo" placeholder={this.props.recom.idioma} aria-label = "Nuevo idioma del libro"/>
                            </form> : ''}
                        <p className="descLibro" >Comfort: {this.props.recom.likesC} /10 <img onClick={this.darLikeC.bind(this)} src="https://cdn1.iconfinder.com/data/icons/arrows-97/24/552-128.png" alt="" height="20" width="20" /><img onClick={this.darDislikeC.bind(this)} src="https://cdn1.iconfinder.com/data/icons/arrows-97/24/551-512.png" alt="" height="20" width="20" /></p>
                        {this.props.currentUser ?
                            <form className="hidden">
                                <input type="text" ref="textInputi" placeholder={this.props.recom.genero} aria-label="Nuevo Genero del libro" />
                                </form> : ''} 
                        <p className="descLibro" >Performance: {this.props.recom.likesP} /10 <img onClick={this.darLikeP.bind(this)} src="https://cdn1.iconfinder.com/data/icons/arrows-97/24/552-128.png" alt="" height="20" width="20" /><img onClick={this.darDislikeP.bind(this)} src="https://cdn1.iconfinder.com/data/icons/arrows-97/24/551-512.png" alt="" height="20" width="20" /></p>
                            {this.props.currentUser ?
                            <form className="hidden" >
                                    <input type="text" ref="textInputi" placeholder={this.props.recom.genero} aria-label="Nuevo Genero del libro" />
                                </form> : ''} 
                            <p className="descLibro" >Seguridad: {this.props.recom.likesS} /10  <img onClick={this.darLikeS.bind(this)} src="https://cdn1.iconfinder.com/data/icons/arrows-97/24/552-128.png" alt="" height="20" width="20" /><img onClick={this.darDislikeS.bind(this)} src="https://cdn1.iconfinder.com/data/icons/arrows-97/24/551-512.png" alt="" height="20" width="20" /></p>
                            {this.props.currentUser ?
                            <form className="hidden" >
                                    <input type="text" ref="seguridad" placeholder={this.props.recom.genero} aria-label="Nuevo Genero del libro" />
                                </form> : ''} 
                    </div>
                    <div className="col-sm-8 ">
                        <h2 className="tituloLibro">{this.props.recom.text}</h2><br />

                        <p className="historia">{this.props.recom.texto}</p>
                        {this.props.currentUser && (this.props.recom.privado == false || (this.props.recom.username == Meteor.user().username) || (this.props.recom.colaboradores != undefined && this.props.recom.colaboradores.includes(Meteor.user().username ))) ?
                            <form onSubmit={this.editarStory.bind(this)}>
                                <input type="text" ref="textInput" placeholder="Write review" aria-label = "Agregar una nueva parte a la historia" />
                            </form> : ''}

                            <p><span className="text">
                            <br/>
                            User:<strong>{this.props.recom.username}</strong>
                        </span></p><br />
                        <br/><br/>
                        <br/><br/>
                      
                        <strong>Comments</strong>

                        <p className="comentario">{this.props.recom.comments}</p>
                        {this.props.currentUser ?
                            <form onSubmit={this.addComment.bind(this)}>
                                <input type="text" ref="textInputco" placeholder="Add a comment to the review" aria-label = "Agregar nuevo comentario"/>
                            </form> : ''}
                        <br/>
                        {(this.props.currentUser && Meteor.user().username === this.props.recom.username) ?
                            <button className="delete btn" onClick={this.deleteThisTask.bind(this)}> Delete Review</button> : ''}
                        <br/><br/>


                    </div>


                    <button className={this.props.recom.botonBusqueda} onClick={this.salirBusqueda.bind(this)}>Salir de Busqueda</button>
                    <br/><br/>
                </div>
                <br />
                <br />
            </div>
        );
    }
    editarGenre() {
        const text = ReactDOM.findDOMNode(this.refs.textInputiss).value.trim();
        console.log("mirá ve"+ text);
        Meteor.call('recoms.editarGenre', this.props.recom._id, text);
    }
    mostrarGenero() {
        Meteor.call('recoms.mostrarGenero', this.props.recom._id);
    }
    salirBusqueda() {
        Meteor.call('recoms.salirBusqueda', this.props.recom._id);
    }
    darLikeC() {
        if (this.props.currentUser) {
            const likes = this.props.recom.likesC;
            const nLikes = likes + 1;
            if (likes >= 10) {
                nLikes = likes;
            }
            
            Meteor.call('recoms.darLikeC', this.props.recom._id, likes, nLikes);
        }
    }
    darDislikeC() {
        if (this.props.currentUser) {
            const dLikes = this.props.recom.likesC;
            const nDlikes = dLikes - 1;
            if (dLikes <= 0) {
                nDlikes = dLikes;
            }
            Meteor.call('recoms.darDislikeC', this.props.recom._id, dLikes, nDlikes);
        }
    }
    darLikeP() {
        if (this.props.currentUser) {
            const likes = this.props.recom.likesP;
            const nLikes = likes + 1;
            if (likes >= 10) {
                nLikes = likes;
            }
            Meteor.call('recoms.darLikeP', this.props.recom._id, likes, nLikes);
        }
    }
    darDislikeP() {
        if (this.props.currentUser) {
            const dLikes = this.props.recom.likesP;
            const nDlikes = dLikes - 1;
            if (dLikes <= 0) {
                nDlikes = dLikes;
            }
            Meteor.call('recoms.darDislikeP', this.props.recom._id, dLikes, nDlikes);
        }
    }
    darLikeS() {
        if (this.props.currentUser) {
            const likes = this.props.recom.likesS;
            const nLikes = likes + 1;
            if (likes >= 10) {
                nLikes = likes;
            }
            Meteor.call('recoms.darLikeS', this.props.recom._id, likes, nLikes);
        }
    }
    darDislikeS() {
        if (this.props.currentUser) {
            const dLikes = this.props.recom.likesS;
            const nDlikes = dLikes - 1;
            if (dLikes <= 0) {
                nDlikes = dLikes;
            }
            Meteor.call('recoms.darDislikeS', this.props.recom._id, dLikes, nDlikes);
        }
    }

    editarLan() {
        const text = ReactDOM.findDOMNode(this.refs.textInputo).value.trim();
        Meteor.call('recoms.editarLan', this.props.recom._id, text);
    }
    mostrarIdioma() {
        Meteor.call('recoms.mostrarIdioma', this.props.recom._id);
    }
    editarStory() {
        const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
        Meteor.call('recoms.editarStory', this.props.recom._id, this.props.recom.texto, text);
    }
    agregarColaborador() {
        const text = ReactDOM.findDOMNode(this.refs.colaborador).value.trim();
        Meteor.call('recoms.addColaborador', this.props.recom._id, this.props.recom.colaboradores, text);
    }
    addComment() {
        const text = ReactDOM.findDOMNode(this.refs.textInputco).value.trim();
        nText = (this.props.recom.comments + "\n" + text + "\n" + "Comentado por:" + Meteor.user().username +".\n" + "\n" );
        Meteor.call('recoms.addComment', this.props.recom._id, nText);
    }
    cambiarImagen() {
        const text = ReactDOM.findDOMNode(this.refs.textInputIm).value.trim();
        Meteor.call('recoms.cambiarImagen', this.props.recom._id, text);
    }
    mostrarImagen() {
        Meteor.call('recoms.mostrarImagen', this.props.recom._id);
    }

    deleteThisTask() {
        if(this.props.recom.username === Meteor.user().username)
        {
            Meteor.call('recoms.remove', this.props.recom._id);
        }
        else {
            alert("Solo puedes borrar libros de tu autoria");
        }

    }
}
Recom.propTypes = {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    recom: PropTypes.object.isRequired,
    currentUser: PropTypes.object,
};
export default createContainer(() => {
    return {
        currentUser: Meteor.user(),
    };
}, Recom);