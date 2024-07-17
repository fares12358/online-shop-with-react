import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Style/nav.css";
import { useAuth } from "./AuthContext"; // Import useAuth hook
const Nav = () => {
  const { isLogged } = useAuth();
  const { user } = useAuth();

  useEffect(() => {
    const SginBtn = document.querySelector(".sign");
    const menuHolder = document.querySelector(".menu-holder");
    const Dashboard = document.querySelector(".Dashboard");

    if (isLogged) {
      SginBtn.classList.add("hide");
      SginBtn.classList.remove("view");
      menuHolder.classList.add("view");
      menuHolder.classList.remove("hide");
      if(user.role==="admin"){
        Dashboard.classList.add("view");
        Dashboard.classList.remove("hide");
      }
      else{
        Dashboard.classList.remove("view");
        Dashboard.classList.add("hide");
      }
    } else {
      SginBtn.classList.add("view");
      SginBtn.classList.remove("hide");
      menuHolder.classList.add("hide");
      menuHolder.classList.remove("view");
    }
  }, [isLogged,user]);

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
                      <button className="btn bg-red text-uppercase fw-bold ">
                        log out
                      </button>
                    </li>
                    <li>
                      <Link to="/Account" class="dropdown-item fw-bold mt-2">
                        Account
                      </Link>
                    </li>
                    <li className="Dashboard">
                      <Link to="/Dashboard" class="dropdown-item fw-bold mt-2">
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link to="/Cart" class="dropdown-item fw-bold mt-2">
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
