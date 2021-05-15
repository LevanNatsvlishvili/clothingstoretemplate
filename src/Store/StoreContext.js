import React, { createContext, useState, useContext, } from 'react';

export const StoreContext = createContext({});

export const StoreContextProvider = ({ children }) => {
  const [subCategory, setSubCategory] = useState('');

  const [valueMin, setValueMin] = useState(5);
  const [valueMax, setValueMax] = useState(150);

  const [color, setColor] = useState('');

  const [cart, setCart] = useState([]);

  return (
    <StoreContext.Provider
      value={{
        subCategory,
        setSubCategory,
        valueMin,
        setValueMin,
        valueMax,
        setValueMax,
        color,
        setColor,
        cart,
        setCart
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

const useStore = () => useContext(StoreContext);

export default useStore;
