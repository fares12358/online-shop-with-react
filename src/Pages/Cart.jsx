import React, { useEffect, useState } from "react";
import { useAuth } from "../Components/AuthContext"; // Import useAuth hook
import { Link } from "react-router-dom";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import "../Style/cart.css";
const Cart = () => {
  const { Cart } = useAuth();
  const { setCart } = useAuth();
  const { prod } = useAuth();
  const [prodAdd, setProdAdd] = useState(null);
  const uniqueCart = [...new Set(Cart)];
  const [TotalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    if (uniqueCart.length > 0) {
      const updatedProdAdd = uniqueCart.map((item) => prod[item]);
      setProdAdd(updatedProdAdd);
      const totalPrice = updatedProdAdd.reduce(
        (sum, item) => sum + +item.price,
        0
      );
      setTotalPrice(totalPrice);
    } else {
      setProdAdd([]);
      setTotalPrice(0);
    }
  }, [Cart, prod]);

  const removeItem = (index) => {
    const updatedCart = uniqueCart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  return (
    <>
      <Nav />
      <div className="container cart">
        <div className="row py-5 gap-1">
          <div className=" viewer col-11 col-md-8 p-0">
            {prodAdd && prodAdd.length > 0 ? (
              prodAdd.map((ele, index) => (
                <div
                  className="prod-holder d-flex justify-content-start align-items-center"
                  key={ele.id}
                >
                  <div className="image">
                    <img className="img-fluid" alt="not found" src={ele.src} />
                  </div>
                  <div className="desc">
                    <p>{ele.prodName}</p>
                    <p>
                      price: <span>{ele.price}</span>
                    </p>
                    <button
                      className="remove"
                      onClick={() => removeItem(index)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <>
                <h1 className="text-center fw-bold text-uppercase py-5">
                  your cart is empty
                </h1>
                <p className="text-center fw-bold ">
                  start shopping now <Link to="/product">Shop</Link>
                </p>
              </>
            )}
          </div>

          <div className="total col-11 col-md-3 d-flex flex-column justify-content-start align-items-start pt-3 ps-4">
            <div className="">
              <div className="my-2 fw-bold">
                Subtotal: <span className="ms-2">{TotalPrice}</span> .LE
              </div>
              <div className="my-2 fw-bold">
                Tax: <span className="ms-3">{TotalPrice * 0.1}</span> .LE
              </div>
              <div className="my-2 fw-bold">
                Total:{" "}
                <span className="ms-3">{TotalPrice + TotalPrice * 0.1}</span>{" "}
                .LE
              </div>
            </div>
            <button className="order btn btn-primary px-4 bg-red fw-bold m-auto mt-md-4 my-3 ">
              send order
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Cart;
