import React, { Component } from 'react';
import './App.css';

class Tabla extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numeros: [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
            size: 3
        };
    }

    createTable = (size) => {

        let table = [];
        let contKey = 0;
        for (let i = 0; i < size; i++) {
            let fila = [];
            for (let j = 0; j < size; j++) {
                fila.push(<td><Celda key={contKey} valor={this.state.numeros[i][j]} changeInput={this.changeInput} fila={i} columna={j} /></td>);
                contKey++;
            }
            fila.push(<td><Suma key={contKey} suma={this.getSum(this.state.numeros[i])} /></td>);
            contKey++;
            table.push(<tr>{fila}</tr>);
        }
        let fila = [];

        for (let i = 0; i < size; i++) {
            let nums = [];
            for (let j = 0; j < size; j++) {
                nums.push(this.state.numeros[j][i]);
            }
            fila.push(<td><Suma key={contKey} suma={this.getSum(nums)} /></td>);
            contKey++;
        }
        let nums = [];
        for (let i = 0; i < size; i++) {
            nums.push(this.state.numeros[i][i]);
        }
        fila.push(<td><Suma key={contKey} suma={this.getSum(nums)} /></td>);
        table.push(<tr>{fila}</tr>);
        return table;
    }

    changeNums = (size) => {
        const nums = this.state.numeros;
        if (size > this.state.size) {
            for (let i = 0; i < size - 1; i++) {
                nums[i].push(0);
            }
            let newFil = [];
            for (let j = 0; j < size; j++) {
                newFil.push(0);
            }
            nums.push(newFil);
        } else {
            for (let i = 0; i < size; i++) {
                nums[i].pop();
            }
            nums.pop();
        }

        console.log(nums);
        return nums;
    }

    changeInput = (valor, col, fil) => {
        const t = this.state.numeros;
        t[col][fil] = valor;
        this.setState({ numeros: t });
    }

    changeSize = (event) => {
        const { name, value } = event.target;
        this.setState({ numeros: this.changeNums(value) });
        this.setState({
            [name]: value
        });
    }

    getSum = (values) => {
        return values.reduce((a, b) => a + b, 0);
    }

    render() {
        var Style = {
            margin: 20
        };
        return (
            <div>
                <input type="number" style={Style} name="size" value={this.state.size} onChange={this.changeSize} min="1"></input>
                {this.createTable(this.state.size)}
            </div>
        )
    }
}

class Celda extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valor: this.props.valor
        };
    }
    changeInput = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        this.props.changeInput(parseInt(value), this.props.fila, this.props.columna);
    }
    render() {
        var Style = {
            height: 70,
            width: 70,
            fontSize: 20,
            textAlign: 'center'
        };
        return (
            <p><input type="number" style={Style} value={this.state.valor} name="valor" onChange={this.changeInput}></input></p>
        );
    }
}

class Suma extends Component {
    render() {
        var Style = {
            height: 70,
            width: 70,
            fontSize: 20,
            textAlign: 'center'
        };
        return (
            <input style={Style} value={this.props.suma}></input>
        );
    }
}

class App extends Component {
    render() {
        return (
            <div className="container">
                <Tabla />
            </div>
        );
    }
};
export default App;