import React from "react";
import "../Style/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div class="footer p-5 text-black text-center text-lg-start">
        <div class="container">
          <div class="row align-items-center justify-content-around ">
            <div class="col-md-6 col-lg-4">
              <div class="info">
                <Link to="/"><img class="mb-4" src={require("../img/logo.png")}alt=""/></Link>
                <p class="mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div class="copyright">
                  Created By <span>Fares</span>
                  <div>
                    &copy; 2024 - <span className="text-uppercase">mocom</span>
                  </div>
                </div>
              </div>
            </div>
            <div class=" col-4 col-md-6 col-lg-2 py-3">
              <div class="links">
                <h5 class="text-black">Contact</h5>
                <ul class="list-unstyled lh-lg">
                  <li>info@example.com</li>
                  <li>+94 7670000000</li>
                  <li>123 Hospital rd,Kalubowila, Dehiwela</li>
                </ul>
              </div>
            </div>
            <div class=" col-4 col-md-6 col-lg-2 py-3">
              <div class="links">
                <h5 class="text-black">links</h5>
                <ul class="list-unstyled lh-lg">
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
