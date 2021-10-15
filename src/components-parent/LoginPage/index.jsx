import React from "react";
import PropTypes from "prop-types";
import "../LoginPage/styles.css";
import logo from "../LoginPage/img/bg login.png";

function Login(props) {
  return (
    <div id="wrapper">
      <div className="header">Login</div>
      <div className="content">
        <img src={logo} alt="" />
      </div>
      <div className="form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="username" name="username" placeholder="Username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="Password" />
        </div>

        <div className="footer">
          <button type="button" className="btn-login">
            Login
          </button>
          <button type="button" className="btn-register">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
