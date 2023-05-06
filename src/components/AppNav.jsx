import React from "react";
import { Button, Menu } from "antd";
import {
  HighlightOutlined,
  ReadOutlined,
  LikeOutlined,
} from "@ant-design/icons";
let { SubMenu } = Menu;
import { Link } from "@reach/router";

const AppNav = (props) => {
  var user = props.user;
  return (
    <div className="app_main_navigation">
      <Menu
        mode="horizontal"
        style={{ display: "flex", justifyContent: "flex-start" }}
      >
        {user && (
          <Menu.Item key="posts">
            <Link to={`/blogs/${user.uid}/posts`}>
              <ReadOutlined /> Your Posts
            </Link>
          </Menu.Item>
        )}

        <Menu.Item key="feed">
          <Link to="/blogs">
            <LikeOutlined /> Feed
          </Link>
        </Menu.Item>

        {user && (
          <Menu.Item key="create_post">
            <Link to="/create_post">
              <HighlightOutlined /> Create Post
            </Link>
          </Menu.Item>
        )}

        {user ? (
          <SubMenu
            key="profile"
            style={{
              marginLeft: "auto",
              float: "right",
            }}
            title={user.email}
          >
            <Menu.Item key="signout">
              <a onClick={props.onSignOut}>{"Sign Out"}</a>
            </Menu.Item>
          </SubMenu>
        ) : (
          <SubMenu
            key="profile"
            style={{
              marginLeft: "auto",
              float: "right",
            }}
            title="Sign In/Up"
          >
            <Menu.Item key="signin">
              <a href="/sign_in">Sign In</a>
            </Menu.Item>
            <Menu.Item key="signup">
              <a href="/sign_up">Sign Up</a>
            </Menu.Item>
          </SubMenu>
        )}
      </Menu>
    </div>
  );
};

export default AppNav;
