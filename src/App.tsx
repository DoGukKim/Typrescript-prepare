import React from "react";
import Number from "./Number";
import { Form, Input } from "./Input";
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
        <Form>
          <Input />
        </Form>
        <Number count={counter} />
        <button onClick={this.add}>+ 1</button>
        <button onClick={this.min}>- 1</button>
      </div>
    );
  }
}

export default App;
