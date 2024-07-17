import React, { useRef, useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from './AuthContext'; // Import useAuth hook
import '../Style/sign.css'
const Signup = ({ handelSingUp }) => {
  const { setIsLogged } = useAuth(); // Use useAuth hook to get setIsLogged
  const { isLogged } = useAuth();
  const {user}= useAuth(null);
  const {setUser}= useAuth(null);



  const [data, setData] = useState([]);
  const usernameInput = useRef();
  const passwordInput = useRef();
  const navigate = useNavigate();

  // Fetch API data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/users", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow",
        });
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

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
            />
            <input
              className=" p-2 my-2"
              ref={passwordInput}
              type="password"
              placeholder="Enter password"
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
