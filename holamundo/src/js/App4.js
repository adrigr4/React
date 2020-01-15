import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { format } from 'path';

class Boton extends Component {
    mas = () => {
        this.props.mas(0);
    }
    render() {
 
        return (
            <button onClick={this.mas}>+</button>
        );
    }
}
;
class Fila extends Component {
    constructor(props){
        super(props);
        this.state = {
            valor: this.props.valor
        }
    }
    menos = () => {
        this.props.menos(this.props.indice);
    }
    changeInput = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
        this.props.changeInput(parseInt(value), this.props.indice);
    }
    render() {
        return (
            <p><input type="number" value={this.state.valor} name="valor" onChange={this.changeInput}></input>
                <button onClick={this.menos}>-</button>
            </p>
        );
    }
}
class Total extends Component {
    render() {
        return (
            <h2>Total:{this.props.suma}</h2>
        )
    }
}
class Tabla extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numeros: [1, 2, 3, 4, 5]
        }; 
    }
    mas = (valor) => {
        this.setState({ numeros: [...this.state.numeros, valor] });
    }
    menos = (index) => {
        this.setState({
            numeros: this.state.numeros.filter((numero, i) => i != index)
        });
    }
    changeInput = (valor, index) => {
        this.setState({ numeros: this.state.numeros.map((numero, i) => i==index?valor:numero)});
    }
    render() {
        const filas = this.state.numeros.map((valor, index) => {
            return (<Fila key={index} indice={index} valor={valor} menos={this.menos} changeInput={this.changeInput}/>);
        });
        const suma = this.state.numeros.reduce((a, b) => a + b, 0);
        return (
            <div>
                <Boton mas={this.mas} />
                {filas}
                <Total suma={suma} />
            </div>
        );
    }
}
;

class App extends Component {
    render() {
        return (
            <div className="container">
            <Tabla/>
            </div>
        );
    }
};
export default App;