import React, { Component } from "react";
import { connect } from "react-redux";

class UserCard extends Component {
    constructor(props) {
        super(props);
    }

    getUserInfo = (info) => {
        /*const userInfo = {
            name: info.name.first + " " + info.name.last,
            picture: info.picture.large,
            email: info.email,
            direction: info.location.street.number + " " + info.location.street.name + ", " + info.location.city + ", " + info.location.state
        }*/
        const userInfo = {
            name: info.firstName + " " + info.secondName,
            picture: info.picture,
            email: info.mail,
            direction: info.direction
        }
        return userInfo;
    }

    render() {
        const user = this.getUserInfo(this.props.info)
        return (
            <div className="card" style={{ width: "230px", height: "270px", float: "left", marginRight: "10px" , marginTop: "10px"}}>
                <img className="card-img-top" src={user.picture} style={{ width: "230px", height: "170px" }} />
                <div style={{ textAlign: "left" , paddingTop: "10px", paddingLeft: "10px", paddingBottom: "0px"}}>
                    <h4 style={{ fontSize: "17px" }}>{user.name}</h4>
                    <label style={{ fontSize: "13px" }}>{user.email} <p style={{ fontSize: "13px" }}>{user.direction}</p></label>
                </div>
            </div>
        );
    }
}

export default UserCard;