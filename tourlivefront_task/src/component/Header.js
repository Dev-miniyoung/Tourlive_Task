import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { AppstoreOutlined } from "@ant-design/icons";

class Headers extends React.Component {
  render() {
    return (
      <>
        <Menu mode="horizontal">
          <Menu.Item key="mail" icon={<AppstoreOutlined />}>
            <Link to={"/"}>홈</Link>
          </Menu.Item>
        </Menu>
      </>
    );
  }
}

export default Headers;
