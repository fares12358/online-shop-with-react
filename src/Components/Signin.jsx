import React, { useRef } from "react";
//import { useAuth } from "./AuthContext"; // Import useAuth hook

const Signin = ({ handelSingIn }) => {
  const Fname = useRef();
  const Lname = useRef();
  const username = useRef();
  const password = useRef();
  const email = useRef();
  const num = useRef();
  //const { data } = useAuth(null);

  const checkValid = () => {
    if (
      Fname.current.value !== "" &&
      Lname.current.value !== "" &&
      username.current.value !== "" &&
      password.current.value !== "" &&
      email.current.value !== ""
    ) {
      return true; // Username is unique and inputs are not empty
    } else {
      console.log("inputs can not be empty");
      return false;
    }
  };

  const postApi = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({
        name: Fname.current.value,
        lname: Lname.current.value,
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
        role: "users",
      }),
      redirect: "follow",
    };

    fetch(
      "http://localhost:3001/users", // Use a valid backend endpoint
      requestOptions
    ).catch((error) => console.log("error", error));
  };

  const handleCread = (e) => {
    e.preventDefault();
    checkValid() ? postApi() : console.log("not post");
    Fname.current.value = "";
    Lname.current.value = "";
    username.current.value = "";
    password.current.value = "";
    email.current.value = "";
  };

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
              ref={Fname}
              type="text"
              placeholder="Enter first name"
              id="Fname"

            />
            <input
              className="col-12 col-md-5 p-2 my-2"
              ref={Lname}
              type="text"
              placeholder="Enter last name"
              id="Lname"

            />
            <input
              className="col-12 col-md-5 p-2 my-2"
              ref={email}
              type="email"
              placeholder="Enter your email"
              id="CRemail"

            />
            <input
              className="col-12 col-md-5 p-2 my-2"
              ref={username}
              type="text"
              placeholder="Enter username"
              id="CRusername"

            />
            <input
              className="col-12 col-md-5 p-2 my-2"
              ref={password}
              type="password"
              autoComplete="true"
              placeholder="Enter password"
              id="CRpassword"

            />
            <input
              className="col-12 col-md-5 p-2 my-2"
              ref={num}
              type="tell"
              placeholder="Enter your number"
              id="number"

            />
            <div className="row btn-holder col-12 d-flex justify-content-center align-items-center">
              <p className=" col-12 col-md-6 py-2 mx-3 ">
                you already have an account?
                <span
                  className="fw-bold text-uppercase signUp ms-3"
                  onClick={handelSingIn}
                >
                  Sign in
                </span>
              </p>
              <button
                className="col-12 col-md-6  send btn btn-primary main-btn mt-3 fw-bold "
                onClick={handleCread}
              >
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
