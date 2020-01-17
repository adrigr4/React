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
                <h2 style={{textAlign: "center"}}>Bienvenido a tu banco</h2>
                <br></br>
                <br></br>
                <h5>Saldo: 
                    <input 
                        type="number" 
                        disabled="true" 
                        className="ml-5" 
                        value={this.props.balance} 
                        style={{ flex: 1, textAlign: 'center' }} 
                    /> € 
                    <label 
                        className="ml-5">Pendiente de ingreso: (<label style={{ color: 'green' }}>{this.props.saved}€</label>)
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