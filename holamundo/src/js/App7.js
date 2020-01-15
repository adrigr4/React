import React, { Component } from 'react';
import '../App.css';

class Usuario extends Component {
    render() {
        return (
            <div className="card">
                <img src={this.props.image} ></img>
                <p>{this.props.name}</p>
            </div>
        )
    }
}

class Usuarios extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuarios: []
        }
    }

    componentDidMount() {
        fetch("https://randomuser.me/api?results=3")
            .then(response => response.json())
            .then(data => {
                this.setState({ usuarios: data.results });
                console.log(data.results);
            })
    }
    render() {
        const users = this.state.usuarios.map((user, index) => {
            return (<Usuario key={index} name={user.name.first + " " + user.name.last} image={user.picture.large} />)
        })
        let usersStyle = {
            display: "inline-block"
        }
        return (
            <div style={usersStyle}>
                {users}
            </div>
        )
    }
}

class App extends Component {
    render() {
        return (
            <div className="App-header">
            <Usuarios />
            <Usuarios />
            <Usuarios />
            </div>
        );
    }
};
export default App;