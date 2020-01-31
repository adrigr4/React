import React, { Component } from "react";
import { connect } from "react-redux";
import UserList from './UserList';
import UserForm from './UserForm';
import '../App.css';

class App extends Component {

    render() {
        return (
            <div className="fondo">
                <h1 style={{color: "white"}}>Users</h1>
                    <UserForm/>
                    <UserList/>
            </div>
        );
    }
}

export default App;