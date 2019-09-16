import React, { Component } from "react";
import { Result, Button, Icon } from "antd";
import { Link } from "react-router-dom";

class NotOpen extends Component {
  backHome = () => {
    this.props.backHome();
  };
  render() {
    return (
      <Result
        icon={<Icon type="smile" theme="twoTone" />}
        title="We'll build it soon..."
        extra={
          <Button type="primary" onClick={this.backHome}>
            Back Home
          </Button>
        }
      />
    );
  }
}
export default NotOpen;
