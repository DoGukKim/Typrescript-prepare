import React from "react";
import Number from "./Number";
import { Form, Input } from "./Input";
interface IState {
  counter: number;
  name: string;
}

class App extends React.Component<{}, IState> {
  state = {
    counter: 0,
    name: "",
  };
  onchange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    console.log(event.target);
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
    const { counter, name } = this.state;
    return (
      <div>
        <Form>
          <Input value={name} onchange={this.onchange} />
        </Form>
        <Number count={counter} />
        <button onClick={this.add}>+ 1</button>
        <button onClick={this.min}>- 1</button>
      </div>
    );
  }
}

export default App;
