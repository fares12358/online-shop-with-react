import React,{useEffect} from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import "../Style/home.css";
import { Link } from "react-router-dom";
import Card from "../Components/Card";
import { useAuth } from "../Components/AuthContext"; // Import useAuth hook

const Home = () => {

  const { setProd } = useAuth(null);

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://api.myjson.online/v1/records/c29e0b9a-a39c-4b96-969c-5ceef1113709",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setProd(result.data.products))
      .catch((error) => console.log("error", error));
  }, [setProd]);



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
              className="btn btn-primary bg-red py-2 px-4 fw-bold"
            >
              Shop Now!
            </Link>
          </div>
          <div className="img-holder col-12 col-lg-6 text-center">
            <img
              className="img-fluid"
              src={require("../img/main.png")}
              alt="main.png"
            />
          </div>
        </div>
      </div>

      <div className="container prod py-5">
        <div className="row py-5">
          <div className="col-12 col-lg-6 img-holder text-center p-5">
            <img
              className="img-fluid"
              src={require("../img/g2.png")}
              alt="prod1"
            />
          </div>
          <div className="col-12 col-lg-6 text-holder p-5">
            <h3 className="py-3">Samsung S21 Silicon Cover</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Phasellus egestas tellus rutrum tellus pellentesque eu. Amet
              dictum sit amet justo donec enim diam vulputate ut. Malesuada
              fames ac turpis egestas maecenas. Dictum fusce ut placerat orci
              nulla pellentesque dignissim. Neque laoreet suspendisse interdum
              consectetur. Turpis massa sed elementum tempus egestas sed sed.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Phasellus egestas tellus rutrum tellus pellentesque eu. Amet
              dictum sit amet justo donec enim diam vulputate ut. Malesuada
              fames ac turpis egestas maecenas. Dictum fusce ut placerat orci
              nulla pellentesque dignissim. Neque laoreet suspendisse interdum
              consectetur. Turpis massa sed elementum tempus egestas sed sed.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="container text-center ">
        <div className="row  py-5">
          <h2 className="fw-bold prod-holder">Similar Product</h2>
          <div className=" grad-holder col-12 col-md-6 col-lg-3 my-5">
            <Card
              img={require("../img/g1.png")}
              prodName={"iPhone 13 Pro - Transparent LKR 499"}
              price={"100"}
              k={0}

            />
          </div>
          <div className=" grad-holder col-12 col-md-6 col-lg-3 my-5">
            <Card
              img={require("../img/g4.png")}
              prodName={"iPhone 14 - Transparent with magsafe LKR 799"}
              price={"100"}
              k={3}
            />
          </div>
          <div className=" grad-holder col-12 col-md-6 col-lg-3 my-5">
            <Card
              img={require("../img/g7.png")}
              prodName={"Pixel 6a - Matte Black LKR 499"}
              price={"100"}
              k={6}

            />
          </div>
          <div className=" grad-holder col-12 col-md-6 col-lg-3 my-5">
            <Card
              img={require("../img/g10.png")}
              prodName={"iPhone 13 Pro - Transparent LKR 499"}
              price={"100"}
              k={9}

            />
          </div>
        </div>
        <Link
          to="/Product"
          className="btn btn-primary bg-red px-5 py-2 fw-bold "
        >
          Shop Now
        </Link>
      </div>

      <div className="post container p-5">
        <div className="row py-5">
          <div className="col-12 col-lg-8">
            <h3 className="fw-bold">Tempered Glass</h3>
            <p className="py-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Phasellus egestas tellus rutrum tellus pellentesque eu. Amet
              dictum sit amet justo donec enim diam vulputate ut. Malesuada
              fames ac turpis egestas maecenas. Dictum fusce ut placerat orci
              nulla pellentesque dignissim. Neque laoreet suspendisse interdum
              consectetur. Turpis massa sed elementum tempus egestas sed sed.
            </p>
          </div>
          <div className="col-12 col-lg-4">
            <div className="image-holder text-center">
              <img
                className="img-fluid"
                src={require("../img/post/img1.png")}
                alt="img1.png"
              />
            </div>
          </div>
        </div>

        <div className="row py-5">
          <div className="col-12 col-lg-8 order-1">
            <h3 className="fw-bold py-2 mt-5">Back Cover</h3>
            <p className="py-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Phasellus egestas tellus rutrum tellus pellentesque eu. Amet
              dictum sit amet justo donec enim diam vulputate ut. Malesuada
              fames ac turpis egestas maecenas. Dictum fusce ut placerat orci
              nulla pellentesque dignissim. Neque laoreet suspendisse interdum
              consectetur. Turpis massa sed elementum tempus egestas sed sed.
            </p>
          </div>
          <div className="col-12 col-lg-4 order-0">
            <div className="image-holder text-center">
              <img
                className="img-fluid"
                src={require("../img/post/img2.png")}
                alt="img2.png"
              />
            </div>
          </div>
        </div>

        <div className="py-5">
          <h3 className="py-3 fw-bold">Mobile Brand and Price Strategy</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Phasellus egestas tellus rutrum tellus pellentesque eu. Amet dictum
            sit amet justo donec enim diam vulputate ut. Malesuada fames ac
            turpis egestas maecenas. Dictum fusce ut placerat orci nulla
            pellentesque dignissim. Neque laoreet suspendisse interdum.{" "}
          </p>
        </div>
      </div>

      <div className="container whyUs  text-center p-5">
        <h3 className="text-uppercase fw-bold ">why Choose us</h3>
        <div className="row">
          <div className=" holder col-12 col-md-4 text-center p-5 ">
            <span className="icon">
              <img
                className="p-4"
                src={require("../img/post/Untitled.png")}
                alt="icon1"
              />
            </span>
            <h3 className="fw-bold py-3">Fast Delivery</h3>
            <p className="fw-bold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className=" holder col-12 col-md-4 text-center p-5 ">
            <span className="icon">
              <img
                className="p-4"
                src={require("../img/post/Untitled (1).png")}
                alt="icon1"
              />
            </span>
            <h3 className="fw-bold py-3">Fast Delivery</h3>
            <p className="fw-bold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className=" holder col-12 col-md-4 text-center p-5 ">
            <span className="icon">
              <img
                className="p-4"
                src={require("../img/post/Untitled (2).png")}
                alt="icon1"
              />
            </span>
            <h3 className="fw-bold py-3">Fast Delivery</h3>
            <p className="fw-bold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
