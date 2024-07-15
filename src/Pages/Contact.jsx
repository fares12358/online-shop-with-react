import React from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import "../Style/contact.css";
const Contact = () => {
  return (
    <>
      <Nav />
      <div className="container p-5">
        <form action="" className="text-center p-4">
          <div className="row justify-content-around">
            <div className="img-holder py-5">
              <img src={require("../img/logo.png")} alt="logo" />
            </div>
            <input
              className="col-12 col-md-5 p-2 my-2"
              type="text"
              placeholder="Enter first name"
            />
            <input
              className="col-12 col-md-5 p-2 my-2"
              type="text"
              placeholder="Enter last name"
            />
            <input
              className="col-12 col-md-5 p-2 my-2"
              type="text"
              placeholder="Enter your email"
            />
            <input
              className="col-12 col-md-5 p-2 my-2"
              type="text"
              placeholder="Enter your number"
            />
            <textarea
              className="col-12 col-md-5 p-2 my-2 "
              cols={"25"}
              rows={"10"}
              placeholder="Enter your number"
            />
            <div className="btn-holder col-5 d-flex justify-content-center align-items-center">
              <button className="send btn btn-primary main-btn mt-3 px-5 py-2 fw-bold fs-5 ">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
