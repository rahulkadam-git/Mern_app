import React from "react";
import Buttons from "../buttons/button";
import { Link } from "react-router-dom";

export default function RegisterForm(props) {
  let {
    handleSubmit,
    setUserType,
    setName,
    setPassword,
    setSurname,
  } = props.registerData;

  return (
    <div>
      <div className="col-lg-7 bg-color align-self-center">
        <div className="form-section">
          <div className="title">
            <h3>Register here</h3>
          </div>
          <div className="register-inner-form">
            <form method="post" onSubmit={handleSubmit}>
              <div className="selectType">
                <select
                  onChange={(e) => setUserType(e.target.value)}
                  className="form-select form-select-lg mb-3"
                  aria-label=".form-select-lg example"
                >
                  <option value="0">Open this select menu</option>
                  <option value="Admin">Admin</option>
                  <option value="Employee"> Employee</option>
                </select>
              </div>

              <div className="userName-box">
                <label id="label" htmlFor="username">
                  Enter your Name
                </label>
                <input
                  type="text"
                  id="username"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                />
              </div>
              <div className="userSurname-box">
                <label id="label" htmlFor="surname">
                  Enter your Surname
                </label>
                <input
                  type="text"
                  id="surname"
                  onChange={(e) => setSurname(e.target.value)}
                  placeholder="Enter your surname"
                />
              </div>

              <div className="Password-box">
                <label id="label" htmlFor="Password-box">
                  Password
                </label>
                <input
                  type="text"
                  id="Password-box"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                />
              </div>
              <div>
                <Buttons />
              </div>

              <div className="signIn">
                <Link to="/">SignIn</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
