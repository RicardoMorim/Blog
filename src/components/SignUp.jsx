import React, { useState } from "react";
import { Input, Button, Alert } from "antd";
import { auth } from "../../firebase";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChange = (event) => setEmail(event.target.value);
  const onPasswordChange = (event) => setPassword(event.target.value);

  const onSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log("User created!");
      })
      .catch((error) => {
        console.error(`There was an error Signing Up: ${error.message}`);
        alert(error.message);
        setEmail("");
        setPassword("");
      });

    setEmail("");
    setPassword("");
  };

  return (
    <div className="signUp_container">
      <div className="page_header_container">
        <h1 className="posts_title"> Sign Up </h1>
      </div>

      <div className="post_inputs_container">
        <div className="post_input_container">
          <div className="post_input_title">
            {" "}
            <h2> Email </h2>{" "}
          </div>
          <div className="post_input">
            <Input placeholder="email" onChange={onEmailChange} />
          </div>
        </div>

        <div className="post_input_container">
          <div className="post_input_title">
            {" "}
            <h2> Password </h2>{" "}
          </div>

          <div className="post_input_value">
            <Input.Password
              placeholder="Password"
              onChange={onPasswordChange}
            />
          </div>
        </div>

        <div style={{ width: "100%", marginTop: "20px" }}>
          <div style={{ float: "left" }}>
            <a href="#">Already Have an account? Sign In!</a>
          </div>
          <div className="post_input_button">
            <Button type="primary" size="large" onClick={onSignUp}>
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
