import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import axios from "axios";

class App extends Component {
  searchUsers = async (text) => {
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    console.log(res.data.items);
    this.setState({ users: res.data.items });
  };

  state = {
    users: [],
  };
  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Search searchUsers={this.searchUsers} />
          <Users users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
