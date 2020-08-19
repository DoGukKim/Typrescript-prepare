import React from "react";
import { count } from "console";

interface IState {
  counter: number;
}

class App extends React.Component<{}, IState> {
  state = {
    counter: 0,
  };
  add = () => {
    this.setState(prev => ({
      counter: prev.counter + 1,
    }));
  };
  min = () => {
    this.setState(prev => ({
      counter: prev.counter - 1,
    }));
  };
  render() {
    const { counter } = this.state;
    return (
      <div>
        <p>The Num is {counter}</p>
        <button onClick={this.add}>+ 1</button>
        <button onClick={this.min}>- 1</button>
      </div>
    );
  }
}

export default App;
