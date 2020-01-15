import React, { Component } from 'react';   
import './App.css';

class Circulo extends React.Component {
  render() {
      var circuloStyle = {
          padding: 10,
          margin: 20,
          display: "inline-block",
          backgroundColor: this.props.bgColor,
          borderRadius: "50%",
          width: 100,
          height: 100
      };
      return (
              <div style={circuloStyle}>
              </div>
              );
  }
}

class VerCirculo extends React.Component {
    render() {
    return verCirculo(this.props.num);
    }
}

function verCirculo(num) {
  let colores = ["black", "red", "green", "blue", "yellow", "orange", "magenta", "aqua", ""];
  let circulos = [];
    for(let i=0; i<num; i++){
        let ran = Math.floor(Math.random() * colores.length);
        let circulo = <Circulo key={i} bgColor={colores[ran]} />;
        circulos.push(circulo);
    }
  return circulos;
}

class App extends Component
{
    constructor(props){
        super(props);
        this.state={cont:0};
    }
    foo=()=>{
        this.setState({cont:this.state.cont+1});
    }
    render() {
 
        return (
                <div onClick={this.foo} >
                <VerCirculo num="50"/>   
                </div>
                );
    }
}
export default App;