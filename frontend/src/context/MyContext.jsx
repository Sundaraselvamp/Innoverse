// src/context/MyContext.js
import React, { createContext, useState, useContext } from 'react';

// Create the context
const MyContext = createContext();

// Create a custom hook to use the context easily
export const useMyContext = () => {
  return useContext(MyContext);
};

// Create the Context Provider component
export const MyContextProvider = ({ children }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [selected, setSelected] = useState("home")





  return (
    <MyContext.Provider value={{ isScrolled, setIsScrolled,selected, setSelected }}>
      {children}
    </MyContext.Provider>
  );
};
