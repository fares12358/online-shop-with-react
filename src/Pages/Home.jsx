import React from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import image from "../img/main.png"
import '../Style/home.css'
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
    <Nav/>
    <div className="container">
      <div className="row py-5">
        <div className="col-12 col-md-6 p-5">
          <h1 className="text-black fw-bold py-5">Mobile <br /><span> Backcover <br />Tempered Glass</span></h1>
          <Link to="/Product" className="btn btn-primary main-btn py-2 px-5 fw-bold">Shop Now!</Link>
        </div>
        <div className="col-12 col-md-6 text-center">
          <img className="img-fluid" src={image} alt="ddd" />
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Home;
