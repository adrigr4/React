import React, { Component } from "react";
import { connect } from "react-redux";
const mapStateToProps = state => {
    return { balance: state.balance, saved: state.pending };
};
class ConnectedBalance extends Component {

    render() {
        return (
            <>
                <h2 style={{textAlign: "center"}}>Banco</h2>
                <br></br>
                <br></br>
                <h5>Saldo: 
                    <input 
                        type="number" 
                        disabled={true}
                        className="ml-5" 
                        value={(this.props.balance).toLocaleString('de-DE')} 
                        style={{ flex: 1, textAlign: 'center'}} 
                    /> € 
                    <label 
                        className="ml-5">Pendiente: 
                        <input 
                        disabled={true}
                        className="ml-3" 
                        value={(this.props.saved).toLocaleString('de-DE')} 
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