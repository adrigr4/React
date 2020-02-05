import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteUser } from "../actions/index.js";

const mapStateToProps = state => {
    return { users: state.users };
};

const mapDispatchToProps = {
    deleteUser
}

class ConnectedUserCard extends Component {
    getUserInfo = (info) => {
        const userInfo = {
            id: info.id,
            name: info.firstName + " " + info.secondName,
            picture: info.picture,
            email: info.mail,
            direction: info.direction
        }
        console.log(userInfo);
        return userInfo;
    }

    handleEdit = (event) => {
        
    }

    handleDelete = (id) => {
        this.props.deleteUser({id: id});
        this.props.delete();
    }

    render() {
        const user = this.getUserInfo(this.props.info)
        return (
            <div className="card" style={{ width: "15%", float: "left", marginRight: "10px", height: "370px", marginBottom: "10px"}}>
                <img style={{ height: "170px" }} className="card-img-top" src={user.picture} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                    <p className="card-text">{user.email} <br /> {user.direction}</p>
                    <p className="card-text"></p>
                    <button className="btn btn-primary" onClick={this.handleEdit} style={{ position: "absolute", bottom: "5px", left: "45px" }}>Editar</button>
                    <button className="btn btn-danger" onClick={() => this.handleDelete(user.id)} style={{ position: "absolute", bottom: "5px", left: "115px" }}>Borrar</button>
                </div>
            </div>
        );
    }
}

const UserCard = connect(mapStateToProps, mapDispatchToProps)(ConnectedUserCard);
export default UserCard;