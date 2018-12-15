import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleIncrement = counter => {
    const newCounters = [...this.state.counters];
    const index = this.state.counters.indexOf(counter);
    newCounters[index] = { ...counter };
    newCounters[index].value++;
    this.setState({ counters: newCounters });
  };
  handleDecrement = counter => {
    const newCounters = [...this.state.counters];
    const index = this.state.counters.indexOf(counter);
    newCounters[index] = { ...counter };
    if (counter.value - 1 >= 0) newCounters[index].value--;
    this.setState({ counters: newCounters });
  };
  handleDelete = counterId => {
    const counter = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counter });
  };

  handleReset = () => {
    const newCounters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: newCounters });
  };
  getTotalQty = () => {
    let total = 0;
    this.state.counters.map(c => {
      total = total + c.value;
      return total;
    });
    return total;
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
          totalQty={this.getTotalQty()}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onDecrement={this.handleDecrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
