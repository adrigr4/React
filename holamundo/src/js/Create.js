import React, { Component } from 'react';

class FormGames extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            titulo: "",
            precio: 0,
            categoryId: 1,
            categories: []
        }
    }
    componentDidMount() {
        fetch("https://localhost:44358/api/Categories")
            .then(response => response.json())
            .then(data => {
                this.setState({ categories: data });
            }).then(
                fetch("https://localhost:44358/api/Games/" + this.state.id)
                    .then(response => response.json())
                    .then(data => {
                        this.setState({ titulo: data.title });
                        this.setState({ precio: data.price });
                        this.setState({ categoryId: data.categoryId });
                    })
            )
    }
    create = () => {
        console.log(this.state.titulo + " " + this.state.precio + "" + this.state.categoryId);
        let game = {
            id: this.state.id,
            title: this.state.titulo,
            price: this.state.precio,
            categoryId: this.state.categoryId
        }
        if (this.state.id === undefined) {
            fetch("https://localhost:44358/api/Games", {
                method: 'POST',
                body: JSON.stringify(game),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        } else {
            fetch("https://localhost:44358/api/Games/" + this.state.id, {
                method: 'PUT',
                body: JSON.stringify(game),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }

    }
    changeInput = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    render() {
        const filas = this.state.categories.map((category) => {
            return (<option key={category.id} value={category.id}>{category.name}</option>)
        });
        return (
            <div className="container">
                <h2>Nuevo</h2>
                <h5>Juego</h5>
                <hr />
                <div className="row">
                    <div class="col-md-4">
                        <form asp-action="Create">
                            <div class="text-danger"></div>
                            <div class="form-group">
                                <label class="control-label">Título</label>
                                <input class="form-control" name="titulo" onChange={this.changeInput} value={this.state.titulo} />
                                <span class="text-danger"></span>
                            </div>
                            <div class="form-group">
                                <label class="control-label">Precio</label>
                                <input class="form-control" name="precio" onChange={this.changeInput} value={this.state.precio} type="number" />
                                <span class="text-danger"></span>
                            </div>
                            <div class="form-group">
                                <label class="control-label">Categoría</label>
                                <select class="form-control" name="categoryId" onChange={this.changeInput} value={this.state.categoryId}>{filas}</select>
                            </div>
                            <div class="form-group">
                                <button class="btn btn-primary" onClick={this.create}>Crear</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

class App extends Component {
    render() {
        return (
            <FormGames id={this.props.id} />
        );
    }
};

export default App;
