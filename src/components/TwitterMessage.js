import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: "",
      remChars: 280
    };
  }
  
  handleTweetChange = event => {
    this.setState({
      tweet: event.target.value,
      remChars: this.props.maxChars - event.target.value.length
    }, () => (console.log(this.state)))
  }
  
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleTweetChange(event)} value={this.state.tweet} />
        <p>Remaining Characters: {this.state.remChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
 