import React from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import "../Style/about.css";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <Nav />
      <div className="container about text-center text-md-start">
        <h1 className="text-center fw-bold p-5">
          If you’re looking for a Premium Quality <br /> Tempered Glass or
          Back-cover for <br />
          your Device
        </h1>
        <div className="image-holder py-5">
          <img
            className="img-brand img-fluid"
            src={require("../img/post/about-post.png")}
            alt="about-post"
          />
        </div>
        <p className="py-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus
          egestas tellus rutrum tellus pellentesque eu. Amet dictum sit amet
          justo donec enim diam vulputate ut. Malesuada fames ac turpis egestas
          maecenas. Dictum fusce ut placerat orci nulla pellentesque dignissim.
          Neque laoreet suspendisse interdum consectetur. Turpis massa sed
          elementum tempus egestas sed sed. Ornare massa eget egestas purus
          viverra accumsan in. Tristique senectus et netus et malesuada. Ornare
          suspendisse sed nisi lacus sed. Aliquet nibh praesent tristique magna
          sit. Ac auctor augue mauris augue neque gravida in fermentum et. Erat
          imperdiet sed euismod nisi porta lorem mollis aliquam ut. Proin libero
          nunc consequat interdum varius sit amet mattis. Odio eu feugiat
          pretium nibh ipsum.
        </p>
        <h2 className="py-3 fw-bold">Price Strategy</h2>
        <p className="py-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus
          egestas tellus rutrum tellus pellentesque eu. Amet dictum sit amet
          justo donec enim diam vulputate ut. Malesuada fames ac turpis egestas
          maecenas. Dictum fusce ut placerat orci nulla pellentesque dignissim.
          Neque laoreet suspendisse interdum consectetur. Turpis massa sed
          elementum tempus egestas sed sed. Ornare massa eget egestas purus
          viverra accumsan in. Tristique senectus et netus et malesuada. Ornare
          suspendisse sed nisi lacus sed. Aliquet nibh praesent tristique magna
          sit. Ac auctor augue mauris augue neque gravida in fermentum et. Erat
          imperdiet sed euismod nisi porta lorem mollis aliquam ut. Proin libero
          nunc consequat interdum varius sit amet mattis. Odio eu feugiat
          pretium nibh ipsum.
        </p>
        <p className="py-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus
          egestas tellus rutrum tellus pellentesque eu. Amet dictum sit amet
          justo donec enim diam vulputate ut. Malesuada fames ac turpis egestas
          maecenas. Dictum fusce ut placerat orci nulla pellentesque dignissim.
          Neque laoreet suspendisse interdum consectetur. Turpis massa sed
          elementum tempus egestas sed sed. Ornare massa eget egestas purus
          viverra accumsan in. Tristique senectus et netus et malesuada. Ornare
          suspendisse sed nisi lacus sed. Aliquet nibh praesent tristique magna
          sit. Ac auctor augue mauris augue neque gravida in fermentum et. Erat
          imperdiet sed euismod nisi porta lorem mollis aliquam ut. Proin libero
          nunc consequat interdum varius sit amet mattis. Odio eu feugiat
          pretium nibh ipsum.
        </p>
      </div>
      
      <div className="container premium text-center text-md-start">
        <div className="row">
          <div className="col-12 col-lg-6 text-holder my-3">
            <h2 className="fw-bold py-4">
              Shop Premium <br />
              Tempered Glass in wholesalebr Price !
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <Link to="/Product" className="btn btn-primary bg-red px-4 py-2 mt-4">Shop Tempered Glass</Link>
          </div>
          <div className="col-12 col-lg-6 img-holder py-5 ps-0">
            <div className="image">
              <img className="img-fluid" src={require("../img/Untitled (3).png")} alt="glass" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
