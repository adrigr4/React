import React, { Component } from 'react';
import Create from './Create';
import '../App.css';
import {
    Link,
} from "react-router-dom";

class Game extends Component {
    delete = () => {
        this.props.delete(this.props.id);
      }
    render() {
        let editRoute = "/Edit/"+this.props.id;
        return (
            <tr>
                <td>{this.props.title}</td>
                <td>{this.props.price}</td>
                <td>{this.props.category}</td>
                <td><Link to={editRoute}><button className="btn btn-info mr-2" onClick={this.edit}>Editar</button></Link>
                <button className="btn btn-danger" onClick={this.delete}>Eliminar</button></td>
            </tr>
        )
    }
}

class Games extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: []
        }
    }
    componentDidMount() {
        fetch("https://localhost:44358/api/Games")
            .then(response => response.json())
            .then(data => {
                this.setState({ games: data });
            })
    }
    delete = (id) => {
        fetch("https://localhost:44358/api/Games/"+id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {this.componentDidMount()});
      }
    render() {
        const filas = this.state.games.map((game) => {
            return (<Game key={game.id} id={game.id} title={game.title} price={game.price} category={game.category} delete={this.delete}/>)
        })
        return (
            <>
            <h2>Juegos</h2>
            <p></p>            
            <p></p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Precio</th>
                        <th>Categoria</th>
                    </tr>
                </thead>
                <tbody>
                    {filas}
                </tbody>
            </table>
            </>
        )
    }
}

class App extends Component {
    render() {
        return (
            <div className="container">
                <Games />
            </div>
        );
    }
};
export default App;