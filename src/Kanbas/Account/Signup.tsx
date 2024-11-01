import React from "react";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div id="wd-signup-screen" className="container">
      <h1>Sign up</h1>
      <input 
      placeholder="username" 
      className="form-control mb-2" />
      <input 
      placeholder="password" 
      type="password" 
      className="form-control mb-2" />
      <input 
      placeholder="verify password" 
      type="password" 
      className="form-control mb-2" />

      <Link id="wd-signup-btn"
      to="/Kanbas/Account/Signin"
      className="btn btn-danger w-100">
      Sign Up </Link>
      <br/><br/>
      <h4>Other Options</h4>
      <Link id="wd-signin-btn"
      to="/Kanbas/Account/Signin"
      className="btn btn-primary w-100">
      Sign in </Link>
    </div>
);}
