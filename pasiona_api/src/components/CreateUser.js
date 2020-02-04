import React, { Component } from "react";
import { connect } from "react-redux";
import { postUser} from "../actions/index.js";

const mapStateToProps = state => {
    return { users: state.users };
};

const mapDispatchToProps = {
    postUser
}

class FormUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            apellido: "",
            correo: "",
            direccion: "",
            foto: ""
        }
    }
    changeInput = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
        console.log(this.state);
    }
    create = () =>  {
        let newUser = {
            FirstName: this.state.nombre,
            SecondName: this.state.apellido,
            Mail: this.state.correo,
            Direction: this.state.direccion,
            Picture: this.state.foto
        }
        this.props.postUser({newUser: newUser});
    }
    render() {
        return (
            <div className="createForm">
                <h5>New User</h5>
                <hr />
                <form>
                    <div className="text-danger"></div>
                    <div className="form-group">
                        <label className="control-label">Nombre</label>
                        <input className="form-control" name="nombre" onChange={this.changeInput} value={this.state.nombre} />
                        <span className="text-danger"></span>
                    </div>
                    <div className="form-group">
                        <label className="control-label">Apellido</label>
                        <input className="form-control" name="apellido" onChange={this.changeInput} value={this.state.apellido} />
                        <span className="text-danger"></span>
                    </div>
                    <div className="form-group">
                        <label className="control-label">Correo</label>
                        <input className="form-control" name="correo" onChange={this.changeInput} value={this.state.correo}></input>
                        <span className="text-danger"></span>
                    </div>
                    <div className="form-group">
                        <label className="control-label">Dirección</label>
                        <input className="form-control" name="direccion" onChange={this.changeInput} value={this.state.direccion}></input>
                        <span className="text-danger"></span>
                    </div>
                    <div className="form-group">
                        <label className="control-label">Foto de perfil</label>
                        <input className="form-control" name="foto" onChange={this.changeInput} value={this.state.foto}></input>
                        <span className="text-danger"></span>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-dark" onClick={this.create}>Crear</button>
                    </div>
                </form>
                <hr />
            </div>
        )
    }
}

const CreateUser = connect(mapStateToProps, mapDispatchToProps)(FormUser);
export default CreateUser;