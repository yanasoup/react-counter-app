import React, { Component } from "react";

const Navbar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Total Item :
        <span className="badge badge-pill badge-secondary m-2">
          {props.totalCounters}
        </span>
        Total Qty :
        <span className="badge badge-pill badge-secondary m-2">
          {props.totalQty}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
