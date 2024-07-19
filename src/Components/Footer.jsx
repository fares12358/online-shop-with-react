import React from "react";
import "../Style/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer p-5 text-black text-center text-lg-start">
        <div className="container">
          <div className="row align-items-center justify-content-around ">
            <div className="col-md-6 col-lg-4">
              <div className="info">
                <Link to="/"><img className="mb-4" src={require("../img/logo.png")}alt=""/></Link>
                <p className="mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="copyright">
                  Created By <span>Fares</span>
                  <div>
                    &copy; 2024 - <span className="text-uppercase">mocom</span>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-4 col-md-6 col-lg-2 py-3">
              <div className="links">
                <h5 className="text-black">Contact</h5>
                <ul className="list-unstyled lh-lg">
                  <li>info@example.com</li>
                  <li>+94 7670000000</li>
                  <li>123 Hospital rd,Kalubowila, Dehiwela</li>
                </ul>
              </div>
            </div>
            <div className=" col-4 col-md-6 col-lg-2 py-3">
              <div className="links">
                <h5 className="text-black">links</h5>
                <ul className="list-unstyled lh-lg">
                  <li>Shop</li>
                  <li>About Us</li>
                  <li>Product</li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
