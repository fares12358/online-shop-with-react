import React from "react";
import Nav from "../Components/Nav";
import Card from "../Components/Card";
import Footer from "../Components/Footer";

const Product = () => {
  return (
    <>
      <Nav />

      <div className="container p-5">
        <div className="row ">
          <div className="  grad-holder col-12 col-md-6 col-lg-3 my-5 ">
            <Card />
          </div>
          <div className="  grad-holder col-12 col-md-6 col-lg-3 my-5 ">
            <Card />
          </div>
          <div className="  grad-holder col-12 col-md-6 col-lg-3 my-5 ">
            <Card />
          </div>
          <div className="  grad-holder col-12 col-md-6 col-lg-3 my-5 ">
            <Card />
          </div>
          <div className="  grad-holder col-12 col-md-6 col-lg-3 my-5 ">
            <Card />
          </div>
          <div className="  grad-holder col-12 col-md-6 col-lg-3 my-5 ">
            <Card />
          </div>
          <div className="  grad-holder col-12 col-md-6 col-lg-3 my-5 ">
            <Card />
          </div>
          <div className="  grad-holder col-12 col-md-6 col-lg-3 my-5 ">
            <Card />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Product;
