import React, { Component } from "react";

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }
  render() {
    const { name, avatar_url } = this.props.user;
    return <div>{name}</div>;
  }
}

export default User;
