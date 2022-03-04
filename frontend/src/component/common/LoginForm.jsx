import React from "react";
import Buttons from "../buttons/button";
import { Link } from "react-router-dom";

export default function LoginForm(props) {
  let { handleSubmit, setEcode, setPassword } = props.loginData;

  return (
    <div className="col-lg-7 bg-color align-self-center">
      <div className="form-section">
        <div className="title">
          <h3>Sign into your account</h3>
        </div>
        <div className="login-inner-form">
          <form method="post" onSubmit={handleSubmit}>
            <div className="userInput-box">
              <label id="label" htmlFor="username">
                Enter your Ecode
              </label>
              <input
                type="text"
                id="username"
                onChange={(e) => setEcode(e.target.value)}
                placeholder="Enter your Ecode"
              />
            </div>
            <div className="password-box">
              <label id="label" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
            <div>
              <Buttons />
            </div>
            <div className="createAccount">
              <Link to="/register">Create an account</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
