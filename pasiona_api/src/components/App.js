import React, { Component } from "react";
import { connect } from "react-redux";
import UserList from './UserList';
import UserForm from './Form';
import CreateUser from './CreateUser';
import '../App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

class App extends Component {

    render() {
        return (
            <div className="fondo">
                <Router>
                    <h1 style={{ color: "white", marginTop: "20px" }}>Pasiona</h1>
                    <Link to="/UserList"><button className="btn btn-dark mr-2">Users</button></Link>
                    <Link to="/CreateUser"><button className="btn btn-dark mr-2">New User</button></Link>
                    <Switch>
                        <Route path="/UserList" >
                            <UserForm />
                            <UserList />
                        </Route>
                        <Route path="/CreateUser" >
                            <CreateUser />
                        </Route>
                    </Switch>
                </Router>

            </div>
        );
    }
}

export default App;