import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const [activeLink, setActiveLink] = useState("Home");
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
        <h4>Navigation</h4>
      <Link to={`/Kanbas/Account/Signin`}  
      id="wd-account-signin"
      className={`list-group-item border border-0 ${activeLink === "Signin" ? "text-black active" : "text-danger"}`}
      onClick={() => setActiveLink("Signin")}>
      Sign In</Link>
      <Link to={`/Kanbas/Account/Signup`}  
      id="wd-account-signup"
      className={`list-group-item border border-0 ${activeLink === "Signup" ? "text-black active" : "text-danger"}`}
      onClick={() => setActiveLink("Signup")}>
      Sign Up</Link>
      <Link to={`/Kanbas/Account/Profile`}  
      id="wd-account-profile"
      className={`list-group-item border border-0 ${activeLink === "Profile" ? "text-black active" : "text-danger"}`}
      onClick={() => setActiveLink("Profile")}>
      Profile</Link>
    </div>
);}
