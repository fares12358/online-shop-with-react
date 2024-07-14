import React from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import image from "../img/main.png";
import "../Style/home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Nav />
      <div className="container home py-5">
        <div className="row py-5">
          <div className="text-holder col-12 col-lg-6 p-5 ">
            <h1 className="text-black fw-bold py-5">
              Mobile <br />
              <span>
                Backcover <br />
                Tempered Glass
              </span>
            </h1>
            <Link
              to="/Product"
              className="btn btn-primary main-btn py-2 px-4 fw-bold"
            >
              Shop Now!
            </Link>
          </div>
          <div className="img-holder col-12 col-lg-6 text-center">
            <img className="img-fluid" src={image} alt="main.png" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
