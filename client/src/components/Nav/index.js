import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


function Nav() {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <Link className="navbar-brand" to="/">
        <i className="fas fa-paw">
          <span className="pinder">
            pinder
          </span>
        </i>
      </Link>
        <button className="navbar-toggler btn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon">
          </span>
        </button>
        <div className="collapse navbar-collapse justify-content-end text">
          <ul className="navbar-nav">
            <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }>
                <span className="list-text">
                  Home
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                <span className="list-text">
                  About
                </span>
              </a>
            </li>
            <li className="nav-item">
            <Link
              to="/login"
              className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
            >
                <button className="button btn-outline-danger" type="submit">
                  <span className="login">LOG IN</span>
                </button>
              </Link>
            </li>
          </ul>
        </div>
    </nav>
  );  
}
export default Nav;
                  
                

      

          

    
