import React, { Component } from "react";
class User extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      username: "",
      email: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  initialState = () => {
    return {
      name: "",
      username: "",
      email: ""
    };
  };

  onSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    this.setState(this.initialState());
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <table className="users-list">
            <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    tab="1"
                    placeholder="Name"
                    name="name"
                    onChange={this.onChange}
                    value={this.state.name}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    tab="2"
                    name="username"
                    onChange={this.onChange}
                    placeholder="Username"
                    value={this.state.username}
                  />
                </td>
                <td>
                  <input
                    type="email"
                    tab="3"
                    name="email"
                    onChange={this.onChange}
                    placeholder="Email"
                    value={this.state.email}
                  />
                </td>
                <td>
                  <input type="submit" tab="4" value="Add User" />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}

export default User;
