// AuthContext.js
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false); // Default to false
  const [user, setUser] = useState(null);
  const [data, setData] = useState([]);
  const [prod, setProd] = useState([]);
  const [Cart, setCart] = useState([]);


  return (
    <AuthContext.Provider value={{ isLogged, setIsLogged ,user,setUser,data, setData,prod, setProd,Cart, setCart}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthContext }; // Export the context for use in other components
