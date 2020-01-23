import React, { Component } from "react";
import { connect } from "react-redux";
import '../App.css';
const mapStateToProps = state => {
    return { movements: state.messages };
};
class ConnectedHistory extends Component {

    render() {
        let movs = this.props.movements.map((move) => 
        <li><label className="mr-5">{move.time}</label><label className="ml-3">{move.money}</label><label className="ml-5">{move.action}</label></li>).slice(-9);
        return (
            <div className="history">
                <h5 style={{ textAlign: "center" }}>Movimientos </h5>
                <ul style={{listStyle: "none"}}> {movs} </ul>
            </ div>
        );
    }
}

const History = connect(
    mapStateToProps
)(ConnectedHistory);

export default History;