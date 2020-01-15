import React, { Component } from 'react';
import {
    Link,
} from "react-router-dom";

class Jugador extends Component {
    delete = () => {
        this.props.delete(this.props.id);
      }
    render() {
        let editRoute = "/Edit/"+this.props.id;
        let detailRoute = "/Details/"+this.props.id;
        return (
            <tr>
                <td>{this.props.nombre}</td>
                <td>{this.props.alias}</td>
                <td>{this.props.correo}</td>
                <td><Link to={detailRoute}><button className="btn btn-secondary mr-2" onClick={this.edit}>Perfil</button></Link>
                <Link to={editRoute}><button className="btn btn-primary mr-2" onClick={this.edit}>Editar</button></Link>
                <button className="btn btn-danger" onClick={this.delete}>Eliminar</button></td>
            </tr>
        )
    }
}

class Jugadores extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jugadores: []
        }
    }
    componentDidMount() {
        fetch("https://localhost:44360/api/Jugadores")
            .then(response => response.json())
            .then(data => {
                this.setState({ jugadores: data });
            })
    }
    delete = (id) => {
        fetch("https://localhost:44360/api/Jugadores/"+id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {this.componentDidMount()});
    }
    render() {
        const filas = this.state.jugadores.map((jugador) => {
            return (<Jugador key={jugador.id} id={jugador.id} nombre={jugador.nombre} correo={jugador.correo} alias={jugador.alias} delete={this.delete}/>)
        })
        return (
            <>
            <h2 className="mt-3">Jugadores</h2>
            <p></p>            
            <Link to="/Create"><button className="btn btn-primary">Nuevo</button></Link>
            <p></p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Alias</th>
                        <th>Correo</th>
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
                <Jugadores />
            </>
        );
    }
};
export default App;