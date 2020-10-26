import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
      remainingChars: 280
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value,
      remainingChars: (280 - event.target.value.length)
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.message}
          onChange={event => this.handleChange(event)}
        />
        <h1>{this.state.remainingChars}</h1>
      </div>
    );
  }
}

export default TwitterMessage;
