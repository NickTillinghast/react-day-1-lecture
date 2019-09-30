import React, { component } from "react";
import logo from "./logo.svg";
import "./App.css";

function Button(props) {
  return <button onClick={props.action}>{props.label}</button>;
}

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starting: "Hello World!",
      count: 0
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    // this.reset = this.reset.bind(this);
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    });
  }

  decrement() {
    this.setState({
      count: this.state.count - 1
    });
  }

  // reset() {
  //   this.setState({
  //     count: (this.state.count = 0)
  //   });
  // }

  render() {
    const { starting, count } = this.state;
    return (
      <div>
        <h1>{starting}</h1>
        <h2>{count}</h2>
        <Button label="increment" action={this.increment} />
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    );
  }
}

export default App;
