// AuthContext.js
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false); // Default to false
  const [user, setUser] = useState(null);
  const [data, setData] = useState([]);
  const [prod, setProd] = useState([]);
  const [Cart, setCart] = useState([]);
  const [prodAdd, setProdAdd] = useState([]);
  const [TotalPrice, setTotalPrice] = useState(0);
  const [clicked, setClicked] = useState(false);


  return (
    <AuthContext.Provider value={{ isLogged, setIsLogged ,user,setUser,data, setData,prod, setProd,Cart, setCart,prodAdd, setProdAdd,TotalPrice, setTotalPrice,clicked, setClicked}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthContext }; // Export the context for use in other components
