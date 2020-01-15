import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
class Contador extends React.Component {
    render() {
        var textStyle = {
            fontSize: 72,
            fontFamily: "sans-serif",
            color: "#333",
            fontWeight: "bold"
        };
        console.log("render: Contador componente");
 
        return (
                <div style={textStyle}>
                    {this.props.display}
                </div>
                );
    }
}
class ContadorParent extends React.Component {
    constructor(props) {
        super(props);
        console.log("constructor: Valores por defecto");
        this.state = {
            count: 0
        };
        this.increase = this.increase.bind(this);
     
    }
    increase() {
        this.setState({
            count: this.state.count + 1
        });
    }
 
    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps: Poco uso")
        return null;
    }
    componentDidUpdate(currentProps, currentState) {
        console.log("componentDidUpdate: El componente se ha actualizado");
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate: El componente va a enviar sus cambios")
        return null;
    }
    componentDidMount() {
        console.log("componentDidMount: Componente insertado en el árbol DOM");
    }
    componentWillUnmount() {
        console.log("componentWillUnmount: Component a punto de ser eliminado del DOM");
    }
    shouldComponentUpdate(newProps, newState) {
        console.log("shouldComponentUpdate: ¿Hay que actualizar?");
        if (newState.count < 5) {
            console.log("shouldComponentUpdate: Sí, hay que actualizar");
            return true;
        } else {
            ReactDOM.unmountComponentAtNode(document.getElementById('root'));
            console.log("shouldComponentUpdate: No hay que actualizar");
            return false;
        }
    }
    render() {
        var backgroundStyle = {
            padding: 50,
            border: "#333 2px dotted",
            width: 350,
            height: 250,
            borderRadius: 10,
            textAlign: "center"
        };
        console.log("render: ContadorParent componente");
        return (
                <div style={backgroundStyle}>
                    <Contador display={this.state.count} />
                    <button onClick={this.increase}>
                        +
                    </button>
                      
                </div>
                );
    }
}
;
class App extends Component
 
 
{
    render() {
      
        return (
               <ContadorParent/>
                );
    }
}
 
 
 
;
export default App;