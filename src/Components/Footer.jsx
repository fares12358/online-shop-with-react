import React from "react";
import "../Style/footer.css";
const Footer = () => {
  return (
    <>
      <div class="footer pt-5 pb-5 text-white-50 text-center text-md-start">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-lg-4">
              <div class="info">
                {/* <img class="mb-4" src="/img/logo.png" alt=""/> */}
                <h2>MEJIWOO</h2>
                <p class="mb-5">
                  Pellentesque in ipsum id orci porta dapibus. Vivamus magna
                  justo, lacinia eget consectetur sed, convallis at tellus.
                </p>
                <div class="copyright">
                  Created By <span>Fares</span>
                  <div>
                    &copy; 2024 - <span>MEJIWOO</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-2">
              <div class="links">
                <h5 class="text-light">Links</h5>
                <ul class="list-unstyled lh-lg">
                  <li>Home</li>
                  <li>Our Services</li>
                  <li>Portfolio</li>
                  <li>Testimonials</li>
                  <li>Support</li>
                  <li>Terms and Condition</li>
                </ul>
              </div>
            </div>
            <div class="col-md-6 col-lg-2">
              <div class="links">
                <h5 class="text-light">About us</h5>
                <ul class="list-unstyled lh-lg">
                  <li>Sign In</li>
                  <li>Register</li>
                  <li>About Us</li>
                  <li>Product</li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="contact">
                <h5 class="text-light">Contact Us</h5>
                <p class="lh-lg mt-3 mb-5">
                  Get in touch with us via mail phone.We are waiting for your
                  call or message
                </p>
                {/* <a class="btn main_btn btn-primary w-80" href="#">fm883254@gmail.com</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
