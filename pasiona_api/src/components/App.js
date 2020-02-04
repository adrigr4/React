import React, { Component } from "react";
import UserList from './UserList';
import UserForm from './Form';
import CreateUser from './CreateUser';
import '../App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class App extends Component {

    render() {
        return (
            <div className="fondo">
                <Router>
                    <Navbar bg="dark" variant="ligth">
                            <img
                                src="https://pbs.twimg.com/profile_images/1105021443627196416/kJ5bSyDw_400x400.jpg"
                                width="40"
                                height="40"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />{' '}
                        <Nav className="mr-auto">
                            <Nav.Link href="/UserList" style={{color: "white", marginLeft: "15px"}}> Users</Nav.Link>
                            <Nav.Link href="/CreateUser" style={{color: "white", marginLeft: "10px"}}>New User</Nav.Link>
                        </Nav>
                    </Navbar>
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