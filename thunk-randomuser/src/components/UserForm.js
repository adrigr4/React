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
            quantity: 1
        }
    }

    handleNew = (event) => {
        event.preventDefault();
        this.props.getUser(this.state.quantity);
    }

    handleEdit = (event) => {
        event.preventDefault();
        this.setState({ [event.target.id]: event.target.value });
    }

    render() {

        return (
            <div style={{ display: "flex", alignContent: "center", marginLeft: "600px", marginTop: "20px", marginBottom: "20px" }}>
                <button className="btn btn-primary mr-3" onClick={this.handleNew}>Add users </button>
                <input id="quantity" type="number" className="form-control mr-3" style={{ width: "200px" }} value={this.state.quantity} onChange={this.handleEdit}></input>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="gender" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Gender
                    </button>
                    <div className="dropdown-menu" aria-labelledby="gender">
                        <p className="dropdown-item" >Male</p>
                        <p className="dropdown-item" >Female</p>
                        <p className="dropdown-item" >All</p>
                    </div>
                </div>
            </div>
        );
    }
}
const Form = connect(mapStateToProps, mapDispatchToProps)(ConnectedUserForm);
export default Form;