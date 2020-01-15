import React, { Component } from 'react';

class Players extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            jugadoresPartida: [],
            jugadores: [],
            jugadorId: 1
        }
        this.changeInput = this.changeInput.bind(this);
    }
    componentDidMount() {
        fetch("https://localhost:44360/api/JugadorPartidas/Jugadores/" + this.state.id)
            .then(response => response.json())
            .then(data => {
                this.setState({ jugadoresPartida: data });
            })
            .then(fetch("https://localhost:44360/api/Jugadores/")
                .then(response => response.json())
                .then(data => {
                    this.setState({ jugadores: data });
                })
            );
    }
    unirsePartida = () => {
        let JugadorPartida = {
            jugadorId: this.state.jugadorId,
            partidaId: this.state.id
        }
        console.log(JugadorPartida);
        fetch("https://localhost:44360/api/JugadorPartidas", {
            method: 'POST',
            body: JSON.stringify(JugadorPartida),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(data => console.log(data));
    }
    async changeInput(event) {
        const { name, value } = event.target;
        await this.setState({
            [name]: value
        });
        console.log(this.state);
    }
    render() {
        const options = this.state.jugadores.map((jugador) => {
            return (<option key={jugador.id} value={jugador.id}>{jugador.alias}</option>)
        });
        const players = this.state.jugadoresPartida.map((jp) => {
            return (<><li key={jp.id} className="ml-3">{jp.alias}</li></>)
        });
        return (
            <>
                <br></br>
                <h5>Participantes</h5>
                <hr />
                {players}
                <hr />
                <br></br>
                <h5>Agregar a la partida</h5>
                <hr />
                <form>
                    <select className="form-control w-25 mb-2 ml-2" name="jugadorId" onChange={this.changeInput} value={this.state.jugadorId}>{options}</select>
                    <button className="btn btn-secondary mr-2 ml-2" onClick={this.unirsePartida}>Agregar</button>
                </form>
                <hr />
            </>
        );
    }
}

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            nombre: "",
            fecha: "",
            dificultad: "",
            juego: "",
            creadorId: "",
            creador: ""
        }
    }
    async componentDidMount() {
        await fetch("https://localhost:44360/api/Partidas/" + this.state.id)
            .then(response => response.json())
            .then(data => {
                this.setState({ nombre: data.nombre, fecha: data.fecha, dificultad: data.dificultad, juego: data.juego, creadorId: data.creadorId });
            });
        this.getCreador(this.state.creadorId);
    }
    getCreador = (id) => {
        fetch("https://localhost:44360/api/Jugadores/" + id)
            .then(response => response.json())
            .then(data => { this.setState({ creador: data.alias }) });
        console.log(this.state.creador);
    }
    render() {

        return (
            <>
                <h2>Información</h2>
                <div>
                    <h5>Partida</h5>
                    <hr />
                    <dl className="dl-horizontal">
                        <dt className="col-sm-3">Nombre</dt>
                        <dd className="col-sm-9">{this.state.nombre}</dd>

                        <dt className="col-sm-3">Fecha</dt>
                        <dd className="col-sm-9">{this.state.fecha}</dd>

                        <dt className="col-sm-3">Dificultad</dt>
                        <dd className="col-sm-9">{this.state.dificultad}</dd>

                        <dt className="col-sm-3">Juego</dt>
                        <dd className="col-sm-9">{this.state.juego}</dd>

                        <dt className="col-sm-3">Creador</dt>
                        <dd className="col-sm-9">{this.state.creador}</dd>
                    </dl>
                </div>
            </>
        );
    }
}

class App extends Component {
    render() {
        return (
            <>
                <Form id={this.props.id} />
                <Players id={this.props.id} />
            </>
        );
    }
};

export default App;