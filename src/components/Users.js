import React, { Component } from "react";
import UserJsonData from '../data/users.json';
class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentWillMount() {
    this.setState({ users: UserJsonData });
  }

  render() {
    const usersList = this.state.users.map(user => (
      <tr key={user.id} className="user-item">
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>Delete</td>
      </tr>
    ));
    return (
      <div className="container">
        <table className="users-list">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>UserName</th>
              <th>Email</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{usersList}</tbody>
        </table>
      </div>
    );
  }
}

export default Users;
