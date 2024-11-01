import { Link } from "react-router-dom";
export default function Signin() {
  return (
    <div id="wd-signin-screen" className="container">
      <h1>Sign in</h1>
      <input id="wd-username"
             placeholder="username"
             className="form-control mb-2"/>
      <input id="wd-password"
             placeholder="password" type="password"
             className="form-control mb-2"/>
      <Link id="wd-signin-btn"
            to="/Kanbas/Account/Profile"
            className="btn btn-primary w-100">
            Sign in </Link>
            <br/><br/>
      
      <h4>Other Options</h4>
      <Link id="wd-signup-btn"
            to="/Kanbas/Account/Signup"
            className="btn btn-danger w-100">
      Sign Up </Link>
    </div>
);}
