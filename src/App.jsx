import { useState } from "react";
import Posts from "./components/Posts";
import { Router, Link } from "@reach/router";
import Post from "./components/Post";
import CreatePost from "./components/CreatePost";
import UpdatePost from "./components/UpdatePost";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { auth } from "../firebase";
import "./App.css";
import NavApp from "./components/AppNav";

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
      <NavApp user={user} onSignOut={onSignOut} />

      <Router>
        <SignIn path="sign_in" default />
        <SignUp path="sign_up" />
        <Posts user={user} path="blogs/:uid/posts" />
        <CreatePost user={user} path="create_post" />
        <Post user={user} path="blogs/:uid/post/:id" />
        <UpdatePost user={user} path="update_post/:id" />
      </Router>
    </div>
  );
}

export default App;
