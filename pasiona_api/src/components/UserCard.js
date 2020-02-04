import React, { Component } from "react";

class UserCard extends Component {
    getUserInfo = (info) => {
        const userInfo = {
            name: info.firstName + " " + info.secondName,
            picture: info.picture,
            email: info.mail,
            direction: info.direction
        }
        return userInfo;
    }

    handleEdit = (event) => {

    }

    handleDelete = (event) => {

    }

    render() {
        const user = this.getUserInfo(this.props.info)
        return (
            <div className="card" style={{width: "15%", float: "left", marginRight: "10px", height: "360px"}}>
                <img style={{height: "170px"}} className="card-img-top" src={user.picture} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                    <p className="card-text">{user.email}</p>
                    <p className="card-text">{user.direction}</p>
                    <button className="btn btn-primary" onClick={this.handleEdit} style={{position: "absolute", bottom: "5px", left: "45px"}}>Editar</button>
                    <button className="btn btn-danger" onClick={this.handleDelete} style={{position: "absolute", bottom: "5px", left: "115px"}}>Borrar</button>
                </div>
          </div>
        );
    }
}

export default UserCard;