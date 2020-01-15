import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            nombre: "",
            alias: "",
            correo: ""
        }
        this.changeInput = this.changeInput.bind(this);
    }
    componentDidMount() {
        if(this.state.id !== undefined){
            this.getPlayer(this.state.id);
        }        
    }
    getPlayer = (id) => {
        fetch("https://localhost:44360/api/Jugadores/" + id)
            .then(response => response.json())
            .then(data => {
                this.setState({ nombre: data.nombre });
                this.setState({ alias: data.alias });
                this.setState({ correo: data.correo });
            }).then(console.log(this.state));
    }
    POSTMethod = (player) => {
        fetch("https://localhost:44360/api/Jugadores", {
            method: 'POST',
            body: JSON.stringify(player),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    PUTMethod = (player, id) => {
        fetch("https://localhost:44360/api/Jugadores/" + id, {
            method: 'PUT',
            body: JSON.stringify(player),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    create = () => {
        if (this.state.id === undefined) {
            let player = {
                nombre: this.state.nombre,
                alias: this.state.alias,
                correo: this.state.correo
            }
            this.POSTMethod(player);
        } else {
            let player = {
                id: this.state.id,
                nombre: this.state.nombre,
                alias: this.state.alias,
                correo: this.state.correo
            }
            this.PUTMethod(player, this.state.id);
        }
    }
    async changeInput(event) {
        const { name, value } = event.target;
        await this.setState({
            [name]: value
        });
        console.log(this.state);
    }
    render() {
        return (
            <div className="container">
                <h2>Nuevo</h2>
                <h5>Jugador</h5>
                <hr />
                <div className="row">
                    <div className="col-md-4">
                        <form asp-action="Create">
                            <div className="text-danger"></div>
                            <div className="form-group">
                                <label className="control-label">Nombre</label>
                                <input className="form-control" name="nombre" onChange={this.changeInput} value={this.state.nombre} />
                                <span className="text-danger"></span>
                            </div>
                            <div className="form-group">
                                <label className="control-label">Alias</label>
                                <input className="form-control" name="alias" onChange={this.changeInput} value={this.state.alias} />
                                <span className="text-danger"></span>
                            </div>
                            <div className="form-group">
                                <label className="control-label">Correo</label>
                                <input className="form-control" name="correo" onChange={this.changeInput} value={this.state.correo}></input>
                                <span className="text-danger"></span>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary" onClick={this.create}>Crear</button>
                            </div>
                        </form>
                        <hr />
                    </div>
                </div>
            </div>
        )
    }
}

class App extends Component {
    render() {
        return (
            <Form id={this.props.id} />
        );
    }
};

export default App;