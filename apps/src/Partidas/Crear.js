import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            nombre: "",
            fecha: "",
            dificultad: "",
            juego: "",
            creadorId: 8,
            creadores: []
        }
        this.changeInput = this.changeInput.bind(this);
    }
    componentDidMount() {
        this.getPlayers();
        if (this.state.id !== undefined) {
            this.getPartida(this.state.id);
        }
    }
    getPlayers = () => {
        fetch("https://localhost:44360/api/Jugadores")
            .then(response => response.json())
            .then(data => {
                this.setState({ creadores: data });
            });
    }
    getPartida = (id) => {
        fetch("https://localhost:44360/api/Partidas/" + id)
            .then(response => response.json())
            .then(data => {
                this.setState({ nombre: data.nombre, fecha: data.fecha, dificultad: data.dificultad, juego: data.juego, creadorId: data.creadorId });
            })
            .then(console.log(this.state))
    }
    POSTMethod = (partida) => {
        fetch("https://localhost:44360/api/Partidas", {
            method: 'POST',
            body: JSON.stringify(partida),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    PUTMethod = (partida, id) => {
        fetch("https://localhost:44360/api/Partidas/" + id, {
            method: 'PUT',
            body: JSON.stringify(partida),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(console.log(partida));
    }
    create = () => {
        if (this.state.id === undefined) {
            let partida = {
                nombre: this.state.nombre,
                fecha: this.state.fecha,
                dificultad: this.state.dificultad,
                juego: this.state.juego,
                creadorId: this.state.creadorId
            }
            this.POSTMethod(partida);
        } else {
            let partida = {
                id: this.state.id,
                nombre: this.state.nombre,
                fecha: this.state.fecha,
                dificultad: this.state.dificultad,
                juego: this.state.juego,
                creadorId: this.state.creadorId
            }
            this.PUTMethod(partida, this.state.id);
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
        const options = this.state.creadores.map((creador) => {
            return (<option key={creador.id} value={creador.id}>{creador.alias}</option>)
        });
        return (
            <div className="container">
                <h2>Nueva</h2>
                <h5>Partida</h5>
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
                                <label className="control-label">Fecha</label>
                                <input className="form-control" type="date" name="fecha" onChange={this.changeInput} value={this.state.fecha} />
                                <span className="text-danger"></span>
                            </div>
                            <div className="form-group">
                                <label className="control-label">Dificultad</label>
                                <input className="form-control" name="dificultad" onChange={this.changeInput} value={this.state.dificultad}></input>
                                <span className="text-danger"></span>
                            </div>
                            <div className="form-group">
                                <label className="control-label">Juego</label>
                                <input className="form-control" name="juego" onChange={this.changeInput} value={this.state.juego}></input>
                                <span className="text-danger"></span>
                            </div>
                            <div className="form-group">
                                <label className="control-label">Creador</label>
                                <select className="form-control" name="creadorId" onChange={this.changeInput} value={this.state.creadorId}>{options}</select>
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