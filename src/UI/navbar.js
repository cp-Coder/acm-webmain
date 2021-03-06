import React, { useState } from "react";
import classes from "./navbar.module.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <section className={classes["navbar-bg"]}>
        <nav className={`${classes["navbar"]} navbar-expand-lg navbar-light bg-light`}>
          <div className={`${classes["container1"]} container`}>
            <NavLink className={classes["navbar-brand"]} to="#">
              <img
                src="./image/logo.png"
                alt=""
                width="250"
                height="100"
                className="d-inline-block align-text-top img-fluid"
              />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    Overview
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/features">
                    Features
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/activities">
                    Activities
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
              <form className="d-flex">
                <button className={`btn ${classes["btn-style"]}`} type="submit">
                  Login
                </button>
                <button
                  className={`btn ${classes["btn-style"]} ${classes["btn-style-border"]}`}
                  type="submit"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};
export default Navbar;
