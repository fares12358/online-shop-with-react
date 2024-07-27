import React, { useEffect } from "react";
import { useAuth } from "../Components/AuthContext"; // Import useAuth hook
import { Link } from "react-router-dom";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import "../Style/cart.css";
const Cart = () => {
  const { prodAdd } = useAuth();
  const { TotalPrice } = useAuth();
  const { setTotalPrice } = useAuth();
  const { setProdAdd } = useAuth();
  const { setCart } = useAuth();
  const { Cart } = useAuth();

  useEffect(() => {
    const total = prodAdd.reduce((sum, product) => +sum + +product.price, 0);
    setTotalPrice(total);
  }, [prodAdd, setTotalPrice]);

  const removeItem = (index) => {
    const updatedProd = prodAdd.filter((_, i) => i !== index);
    setProdAdd(updatedProd);
    const uniqueCart = [...new Set(Cart)];
    const updatedCart = uniqueCart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  return (
    <>
      <Nav />
      <div className="container cart">
        <div className="row py-5">
          <div className=" viewer col-11 p-0 ms-auto me-auto">
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
          {prodAdd && prodAdd.length > 0 ? (
            <>
              <div className="total col-11 ms-auto me-auto d-flex justify-content-center flex-column align-items-center">
                <div className="">
                  <div className="my-2 fw-bold">
                    Subtotal: <span className="ms-2">{TotalPrice}</span> .LE
                  </div>
                  <div className="my-2 fw-bold">
                    Tax: <span className="ms-3">{TotalPrice * 0.1}</span> .LE
                  </div>
                  <div className="my-2 fw-bold">
                    Total:{" "}
                    <span className="ms-3">
                      {TotalPrice + TotalPrice * 0.1}
                    </span>{" "}
                    .LE
                  </div>
                </div>
                <button className="order btn btn-primary px-4 bg-red fw-bold my-3">
                  send order
                </button>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Cart;
