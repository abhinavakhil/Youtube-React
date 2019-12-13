import React from "react";

import { Paper, TextField } from "@material-ui/core";

class SearchBar extends React.Component {
  state = {
    searchTerm: ""
  };

  handleChange = event => {
    this.setState({ searchTerm: event.target.value });
    console.log(event.target.value);
  };

  handleSubmit = event => {
    //   destructing
    const { searchTerm } = this.state;
    // here it will take searchTerm value from state
    const { onFormSubmit } = this.props;

    onFormSubmit(searchTerm);
    // for stopping browser to load on entering values to form
    event.preventDefault();
  };

  render() {
    return (
      <Paper
        elevation={6}
        style={{
          padding: "25px",
          background: "red"
        }}
      >
        <form onSubmit={this.handleSubmit}>
          <TextField
            fullWidth
            label="Search.."
            onChange={this.handleChange}
            id="outlined-basic"
            variant="outlined"
            style={{ background: "#fff" }}
          ></TextField>
        </form>
      </Paper>
    );
  }
}

export default SearchBar;
