import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext"; // Import useAuth hook
import "../Style/sign.css";
const Signup = ({ handelSingUp }) => {
  const { setIsLogged } = useAuth();
  const { isLogged } = useAuth();
  const { user } = useAuth(null);
  const { setUser } = useAuth(null);
  const { data } = useAuth(null);
  const { setData } = useAuth(null);

  const usernameInput = useRef();
  const passwordInput = useRef();
  const navigate = useNavigate();

  // // Fetch API data
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("http://localhost:3001/users", {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         redirect: "follow",
  //       });
  //       const result = await response.json();
  //       setData(result);
  //     } catch (error) {
  //       console.log("error", error);
  //     }
  //   };

  //   fetchData();
  // }, [setData]);

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
      .then((result) => setData(result.data.users))
      .catch((error) => console.log("error", error));
  }, [setData]);

  const isValid = () => {
    return (
      usernameInput.current.value !== "" && passwordInput.current.value !== ""
    );
  };

  const isUserExist = () => {
    const foundUser = data.find(
      (user) =>
        user.username === usernameInput.current.value &&
        user.password === passwordInput.current.value
    );

    if (foundUser) {
      setUser(foundUser);
      setIsLogged(true); // Update isLogged state
      return true;
    } else {
      setUser(null);
      setIsLogged(false); // Update isLogged state
      return false;
    }
  };
  useEffect(() => {
    if (isLogged) {
      //console.log(user);
      navigate("/");
    } else {
      //console.log("User does not exist");
      usernameInput.current.value = "";
      passwordInput.current.value = "";
    }
  }, [isLogged, user, navigate]);

  const logIn = (e) => {
    e.preventDefault();
    if (isValid()) {
      isUserExist();
    } else {
      //console.log("Input cannot be empty");
    }
  };

  return (
    <>
      <div className="container SignUp py-5">
        <form action="" className=" py-5 ">
          <div className="d-flex flex-column justify-content-center align-items-center ">
            <input
              className=" p-2 my-2"
              type="text"
              ref={usernameInput}
              placeholder="Enter username"
              id="Fusername"
            />
            <input
              className=" p-2 my-2"
              ref={passwordInput}
              type="password"
              placeholder="Enter password"
              autoComplete="false"
              id="Fpassword"
            />
          </div>
          <div className=" btn-holder  d-flex justify-content-center align-items-center flex-column">
            <p className=" py-2 mx-3 ">
              you don't have an account?
              <span
                className="fw-bold text-uppercase signUp ms-3"
                onClick={handelSingUp}
              >
                Sign up
              </span>
            </p>
            <button
              className="  send btn btn-primary main-btn mt-3 fw-bold "
              onClick={logIn}
            >
              login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;

// const linkApi="https://api.myjson.online/v1/records/58226085-e18b-4d16-b440-bb8f1ffd2f53";
