// AuthContext.js
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false); // Default to false
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ isLogged, setIsLogged ,user,setUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthContext }; // Export the context for use in other components