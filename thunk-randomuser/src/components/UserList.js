import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser } from "../actions/index.js";
import UserCard from "./UserCard.js";

const mapStateToProps = state => {
    return { users: state.users };
};

const mapDispatchToProps = {
    getUser
}

class ConnectedUserList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUser(1);
    }

    render() {
                
        const users = this.props.users;
        console.log(users);
        return (<ul>
            {users.map((user) => (
                <UserCard info={user} />
            ))}
        </ul>
        );
    }
}
const UserList = connect(mapStateToProps, mapDispatchToProps)(ConnectedUserList);
export default UserList;