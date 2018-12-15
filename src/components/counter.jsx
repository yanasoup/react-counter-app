import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusSquare,
  faPlusCircle,
  faMinusCircle
} from "@fortawesome/free-solid-svg-icons";

library.add(faPlusSquare, faPlusCircle, faMinusCircle);

class Counter extends Component {
  /*constructor() {
    super(); // seperti parent::__construct() di php
    // akan membuat instance method handleIncrement baru yang bisa mengakses object this
    this.handleIncrement = this.handleIncrement.bind(this);
  }
    handleIncrement(Counter) {
    console.log("increment clicked ", Counter);
  }
  */
  // doHandleIncrement = params => {
  //   this.handleIncrement({ foo: nilai });
  // };

  render() {
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-dark btn-sm"
        >
          <FontAwesomeIcon icon="plus-circle" />
        </button>
        <button
          className="btn btn-info btn-sm m-2"
          onClick={() => this.props.onDecrement(this.props.counter)}
        >
          <FontAwesomeIcon icon="minus-circle" />
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-sm btn-danger m2"
        >
          Delete
        </button>
      </div>
    );
  }

  /** common function */
  formatCount() {
    return this.props.counter.value === 0 ? "zero" : this.props.counter.value;
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";

    return classes;
  }
}

export default Counter;
