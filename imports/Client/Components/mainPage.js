import React, {Component} from "react";

export default class App extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            nombre: "juan",
            apellido: "Perez",
            imagen :"",
            ready:false,
            brands:[]
        }

        var imagen = "";


    }

    asignarEstado(data)
    {
        this.setState(
            {
                brands : data
            }
        )
    }

    asignarIma(data)
    {
        this.setState(
            {
                imagen : data
            }
        )
    }

    arregloTotal(data,ima)
    {
        setTimeout(5000);
        this.asignarEstado(data);
        this.asignarIma(ima);
    }
    componentDidMount() {

        var makes = [];
        var ready = false;


        $.getJSON("https://www.carqueryapi.com/api/0.3/" + "?callback=?", {
            cmd: "getMakes",
            year: "2009"
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

        var url = "https://api.qwant.com/api/search/images?count=10&offset=1&q=renault_clio_2005"
        fetch(url, {method: "GET", headers:{accept:"application/json"}})
            .then((res)=> {
                console.log("rest en index");
                console.log(res);
                if(res.ok)
                    return res.json();


            })
            .then((drivers) =>{
                this.setState({
                    imagen : drivers
                })
            })
        console.log(this.state.imagen);
    }




    renderImage()
    {
        setTimeout(2000);
        return(<div>
            <img src={this.image} alt=""/>
        </div>);
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

                            {this.renderImage()}

                        </div>
                        <br/>
                        <br/><br/>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>


                    </div>

                </section>
            </div>
        );
    }
}