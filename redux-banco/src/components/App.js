import React, { Component } from "react";
import Balance from './Balance.js';
import Operations from "./Operations.js";
import Popup from './Popup';
import '../App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { showPopup: false };
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    render() {
        return (
            <div className="fondo">
                <div className="atm">
                    <Balance />
                    <Operations />
                </div>
                <button onClick={this.togglePopup.bind(this)}> Click To Launch Popup</button>

                {this.state.showPopup ?
                    <Popup
                        text='Límite Superado'
                        closePopup={this.togglePopup.bind(this)}
                    />
                    : null
                }
            </div>
        );
    }
}

export default App;