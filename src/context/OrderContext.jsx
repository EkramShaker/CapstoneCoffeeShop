import React, { createContext, useState } from 'react';

// Create the context
export const OrderContext = createContext();

// Create the provider component
export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  // Function to add items to orders
  const addItemToOrder = (item) => {
    setOrders((prevOrders) => [...prevOrders, item]);
  };

  return (
    <OrderContext.Provider value={{ orders, addItemToOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
