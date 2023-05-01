import React, { useState } from "react";
import { Input, Button } from "antd";
import { auth } from "../../firebase";

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChange = (event) => setEmail(event.target.value);
  const onPasswordChange = (event) => setPassword(event.target.value);

  const onSignIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("Signed in!");
      })
      .catch((error) => {
        console.error("There was an error: " + error.message);
      });

    setEmail("");
    setPassword("");
  };

  return (
    <div className="signUp_container">
      <div className="page_header_container">
        <h1 className="posts_title"> Sign In </h1>
      </div>

      <div className="post_inputs_container">
        <div className="post_input_container">
          <div className="post_input_title">
            {" "}
            <h2> Email </h2>{" "}
          </div>
          <div className="post_input">
            <Input onChange={onEmailChange} placeholder="email" />
          </div>
        </div>

        <div className="post_input_container">
          <div className="post_input_title">
            {" "}
            <h2> Password </h2>{" "}
          </div>

          <div className="post_input_value">
            <Input.Password
              onChange={onPasswordChange}
              placeholder="Password"
            />
          </div>
        </div>

        <div style={{ width: "100%", marginTop: "20px" }}>
          <div style={{ float: "left" }}>
            <a href="#">Don't have Have an account? Sign Up!</a>
          </div>
          <div className="post_input_button">
            <Button type="primary" size="large" onClick={onSignIn}>
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
