import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { OrderContext } from '../context/OrderContext';
import './Orders.css';

function Orders() {
  const { orders } = useContext(OrderContext); // Retrieve the orders from context

  if (!orders || orders.length === 0) {
    return (
      <div className="orders-page">
        <h1>Your Orders</h1>
        <p className="empty-orders">Your order list is empty.</p>
        <Link to="/menu" className="back-to-menu">Go Back to Menu</Link>
      </div>
    );
  }

  const total = orders.reduce((acc, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return acc + price;
  }, 0);

  return (
    <div className="orders-page">
      <h1>Your Orders</h1>
      <ul className="orders-list">
        {orders.map((item, index) => (
          <li key={index}>
            <span>{item.name}</span>
            <span>{item.price}</span>
          </li>
        ))}
      </ul>
      <div className="orders-total">Total: ${total.toFixed(2)}</div>
      <Link to="/menu" className="back-to-menu">Go Back to Menu</Link>
    </div>
  );
}

export default Orders;
