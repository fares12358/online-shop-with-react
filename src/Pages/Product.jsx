import React, { useRef, useState } from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import { useAuth } from "../Components/AuthContext"; // Import useAuth hook
import { Link } from "react-router-dom";
const Product = () => {
  const { prod } = useAuth(null);
  const searchInput = useRef();

  const [search, setsearch] = useState(null);

  const findSearch = () => {
    setsearch(searchInput.current.value);
    console.log(search);
  };

  return (
    <>
      <Nav />
      <div className="container">
        <div className="row py-4">
          <div className="py-4 text-center">
            <input
              className="search px-4 py-2 col-12 col-md-6"
              ref={searchInput}
              type="text"
              placeholder="Search here"
              autoComplete="true"
              id="searchWord"
              onChange={findSearch}
            />
          </div>

          <h4 className="fw-bold text-uppercase py-3">filter by</h4>

          <div className="btn-group col-4 col-md-2">
            <button
              type="button"
              className="btn btn-danger dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Price
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#action">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#action">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#action">
                  Something else here
                </a>
              </li>
            </ul>
          </div>

          <div className="btn-group col-4 col-md-2">
            <button
              type="button"
              className="btn btn-danger dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Category
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#action">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#action">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#action">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {prod && prod.length > 0 ? (
            prod.map((ele, index) => (
              <div
                className="grad-holder col-12 col-md-6 col-lg-3 my-5"
                key={index}
              >
                <Card
                  img={ele.src}
                  prodName={ele.prodName}
                  price={ele.price}
                  k={index}
                />
              </div>
            ))
          ) : (
            <>
              <h1 className="text-center fw-bold text-uppercase py-5">
                loading....
              </h1>
              <p className="text-center fw-bold ">
                if doesn't load data go to <Link to="/">Home</Link>
              </p>
            </>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Product;

// // Fetch API data
// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const response = await fetch("http://localhost:3001/products", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         redirect: "follow",
//       });
//       const result = await response.json();
//       setProd(result);
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   fetchData();
// }, [setProd]);
