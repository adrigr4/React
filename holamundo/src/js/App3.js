import React, { Component } from 'react';

class Square extends React.Component {
    render() {
        var squareStyle = {
            height: 150,
            backgroundColor: this.props.color
        };
        return (
                <div style={squareStyle}>
                </div>
                );
    }
}

    class Label extends Component {
        constructor(props) {
            super(props);
            this.state = {
                color: this.props.color
            };
        }
        cambio = (event) => {
            const {name, value} = event.target;
            this.setState({
                [name]: value
            })
            this.props.cambiaColor(value);
        }
        render() {
            var labelStyle = {
                fontFamily: "sans-serif",
                fontWeight: "bold",
                padding: 11,
                margin: 0,
                width: 200
            };
            return (
                    <div>
                        <input type="text" name="color" value={this.state.color} onChange={this.cambio} style={labelStyle}/>
                    </div>
                    );
        }
    }


class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "red"
        };
    }
      isColor = (strColor) => {
        const s = new Option().style;
        s.color = strColor;
        return s.color !== '';
    }
 
    shouldComponentUpdate(nextProps, nextState) {
        return this.isColor(nextState.color);
    }
 
    cambiaColor = (color) => {
         this.setState({color: color});
    }
    render() {
        var cardStyle = {
            height: 200,
            width: 200,
            padding: 0,
            backgroundColor: this.color,
            boxShadow: "0px 0px 5px #666"
        };
        return (
                <div style={cardStyle}>
                    <Square color={this.state.color}/>    
                    <Label color={this.state.color} cambiaColor={this.cambiaColor}/>
                </div>
                );
    }
}

class App extends React.Component
{
    render() {
        return(
        <Card/>
        )
    }
}

export default App;