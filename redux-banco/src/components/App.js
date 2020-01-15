import React from "react";

const App = () => (
    <div className="container">
        <h2>Cuenta bancaria</h2>
        <br></br>
        <br></br>
        <h5>Saldo: </h5>
        <br></br>
        <h5>Cantidad: <input type="number" value="0" /></h5>
        <button className="btn btn-primary ml-3">Hacer ingreso</button>
    </div>
);

export default App;