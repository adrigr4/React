import React, { Component } from "react";
import { connect } from "react-redux";
import { addArticle, resetArticles } from "../actions/index";

const mapDispatchToProps = {
    addArticle, resetArticles
}

class ConnectedForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ""
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { title } = this.state;
        this.props.addArticle({ title });
        this.setState({ title: "" });
    }

    handleReset = (event) => {
        event.preventDefault();
        this.props.resetArticles();
    }

    render() {
        const { title } = this.state;
        return (

            <form onSubmit={this.handleSubmit} onReset={this.handleReset} className="mb-3">
                <div class="form-group">
                    <label>Title</label>
                    <input
                        type="text"
                        className="form-control mr-5"
                        id="title"
                        aria-describedby="emailHelp"
                        placeholder="Enter title"
                        value={title}
                        onChange={this.handleChange}
                    />
                </div>
                <button className="btn btn-dark mr-2" type="submit">SAVE</button>
                <button className="btn btn-dark" type="reset">RESET</button>
            </form>

        );
    }
}

const Form = connect(
    null,
    mapDispatchToProps
)(ConnectedForm);

export default Form;