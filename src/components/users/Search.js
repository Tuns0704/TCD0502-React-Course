import React, { Component } from "react";

export class Search extends Component {
  state = {
    text: "",
  };

  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.text === "") {
      alert("Input must not be empty ...");
      return;
    }
    console.log(this.state.text);
    this.setState({
      text: "",
    });
  };
  render() {
    return (
      <div>
        <form className="form">
          <input
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
            className=""
            type="text"
          />
          <input
            onClick={this.handleSubmit}
            className="btn btn-dark btn-block"
            type="submit"
          />
        </form>
      </div>
    );
  }
}

export default Search;
