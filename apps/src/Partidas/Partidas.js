import React, { Component } from 'react';
import {
    Link,
} from "react-router-dom";

class Partida extends Component {
    constructor(props) {
        super(props);
        this.state = {
            creador: ""
        }
    }
    componentDidMount() {
        fetch("https://localhost:44360/api/Jugadores/" + this.props.creadorId)
            .then(response => response.json())
            .then(data => {
                this.setState({ creador: data.alias })
            })
            .then(console.log(this.state));
    }
    delete = () => {
        this.props.delete(this.props.id);
    }
    render() {
        let editRoute = "/Editpartida/" + this.props.id;
        let detailRoute = "/Detailspartida/" + this.props.id;

        return (
            <tr>
                <td>{this.props.nombre}</td>
                <td>{this.props.fecha}</td>
                <td>{this.props.dificultad}</td>
                <td>{this.props.juego}</td>
                <td>{this.state.creador}</td>
                <td><Link to={detailRoute}><button className="btn btn-secondary mr-2" onClick={this.edit}>Info</button></Link>
                    <Link to={editRoute}><button className="btn btn-primary mr-2" onClick={this.edit}>Editar</button></Link>
                    <button className="btn btn-danger" onClick={this.delete}>Eliminar</button></td>
            </tr>
        )
    }
}

class Partidas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            partidas: []
        }
    }
    componentDidMount() {
        fetch("https://localhost:44360/api/Partidas")
            .then(response => response.json())
            .then(data => {
                this.setState({ partidas: data });
            })
            .then(console.log(this.state));
    }
    delete = (id) => {
        fetch("https://localhost:44360/api/Partidas/" + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => { this.componentDidMount() });
    }
    render() {
        const filas = this.state.partidas.map((partida) => {
            return (<Partida key={partida.id} id={partida.id} nombre={partida.nombre} fecha={partida.fecha} dificultad={partida.dificultad} juego={partida.juego} creadorId={partida.creadorId} delete={this.delete} />)
        })
        return (
            <>
                <h2 className="mt-3">Partidas</h2>
                <p></p>
                <Link to="/Crearpartida"><button className="btn btn-primary">Nueva</button></Link>
                <p></p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Fecha</th>
                            <th>Dificultad</th>
                            <th>Juego</th>
                            <th>Creador</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {filas}
                    </tbody>
                </table>    
                <hr />
            </>
        )
    }
}

class App extends Component {
    render() {
        return (
            <>
                <Partidas />
            </>
        );
    }
};
export default App;