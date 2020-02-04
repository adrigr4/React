import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser } from "../actions/index.js";
import UserCard from "./UserCard.js";

const mapStateToProps = state => {
    return { users: state.users };
};

const mapDispatchToProps = {
    getUser
}

class ConnectedUserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
            gender: "",
            nationality: ""
        }
    }

    handleNew = (event) => {
        event.preventDefault();
        this.props.getUser({ quantity: this.state.quantity, gender: this.state.gender, nationality: this.state.nationality });
    }

    handleEdit = (event) => {
        event.preventDefault();
        this.setState({ ...this.state, [event.target.id]: event.target.value });
    }

    handleGender = (gender) => {
        this.setState({ ...this.state, gender: gender })
    }

    handleSelect = (event) => {
        event.preventDefault();
        this.setState({...this.setState, nationality: event.target.value})
    }

    render() {
        let nationalities = ['AU', 'BR', 'CA', 'CH', 'DE', 'DK', 'ES', 'FI', 'FR', 'GB', 'IE', 'IR', 'NO', 'NL', 'NZ', 'TR', 'US'].map((el) => <option value={el} onChange={this.handleSelect}>{el}</option>)
        return (
            <>
            <div style={{ display: "flex", alignContent: "center", marginLeft: "550px", marginTop: "20px", marginBottom: "0px" }}>
                <button className="btn btn-primary mr-3" onClick={this.handleNew}>Add users </button>
                <input id="quantity" type="number" className="form-control mr-3" style={{ width: "200px" }} value={this.state.quantity} onChange={this.handleEdit}></input>
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-secondary" onClick={() => this.handleGender("male")}>Male</button>
                    <button type="button" class="btn btn-secondary" onClick={() => this.handleGender("female")}>Female</button>
                    <button type="button" class="btn btn-secondary" onClick={() => this.handleGender("")}>Both</button>
                </div>
            </div>

            <div style={{color: "white", marginBottom: "20px"}}>
                <br></br>
                Nationality:
            <select className="custom-select custom-select-sm ml-3" style={{width: "60px"}}>
                    {nationalities}
                </select>
            </div>
            </>
        );
    }
}
const Form = connect(mapStateToProps, mapDispatchToProps)(ConnectedUserForm);
export default Form;