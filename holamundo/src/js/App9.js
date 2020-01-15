import React, { Component } from 'react';
import Games from './Games';
import Create from './Create';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    Redirect
} from "react-router-dom";
import Container from 'react-bootstrap/Container';

export default function App() {
    return (
        <Router>
            <Container>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to="/Games"><button className="btn btn-primary mr-2">Juegos</button></Link>
                    <Link to="/Create"><button className="btn btn-success">Nuevo</button></Link>
                </nav>
                <Switch>
                    <Route path="/Games" >
                        <Games />
                    </Route>
                    <Route path="/Create" >
                        <Create />
                    </Route>
                    <Route path="/Edit/:id" component={Edit} />
                </Switch>
            </Container>
        </Router>
    );
}

function Edit() {
    let { id } = useParams();
    return (
        <Create id={id} />
    );
}