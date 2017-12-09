import React, {Component} from "react";

export default class App extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            nombre: "juan",
            apellido: "Perez",
            year:"2017",
            brands:[]

        var imagen = "";


    }

    
    componentDidMount() {

        var makes = [];
        var ready = false;

        var anio = this.state.year;
        console.log(anio);
        /**$.getJSON("https://www.carqueryapi.com/api/0.3/" + "?callback=?", {
            cmd: "getMakes",
            year:{anio}+""
        },)
            .done(function( json ) {
                console.log(json.Makes);
                makes = json.Makes;


            }).done(this.setState(
            {
                brands : makes

            }
        )).done(
            console.log("ya debe arranxar"+ this.state.brands)
        )
            .fail(function( jqxhr, textStatus, error ) {
                var err = textStatus + ", " + error;
                console.log( "Request Failed: " + err );
            });






        console.log(this.imagen);

        **/





    }
   
    renderMarcas()
    {
        return this.state.brands.map((t)=> {
            var marca = t.make_display.toString();
            image = this.buscarLogo(marca);
            console.log(image);

            return(<div className="col-sm-4 caja">
                <br/>
                <img src= {this.state.imagen} alt=""/>
                <p className="descripcion"> Name: {t.make_display} </p>
                <p className="descripcion">Nacionality: {t.make_country}</p>
                <br/>


            </div>);
        });
    }


  
    render (){
        return (
            <div>
                <section className="jumbotron ">
                    <div className="container iniMainPage ">
                        <img className="img-fluid" src="./images/profile.png" alt=""/>

                        <div className="row text-center">
                            <h2 className="tituMainPage">Prueba de main Page </h2>


                            <br/><br/><br/>

                            <a href="/user"><button className="btn btn-primary" type="button"> Iniciar Sesion </button></a>
                            <br/><br/>
                            <a href="/ui"><button className="btn btn-primary" type="button"> Continuar como invitado </button></a>

                            

                        </div>
                        <br/>
                        <br/><br/>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>


                    </div>

                </section>
                <h1>Marcas disponibles en {this.state.year}</h1>
                <div className="row">
                {this.renderMarcas()}
                </div>
            </div>
        );
    }
}
