import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllUsers, deleteUser } from "../actions/index.js";
import UserCard from "./UserCard.js";

const mapStateToProps = state => {
    return { users: state.users };
};

const mapDispatchToProps = {
    getAllUsers, deleteUser
}

class ConnectedUserList extends Component {

    delete = () => {
        this.props.getAllUsers();
    }

    render() {
        const users = this.props.users;
        console.log(users);
        return (<ul>
            {users.map((user) => (
                <UserCard info={user} delete={this.delete}/>
            ))}
        </ul>
        );
    }
}
const UserList = connect(mapStateToProps, mapDispatchToProps)(ConnectedUserList);
export default UserList;