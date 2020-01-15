import React from 'react';
import Jugadores from './Jugadores/Jugadores.js';
import CrearJugador from './Jugadores/Crear';
import DetallesJugador from './Jugadores/Detalle.js';
import CrearPartida from './Partidas/Crear.js';
import DetallesPartida from './Partidas/Detalle.js';
import Partidas from './Partidas/Partidas.js';
import './App.css';
import Container from 'react-bootstrap/Container';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function App() {
  return (
    <div className="fondo">
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark mb-4">
          <Link to="/Jugadores"><button className="btn btn-primary mr-2">Jugadores</button></Link>
          <Link to="/Partidas"><button className="btn btn-primary mr-2">Partidas</button></Link>
        </nav>
        <Container>
          <Switch>
            <Route path="/Jugadores" >
              <Jugadores />
            </Route>
            <Route path="/Create" >
              <CrearJugador />
            </Route>
            <Route path="/Edit/:id" component={EditJugador} />
            <Route path="/Details/:id" component={DetailsJugador} />
            <Route path="/Partidas" >
              <Partidas />
            </Route>
            <Route path="/Crearpartida" >
              <CrearPartida />
            </Route>
            <Route path="/EditPartida/:id" component={EditPartida} />
            <Route path="/Detailspartida/:id" component={DetailsPartida} />
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

function EditJugador() {
  let { id } = useParams();
  return (
    <CrearJugador id={id} />
  );
}

function DetailsJugador() {
  let { id } = useParams();
  return (
    <DetallesJugador id={id} />
  );
}

function EditPartida() {
  let { id } = useParams();
  return (
    <CrearPartida id={id} />
  );
}

function DetailsPartida() {
  let { id } = useParams();
  return (
    <DetallesPartida id={id} />
  );
}


export default App;