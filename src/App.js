import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import axios from "axios";

class App extends Component {
  async componentDidMount() {
    const res = await axios.get("https://api.github.com/users");
    console.log(res.data);
    this.setState({ users: res.data });
  }

  state = {
    users: [],
  };
  render() {
    return (
      <div className='App'>
        <Navbar />
        <Users users={this.state.users} />
      </div>
    );
  }
}

export default App;
