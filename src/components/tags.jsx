import React, { Component } from "react";
class Tags extends Component {
  state = {};
  render() {
    return (
      <div>
        {this.renderTags()}
        {this.renderPersons()}
      </div>
    );
  }

  renderPersons() {
    /* conditional rendering */
    if (this.state.persons.length === 0)
      return <p className="badge badge-warning">No Person in list</p>;

    return (
      <select className="form-control">
        {this.state.persons.map(person => (
          <option key={person.id} value={person.id}>
            {person.nama}
          </option>
        ))}
      </select>
    );
  }
  renderTags() {
    /* conditional rendering */
    if (this.state.tags.length === 0)
      return <p className="badge badge-warning">List is empty</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
}

export default Tags;
