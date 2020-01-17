import React, { Component } from "react";
import { connect } from "react-redux";
import Balance from './Balance.js';
import Operations from "./Operations.js";
import Popup from './Popup';
import '../App.css';

const mapStateToProps = state => {
    return { message: state.message, alert: state.alert };
};

class ConnectApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: this.props.message,
            showPopup: this.props.alert,
            editando: false
        };
    }

    static getDerivedStateFromProps(props, state) {
        if (!state.showPopup && !state.editando) {
            return { showPopup: props.alert, msg: props.message, editando: false};
        } else {
            return { showPopup: state.showPopup, msg: props.message, editando: true};
        }
    }

    togglePopup = () => {
        this.setState({
            showPopup: false, 
            editando: true
        });
    }

    render() {
        return (
            <div className="fondo">
                <div className="atm">
                    <Balance />
                    <Operations />
                </div>
                {this.state.showPopup ?
                    <Popup
                        text={this.state.msg}
                        closePopup={this.togglePopup}
                    />
                    : null
                }
            </div>
        );
    }
}

const App = connect(
    mapStateToProps
)(ConnectApp);

export default App;