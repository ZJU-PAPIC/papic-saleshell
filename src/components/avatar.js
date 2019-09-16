import React, { Component } from "react";
import { Avatar } from "antd";

class AvatarBox extends Component {
  render() {
    return (
      <div>
        <Avatar size={50} icon="user" />
      </div>
    );
  }
}

export default AvatarBox;
