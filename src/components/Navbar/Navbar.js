import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link exact path to="/" className="navbar__branding">
        Hack-HR Population
      </Link>
      <Link exact path to="/test" className="navbar__branding">
        Test
      </Link>

      <div className="navbar__account">awdawd</div>
    </nav>
  );
};

export default Navbar;
