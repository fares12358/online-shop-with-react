import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Style/nav.css";

const Nav = () => {

  const [isSign, setIsSign] = useState(false);

  let addTrue = () => {
    isSign ? setIsSign(false) : setIsSign(true);
  };
  useEffect(() => {
    const SginBtn = document.querySelector(".sign");
    const menuHolder = document.querySelector(".menu-holder");

    if (isSign) {
      SginBtn.classList.add("hide");
      SginBtn.classList.remove("view");
      menuHolder.classList.add("view");
      menuHolder.classList.remove("hide");
    } else {
      SginBtn.classList.add("view");
      SginBtn.classList.remove("hide");
      menuHolder.classList.add("hide");
      menuHolder.classList.remove("view");
    }
  }, [isSign]);

  return (
    <>
      <nav className=" navbar navbar-expand-lg navbar-custom">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-2 text-uppercase " to="/">
            <img
              className="img-fluid"
              src={require("../img/logo.png")}
              alt="logo"
            />
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
                  className="nav-link active text-black hover-red "
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item p-2 ">
                <Link className="nav-link text-black hover-red " to="/About">
                  About
                </Link>
              </li>
              <li className="nav-item p-2 ">
                <Link className="nav-link text-black hover-red " to="/Product">
                  product
                </Link>
              </li>
              <li className="nav-item p-2 ">
                <Link className="nav-link hover-red text-black " to="/Contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item p-2 menu-holder ">
                <div class="dropdown p-2">
                  <button
                    class="btn btn-secondary dropdown-toggle bg-red fw-bold"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Menu
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <Link to="/Account" class="dropdown-item fw-bold ">
                        Account
                      </Link>
                    </li>
                    <li>
                      <Link to="/Dashboard" class="dropdown-item fw-bold">
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link to="/Cart" class="dropdown-item fw-bold">
                        Cart
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item p-2  ">
                <Link
                  className="nav-link sign btn btn-primary  main-btn px-4"
                  to="/sign"
                >
                  Sign in
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
