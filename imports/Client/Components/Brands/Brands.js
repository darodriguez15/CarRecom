import React, {
    Component
} from "react";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: "juan",
            apellido: "Perez",
            year: "2017",
            brands: []
        }



    }

    componentDidMount() {

        var makes = [];
        var ready = false;
        var componente = this;
        var anio = this.state.year;
        console.log(anio);
        $.getJSON("https://www.carqueryapi.com/api/0.3/" + "?callback=?", {
                cmd: "getMakes",
                year: "2017"
            }, )
            .then(function(json) {

                makes = json.Makes;
                componente.setState({
                    brands: makes
                })


            })
    .then(
        console.log("ya debe arranxar" + this.state.brands)
    )
    .fail(function(jqxhr, textStatus, error) {
        var err = textStatus + ", " + error;
        console.log("Request Failed: " + err);
    });



}



render() {
    return ( < div >
        < section className = "jumbotron " >
        < div className = "container iniMainPage " >
        < img className = "img-fluid"
        src = "./images/profile.png"
        alt = "" / >

        < div className = "row text-center" >
        < h2 className = "tituMainPage" > Prueba de main Page < /h2>


        < br / > < br / > < br / >

        < a href = "/user" > < button className = "btn btn-primary"
        type = "button" > Iniciar Sesion < /button></a >
        < br / > < br / >
        < a href = "/ui" > < button className = "btn btn-primary"
        type = "button" > Continuar como invitado < /button></a >



        < /div> < br / >
        < br / > < br / >
        < br / > < br / > < br / > < br / > < br / > < br / > < br / > < br / > < br / > < br / > < br / > < br / > < br / > < br / > < br / > < br / > < br / >


        < /div>

        < /section> < h1 > Marcas disponibles en {
            this.state.year
        } < /h1> < div className = "row" >

        < /div> < /div>
    );
}
}