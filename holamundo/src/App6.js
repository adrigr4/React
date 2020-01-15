import React, { Component } from 'react';
import './App.css';

class Geolocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitud: null,
            longitud: null
        };
    }
    localizado = (posicion) => {
        this.setState({
            latitud: posicion.coords.latitude,
            longitud: posicion.coords.longitude
        })
    } 
    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.localizado)
        }
    }
    render() {
        return (
            <div>
                <h1>Geolocalizacion</h1>
                <h5>Latitud: {this.state.latitud}</h5>
                <h5>Longitud: {this.state.longitud}</h5>
            </div>
        )
    }
}

class App extends Component {
    render() {
        return (
            <div className="container">
                <Geolocation />
            </div>
        );
    }
};
export default App;