import React, { Component } from "react";
import { connect } from "react-redux";
import Balance from './Balance.js';
import Operations from "./Operations.js";
import Popup from './Popup';
import History from './History.js';
import '../App.css';

const mapStateToProps = state => {
    return { message: state.error, alert: state.alert };
};

class ConnectApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: this.props.message,
            showPopup: this.props.alert,
            cerrando: false
        };
    }

    static getDerivedStateFromProps(props, state) {
        if (!state.showPopup && !state.cerrando) {
            return { showPopup: props.alert, msg: props.message, cerrando: false };
        } else {
            return { showPopup: state.showPopup, msg: props.message, cerrando: false };
        }
    }

    togglePopup = () => {
        this.setState({
            showPopup: false,
            cerrando: true
        });
    }

    render() {
        return (
            <>
            <div className="fondo">
                <div className="atm">
                    <Balance />
                    <Operations />
                    <br></br>
                    <br></br>
                    <label style={{ color: "red", paddingLeft: "320px" }}>{this.state.msg}</label>
                </div>
                <History />
                {this.state.showPopup ? <Popup text={this.state.msg} closePopup={this.togglePopup} /> : null}
            </div>
            
            </>
        );
    }
}

const App = connect(
    mapStateToProps
)(ConnectApp);

export default App;