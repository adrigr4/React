import React, { Component } from "react";
import { connect } from "react-redux";
import { moneyIn, moneyOut } from "../actions/index";
import moneyGif from '../img/money1.gif';

const mapStateToProps = state => {
    return { retired: state.retired };
};
const mapDispatchToProps = {
    moneyIn, moneyOut
}
class ConnectedOperations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 0,
            imagen: {display: "none"} 
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleIn = (event) => {
        event.preventDefault();
        this.props.moneyIn(this.state.quantity);  
        this.setState({quantity: 0, imagen: {display: "inline"}});
        setTimeout(this.imageOut, 1000);
    }

    handleOut = (event) => {
        event.preventDefault();
        this.props.moneyOut(this.state.quantity);  
        this.setState({quantity: 0});
    }

    imageOut = () => {
        this.setState({quantity: this.state.quantity, imagen: {display: "none"}});
    }

    render() {
        return (
            <>
                <h5>Cantidad:
                    <input
                        type="number"
                        className="ml-3"
                        value={this.state.quantity}
                        id="quantity"
                        style={{ flex: 1, textAlign: 'center'}}
                        onChange={this.handleChange} 
                        min={0}
                    /> €
                    <label 
                        className="ml-5">Retirado: 
                        <input 
                        disabled={true}
                        value={(this.props.retired).toLocaleString('de-DE')}
                        style={{ marginLeft: "30px", textAlign: 'center', backgroundColor: "#EFED65", color: "black" , width: "150px"}} 
                    />
                    €
                    </label>
                </h5>
                <button  style={{marginLeft: "175px", paddingLeft: "40px", paddingRight: "40px", marginTop: "40px"}} className="btn btn-primary" onClick={this.handleIn}>Hacer ingreso</button>
                <button style={{marginLeft: "40px", paddingLeft: "40px", paddingRight: "40px", marginTop: "40px"}} className="btn btn-primary" onClick={this.handleOut}>Retirar dinero</button>
                <img src={moneyGif} className="moneyGif" style={this.state.imagen}></img>
            </>
        );
    }
}

const Operations = connect(mapStateToProps, mapDispatchToProps)(ConnectedOperations);

export default Operations;