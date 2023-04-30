import { useState } from "react";
import "./App.css";
import Posts from "./components/Posts";
import { Router } from "@reach/router";
import Post from "./components/Post";
import CreatePost from "./components/CreatePost";
import { Menu, Icon } from "antd";
let { subMenu } = Menu;

function App(props) {
  const [count, setCount] = useState(0);

  return (
    <div className="app_container">
      <div className="app_main_navigation">
        <Menu mode="horizontal">
          <Menu.Item key="mail">
            <Icon type="mail" />
            Navigation One
          </Menu.Item>
          <Menu.Item key="app">
            <Icon type="appstore" />
            Navigation Two
          </Menu.Item>
        </Menu>
      </div>


      <Router>
        <Posts path="posts" default />
        <CreatePost path="create_post" />
        <Post path="post/:id" />
      </Router>
    </div>
  );
}

export default App;
