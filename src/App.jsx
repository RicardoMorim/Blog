import { useState } from "react";
import Posts from "./components/Posts";
import { Router, Link, redirectTo } from "@reach/router";
import Post from "./components/Post";
import CreatePost from "./components/CreatePost";
import { Button, Menu } from "antd";
import { HighlightOutlined, ReadOutlined } from "@ant-design/icons";
let { SubMenu } = Menu;
import UpdatePost from "./components/UpdatePost";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { auth } from "../firebase";
import "./App.css";

function App(props) {
  const [count, setCount] = useState(0);

  const [user, setUser] = useState(false);

  auth.onAuthStateChanged(function (user) {
    if (user) {
      setUser(user);
    } else {
      setUser(false);
    }
  });

  const onSignOut = () => {
    auth
      .signOut()
      .then(() => {
        console.log("You have been signed out");
      })
      .catch((error) => {
        console.error(
          `There was the folowing error logging out: ${error.message}`
        );
      });
  };

  return (
    <div className="app_container">
      <div className="app_main_navigation">
        <Menu
          mode="horizontal"
          style={{ display: "flex", justifyContent: "flex-start" }}
        >
          <Menu.Item key="posts">
            <Link to="/posts">
              <ReadOutlined /> Posts
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
                <a onClick={onSignOut}>{"Sign Out"}</a>
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

      <Router>
        <SignIn path="sign_in" default />
        <SignUp path="sign_up" />
        <Posts path="posts" />
        <CreatePost path="create_post" />
        <Post path="post/:id" />
        <UpdatePost path="update_post/:id" />
      </Router>
    </div>
  );
}

export default App;
