import React, { Component } from 'react';

class Partidas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            jugadoresPartida: [],
            partidas: [],
            partidaId: 1
        }
        this.changeInput = this.changeInput.bind(this);
    }
    componentDidMount() {
        fetch("https://localhost:44360/api/JugadorPartidas/Partidas/" + this.state.id)
            .then(response => response.json())
            .then(data => {
                this.setState({ jugadoresPartida: data });
            })
            .then(fetch("https://localhost:44360/api/Partidas")
                .then(response => response.json())
                .then(data => {
                    this.setState({ partidas: data });
                }))
    }
    async changeInput(event) {
        const { name, value } = event.target;
        await this.setState({
            [name]: value
        });
        console.log(this.state);
    }
    unirsePartida = () => {
        let JugadorPartida = {
            jugadorId: this.state.id,
            partidaId: this.state.partidaId
        }
        fetch("https://localhost:44360/api/JugadorPartidas", {
            method: 'POST',
            body: JSON.stringify(JugadorPartida),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(data => console.log(data));
    }
    render() {
        const options = this.state.partidas.map((partida) => {
            return (<option key={partida.id} value={partida.id}>{partida.nombre}</option>)
        });
        const partidas = this.state.jugadoresPartida.map((jp) => {
            return (<li className="ml-3">{jp.nombre}</li>)
        })
        return (
            <>
                <br></br>
                <h5>Partidas en juego</h5>
                <hr />
                {partidas}
                <hr />
                <br></br>
                <h5>Unirse a la partida</h5>
                <hr/>
                <form>
                    <select className="form-control w-25 mb-2 ml-2" name="partidaId" onChange={this.changeInput} value={this.state.partidaId}>{options}</select>
                    <button className="btn btn-secondary mr-2 ml-2" onClick={this.unirsePartida}>Unirse a partida</button>
                </form>
                <hr />
            </>
        )
    }
}

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            nombre: "",
            alias: "",
            correo: "",
            partidas: []
        }
    }
    componentDidMount() {
        fetch("https://localhost:44360/api/Jugadores/" + this.state.id)
            .then(response => response.json())
            .then(data => {
                this.setState({ nombre: data.nombre, alias: data.alias, correo: data.correo });
            })
            .then(fetch("https://localhost:44360/api/Partidas")
                .then(response => response.json())
                .then(data => {
                    this.setState({ partidas: data });
                }))
    }
    render() {
        return (
            <>
                <h2>Perfil</h2>
                <div>
                    <h5>Jugador</h5>
                    <hr />
                    <dl className="dl-horizontal">
                        <dt className="col-sm-3">Nombre</dt>
                        <dd className="col-sm-9">{this.state.nombre}</dd>

                        <dt className="col-sm-3">Alias</dt>
                        <dd className="col-sm-9">{this.state.alias}</dd>

                        <dt className="col-sm-3">Correo</dt>
                        <dd className="col-sm-9">{this.state.correo}</dd>
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
                <Partidas id={this.props.id} />
            </>
        );
    }
};

export default App;