import React from "react";
import List from './List';
import Form from "./Form";

const App = () => (
    <div className="container">
        <h2>Mensajes</h2>
        <Form/>
        <List/>
    </div>
);

export default App;