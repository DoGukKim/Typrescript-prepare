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
  onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
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
        <Form onFormSubmit={this.onFormSubmit}>
          <Input value={name} onchange={this.onchange} />
        </Form>
        <span>The Num is </span>
        <Number count={counter} />
        <button onClick={this.add}>+ 1</button>
        <button onClick={this.min}>- 1</button>
      </div>
    );
  }
}

export default App;
