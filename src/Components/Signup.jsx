import React from "react";
import "../Style/sign.css"

const Signup = ({handelSingUp}) => {
  return (
    <>
      <div className="container SignUp py-5">
        <form action="" className=" py-5 ">
          <div className="d-flex flex-column justify-content-center align-items-center ">
            <input className=" p-2 my-2" type="text" placeholder="Enter username" />
            <input className=" p-2 my-2" type="password" placeholder="Enter password" />
          </div>
          <div className=" btn-holder  d-flex justify-content-center align-items-center flex-column">
              <p className=" py-2 mx-3 ">
              you don't have an account?
                <span
                  className="fw-bold text-uppercase signUp ms-3" onClick={handelSingUp}
                >
                  Sign up
                </span>
              </p>
              <button className="  send btn btn-primary main-btn mt-3 fw-bold ">
                sign in
              </button>
            </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
