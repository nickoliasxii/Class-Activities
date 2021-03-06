import React from "react";

class Counter extends React.Component {
  state = {
    count: 0
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1});
  }
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">Click Up!</div>
        <div className="panel-body text-center">
          <p>Click Count: {this.state.count}</p>
          <button className="btn btn-primary" onClick={this.handleIncrement}>
            Increment
          </button>
        </div>
      </div>
      <div className="panel panel-primary">
        <div className="panel-heading">Click Down!</div>
        <div className="panel-body text-center">
          <p>Click Count: {this.state.count}</p>
          <button className="btn btn-primary" onClick={this.handleDecrement}>
            Increment
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
