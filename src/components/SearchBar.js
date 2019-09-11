import React, { Component } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
// import API from "../utils/API";
import styled from "styled-components";

const FormWrapper = styled(FormGroup)`
  position: relative;
  span {
    color: red;
    font-size: 24px;
    font-weight: 700;
    position: absolute;
    right: 10px;
    top: -2px;
    :hover {
      cursor: pointer;
      color: darkred;
    }
  }
`;

class SearchBar extends Component {
  state = {
    term: ""
  };

  handleInputChange = event => {
    // Update State value for 'term'
    this.setState({ term: event.target.value });
    // If we wanted to use "this.state.value" in the parens below instead,
    // we can optionally add a callback to this.setState and trigger the code
    // below inside it, thus getting access to the updated value of "this.state.term"
    this.props.searchYouTube(event.target.value);
  };

  render() {
    return (
      <Form onSubmit={event => event.preventDefault()}>
        <FormWrapper>
          <Label for="youtubeSearch" hidden>
            Search:
          </Label>
          <Input
            type="text"
            name="youtubeSearch"
            id="youtubeSearch"
            placeholder="Classic WoW"
            value={this.state.term}
            onChange={this.handleInputChange}
          />
          <span onClick={() => this.setState({ term: "" })}>x</span>
        </FormWrapper>
      </Form>
    );
  }
}

export default SearchBar;
