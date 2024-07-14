import React from "react";
import { Link } from "react-router-dom";
import "../Style/nav.css";
const Nav = () => {
  return (
    <>
      <nav className=" navbar navbar-expand-lg navbar-custom">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-2 text-uppercase " to="/">
            mocom
          </Link>
          <button
            className="navbar-toggler fs-4"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto px-3">
              <li className="nav-item p-2 ">
                <Link
                  className="nav-link active text-black  "
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item p-2 ">
                <Link className="nav-link text-black " to="/About">
                  About
                </Link>
              </li>
              <li className="nav-item p-2 ">
                <Link className="nav-link text-black " to="/Product">
                  product
                </Link>
              </li>
              <li className="nav-item p-2 ">
                <Link className="nav-link text-black " to="/Contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
