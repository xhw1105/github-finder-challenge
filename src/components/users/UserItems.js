import React, { Component } from "react";

class UserItems extends Component {
  state = {
    id: 1,
    login: "mojombo",
    avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
    html_url: "https://api.github.com/users/mojombo",
  };

  render() {
    return (
      <div className='card text-center'>
        <img
          src={this.state.avatar_url}
          alt=''
          className='round-img'
          style={{ width: "60px" }}
        />
        <h3>{this.state.login}</h3>
        <div>
          <a href={this.state.html_url} className='btn btn-sm my-1'>
            More
          </a>
        </div>
      </div>
    );
  }
}

export default UserItems;
