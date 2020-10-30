import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    }, () => (console.log(this.state)))
  }

  handleSubmit = event => {
    let username = this.state.username
    let password = this.state.password
    event.preventDefault()
    if (this.state.username !== "" && this.state.password !== "") {
      this.props.handleLogin({username, password})
    } else {
      alert("Please fill out username and password")
    }
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleChange} value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleChange} value={this.state.password} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
