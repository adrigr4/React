import React, { Component } from "react";
import { connect } from "react-redux";
import { addArticle, updateArticle, resetArticles } from "../actions/index";
import {isEmpty} from 'lodash';
const mapDispatchToProps = {
    addArticle,updateArticle,resetArticles
}
const mapStateToProps = state => {
    return {article: state.article};
};
class ConnectedForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:"",
            edit:false
        };
    }

    handleChange = (event) => {  
        this.setState({[event.target.id]: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {title} = this.state;
        if(this.state.edit){
             this.props.updateArticle(title);
        } else{
           this.props.addArticle({title});  
        }
       
        this.setState({title: "",edit:false});
    }

    handleReset = (event) => {
        event.preventDefault();
        this.props.resetArticles();
    }

    static getDerivedStateFromProps(props, state) {
        if (!isEmpty(props.article) && !state.edit) {
            return {title: props.article.title,edit:true};
        } else {
            return state;
        }
    }

    render() {
        const title = this.state.title;
        return (
            <form onSubmit={this.handleSubmit} onReset={this.handleReset} className="mb-3">
                <div class="form-group">
                    <label>Título</label>
                    <input
                        type="text"
                        className="form-control mr-5"
                        id="title"
                        aria-describedby="emailHelp"
                        value={title}
                        onChange={this.handleChange}
                    />
                </div>
                <button className="btn btn-dark mr-2" type="submit">Guardar</button>
                <button className="btn btn-dark" type="reset">Reset</button>
            </form>
        );
    }
}

const Form = connect(
    mapStateToProps,
    mapDispatchToProps
)(ConnectedForm);

export default Form;