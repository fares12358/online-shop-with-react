import React, { useState } from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import Signin from "../Components/Signin";
import Signup from "../Components/Signup";

const Sign = () => {
  const [showSignin, setShowSignin] = useState(true);

  const handelShow = () => {
    setShowSignin(!showSignin);
  };

  return (
    <div className="content">
      <Nav />
      {showSignin ? (
        <Signin handelSingIn={handelShow} />
      ) : (
        <Signup handelSingUp={handelShow} />
      )}
      <Footer />
    </div>
  );
};

export default Sign;

/*


  const [signMode, setSignMode] = useState("in");
  const [data, setData] = useState(null);

  const changeSignMode = () => {
    signMode === "in" ? setSignMode("up") : setSignMode("in");
  };

  useEffect(() => {
    if (signMode === "in") {
      console.log("get api");
    } else {
      console.log("post api");
    }
  }, [signMode]);

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("http://localhost:5000/users", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      })
      .catch((error) => console.log("error", error));
  }, []);

  console.log(`fetch data ${data}`);



*/
