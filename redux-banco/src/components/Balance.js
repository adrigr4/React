import React, { Component } from "react";
import { connect } from "react-redux";
const mapStateToProps = state => {
    return { balance: state.balance, saved: state.saved };
};
class ConnectedBalance extends Component {
    constructor(props) {
        super(props);
    }

    handleChange = (event) => {
    }

    render() {
        return (
            <>
                <h2 style={{textAlign: "center"}}>Banco</h2>
                <br></br>
                <br></br>
                <h5>Saldo: 
                    <input 
                        type="number" 
                        disabled="true" 
                        className="ml-5" 
                        value={this.props.balance} 
                        style={{ flex: 1, textAlign: 'center'}} 
                    /> € 
                    <label 
                        className="ml-5">Pendiente: 
                        <input 
                        disabled="true" 
                        className="ml-3" 
                        value={this.props.saved} 
                        style={{ textAlign: 'center', backgroundColor: "#8CE764", color: "black" , width: "150px"}} 
                    />
                    €
                    </label>
                </h5>
                <br></br>
            </>
        );
    }
}

const Balance = connect(
    mapStateToProps
)(ConnectedBalance);

export default Balance;