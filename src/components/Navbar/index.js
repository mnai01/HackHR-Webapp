import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.scss";

const Navbar = () => {
  let user = {
    name: "company",
  };
  return (
    <nav className={classes.navbar}>
      <Link to="/" className={classes.branding}>
        SafeDistance
      </Link>
      <Link to="/newfence" className={classes.newfence}>
        + Create <wbr></wbr>New Fence
      </Link>
      <div className={classes.account}>
        {user ? `Logged in as ${user.name}` : <Link to="/login">Login/Signup</Link>}
      </div>
    </nav>
  );
};

export default Navbar;
