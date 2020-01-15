import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

class Form extends Component {
  constructor(props) {
    super(props)

    this.initialState = {
      nombre: '',
      nota: '',
    }

    this.state = this.initialState;
  }
  cambio = event => {
    const { name, value } = event.target;

    console.log(name + "|" + value);
    this.setState({
      [name]: value
    })
  }
  enviar = () => {
    this.props.mas(this.state.nombre, this.state.nota);
    this.setState(this.initialState);
  }
  render() {
    return (
      <form>
        <label>Nombre</label>
        <input type="text" className="form-control form-control-lg" name="nombre" value={this.state.nombre} onChange={this.cambio} />
        <label>Nota</label>
        <input type="text" className="form-control form-control-lg" name="nota" value={this.state.nota} onChange={this.cambio} />
      <button className="btn btn-success" onClick={this.enviar}> Añadir </button>
      </form>
    );
  }
}

class Cabecera extends Component {
  render() {

    return (
      <tr><th>Alumno</th><th>Nota</th></tr>
    );
  }
}

class Fila extends Component {
  render() {
    return (
      <tr >
        <td onClick={() => this.props.mas(this.props.nombre, this.props.nota)}>{this.props.nombre}</td><td>{this.props.nota}</td>
        <td><Button variant="danger" onClick={() => this.props.menos(this.props.index)}>Borrar</Button></td>
      </tr>
    );
  }
}

class Tabla extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alumnos: this.props.alumnos,
      cont: this.props.cont
    };
    this.mas = this.mas.bind(this);
  }
  mas = (nombre, nota) => {
    this.setState({ alumnos: [...this.state.alumnos, { nombre: nombre, nota: nota }], cont: this.state.cont + 1 });
  }

  menos = (index) => {
    this.setState({ alumnos: this.state.alumnos.filter((alumno, i) => i != index), cont: this.state.cont - 1 });
  }
  suma = () => {
    this.setState({ cont: this.state.cont + 1 });
  }

  cambio = event => {
    const { name, value } = event.target;

    console.log(name + "|" + value);
    this.setState({ [name]: value })
  }

  cont = (e) => {
    let cont = 1;
    if (e.shiftKey) {
      cont = 5;
    }
    if (e.button == 1) {
      cont = 10;
    }
    this.setState({ cont: this.state.cont + cont });
  }

  render() {

    const filas = this.state.alumnos.map((fila, index) => {
      return (<Fila key={index} index={index} nombre={fila.nombre} nota={fila.nota} mas={this.mas} menos={this.menos} />);
    }
    );
    return (
      <div className="container">
        <div>
          <h1>Contador: {this.state.cont}</h1>
          <Form mas={this.mas} />
          <button className="btn btn-dark" onClick={() => this.mas("Ana", 6)}>Añadir</button>{' '}
          <button className="btn btn-dark" onClick={() => this.menos(0)}>Quitar</button>
            
          <Table>
            <thead>
              <Cabecera /></thead>
            <tbody>
              {filas}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    const alumnos = [{ nombre: "Ana", nota: 6 }, { nombre: "Pep", nota: 4 }];
    return (
      <Tabla alumnos={alumnos} cont={alumnos.length} />
    );
  }
};
export default App;