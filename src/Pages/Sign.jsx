import { useState } from "react";
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
  

  const changeSignMode = () => {
    signMode === "in" ? setSignMode("up") : setSignMode("in");
  };



*/
