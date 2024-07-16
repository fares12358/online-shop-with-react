import React from "react";

const Signin = ({handelSingIn}) => {
  return (
    <>
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
              type="email"
              placeholder="Enter your email"
            />
            <input
              className="col-12 col-md-5 p-2 my-2"
              type="text"
              placeholder="Enter username"
            />
            <input
              className="col-12 col-md-5 p-2 my-2"
              type="password"
              placeholder="Enter password"
            />
            <input
              className="col-12 col-md-5 p-2 my-2"
              type="tell"
              placeholder="Enter your number"
            />
            <div className="row btn-holder col-12 d-flex justify-content-center align-items-center">
              <p className=" col-12 col-md-6 py-2 mx-3 ">
                you already have an account?
                <span
                  className="fw-bold text-uppercase signUp ms-3" onClick={handelSingIn}
                >
                  Sign in
                </span>
              </p>
              <button className="col-12 col-md-6  send btn btn-primary main-btn mt-3 fw-bold ">
                Create account
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signin;
