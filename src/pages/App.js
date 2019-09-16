import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import NotOpen from "./NotOpen";
import Market from "./Market";
import AvatarBox from "../components/avatar";
import "./App.less";

const { Content, Footer, Sider } = Layout;

class App extends Component {
  state = {
    menuStatus: "1",
    userName: "unLogin"
  };
  handleMenuChange = ({ item, key, keyPath, domEvent }) => {
    this.setMenuStatus(key);
  };
  setMenuStatus = (key = "1") => {
    this.setState({
      menuStatus: key
    });
  };
  render() {
    const { menuStatus, userName } = this.state;
    let menuContent = null;
    switch (menuStatus) {
      case "1":
        menuContent = <Market />;
        break;
      default:
        menuContent = (
          <NotOpen onRef={this.onRef} backHome={this.setMenuStatus} />
        );
    }
    return (
      <div className="container-all">
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
            style={{ background: "#121212" }}
          >
            <div className="avatar-box">
              <AvatarBox />
              <div className="username">{userName}</div>
            </div>
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              selectedKeys={[this.state.menuStatus]}
              onClick={this.handleMenuChange}
            >
              <Menu.Item key="1">
                <Icon type="read" />
                <span className="nav-text">书籍</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="desktop" />
                <span className="nav-text">电子产品</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="bulb" />
                <span className="nav-text">杂物</span>
              </Menu.Item>
              <Menu.Item key="4">
                <Icon type="notification" />
                <span className="nav-text">新闻</span>
              </Menu.Item>
              <Menu.Item key="5">
                <Icon type="setting" />
                <span className="nav-text">设置</span>
              </Menu.Item>
              <Menu.Item key="6">
                <Icon type="question" />
                <span className="nav-text">帮助</span>
              </Menu.Item>
              <Menu.Item key="7">
                <Icon type="info-circle" />
                <span className="nav-text">关于</span>
              </Menu.Item>
            </Menu>
            <Footer>
              <div className="sider-footer">Created By PAPIC ©2019</div>
            </Footer>
          </Sider>
          <Layout>
            <Content>{menuContent}</Content>
            <Footer style={{ textAlign: "center" }}>到底了，弟弟！</Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App;
