import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
  state = { counter: 0 };

  componentDidMount() {
    // This is custom prop passed on the Button
    console.log(this.props);
  }

  handleClick = (event) => {
    console.log("click:", event);
    this.setState({
      counter: this.state.counter + 1
    });
    // call the onClick <Button> handler
    this.props.onClick(event);
  };

  render() {
    console.log("render() props", this.props);

    return (
      <button onClick={this.handleClick} className="button">
        Click Me #{this.state.counter}
      </button>
    );
  }
}

export default Button;
