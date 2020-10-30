import React from "react";
import { render } from "react-dom";
import Button from "./Button";

class App extends React.Component {
  state = { counter: 0 };

  // This method is accessed by the child component <Button>
  // by handler, effectly managing a higher level
  incrementCouter = (event) => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  render() {
    return (
      <div>
        <Button onClick={this.incrementCouter} />
        <div>{this.state.counter}</div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
