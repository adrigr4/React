import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap';

function mapStateToProps(state) {
    return{
        count: state.count
    };
}
 
class Counter extends React.Component {
  //state = { count: 0 }
 
  increment = () => {
    this.props.dispatch({ type: "INCREMENT"})
  }
 
  decrement = () => {
    this.props.dispatch({ type: "DECREMENT"})
  }

  reset = () => {
    this.props.dispatch({ type: "RESET"})
  }
 
  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement} className="btn btn-dark" style={{width: "40px"}}> - </button>
          <span className="ml-3 mr-3" >{this.props.count}</span>
          <button onClick={this.increment} className="btn btn-dark" style={{width: "40px"}}>+</button>
          <button onClick={this.reset} className="btn btn-dark ml-3">Reset</button>
        </div>
      </div>
    )
  }
}
 
export default connect(mapStateToProps)(Counter);