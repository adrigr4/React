import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser, getAllUsers } from "../actions/index.js";

const mapStateToProps = state => {
    return { users: state.users };
};

const mapDispatchToProps = {
    getUser, getAllUsers
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
        this.props.getUser({ quantity: this.state.quantity});
    }

    handleEdit = (event) => {
        event.preventDefault();
        this.setState({ ...this.state, [event.target.id]: event.target.value });
    }

    getList = () => {
        this.props.getAllUsers();
    }

    render() {
        return (
            <div style={{ display: "flex", alignContent: "center", marginLeft: "600px", marginTop: "20px", marginBottom: "20px" }}>
                <button className="btn btn-dark mr-3" onClick={this.getList}>User List </button>
                <button className="btn btn-dark mr-3" onClick={this.handleNew}>Random Users </button>
                <input id="quantity" type="number" className="form-control mr-3" style={{ width: "200px" }} value={this.state.quantity} onChange={this.handleEdit} min={1}></input>
            </div>
        );
    }
}
const Form = connect(mapStateToProps, mapDispatchToProps)(ConnectedUserForm);
export default Form;