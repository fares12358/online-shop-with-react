import React from "react";
import Nav from "../Components/Nav";
import Card from "../Components/Card";
import Footer from "../Components/Footer";

const Product = () => {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row py-4 ">

          <div className=" py-4 text-center">
            <input className="search px-4 py-2 col-12 col-md-6" type="text" placeholder="Search here" />
          </div>

          <h4 className="fw-bold text-uppercase py-3">filter by</h4>

          <div class="btn-group col-4 col-md-2">
            <button
              type="button"
              class="btn btn-danger dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Price
            </button>
            <ul class="dropdown-menu ">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>

          <div class="btn-group col-4 col-md-2">
            <button
              type="button"
              class="btn btn-danger dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Category
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <div className="container">
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
