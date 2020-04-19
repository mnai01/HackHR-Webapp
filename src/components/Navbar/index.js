import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.scss";
import Cookies from "js-cookie";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>

      {Cookies.get("Company") != "" ? (
        <React.Fragment>
          <div>

            <Link to="/" className={classes.branding}>SafeDistance</Link>
            <div className={classes.account}>
              {`Logged in as ${Cookies.get("Company")}`}
            </div>
          </div>
          <div>
            <Link to="/newfence" className={classes.newfence}>
              + Create <wbr></wbr>New Fence
            </Link>
          </div>

        </React.Fragment>
      ) : (
          <React.Fragment>
            <Link to="/" className={classes.branding}>SafeDistance</Link>
            <Link to="/Login" className={classes.login}>Login/Signup</Link>
          </React.Fragment>
        )}
    </nav>
  );
};

export default Navbar;
