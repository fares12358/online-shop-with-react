import React from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
const Error404 = () => {
  return (
    <>
      <Nav />
      <div className="container text-center py-5">
        <div className="py-5 my-2">
          <h1 className="py-5 fw-bold text-uppercase" style={{color:"red"}}>Error 404</h1>
          <h3 className="py-5 fw-bold text-uppercase" style={{color:"red"}}>this page is not found</h3>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Error404;
