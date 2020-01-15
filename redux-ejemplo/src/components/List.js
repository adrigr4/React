import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteArticle, editArticle } from "../actions/index.js";

const mapStateToProps = state => {
    return { articles: state.articles };
};

const mapDispatchToProps = {
    deleteArticle, editArticle
}

class ConnectedList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            articles: this.props.articles
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value })
    }

    handleEdit = (id) => {
        this.setState({title: "prueba"});
        this.props.editArticle({ title: this.state.title, id: id })
    }

    render() {
        const articles = this.props.articles;
        return (<ul>
            {articles.map((el) => (
                <li><label key={el.id}><input type="text" id={el.id} value={el.title} onChange={this.handleChange}/></label>
                    <button className="btn btn-primary ml-3" onClick={() => this.handleEdit(el.id)}>EDIT</button>
                    <button className="btn btn-danger ml-1" onClick={() => this.props.deleteArticle(el.id)}>DELETE</button>
                </li>
            ))}
        </ul>);
    }
}
const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
export default List;