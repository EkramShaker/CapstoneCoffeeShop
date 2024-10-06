import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import AboutUs from './pages/AboutUs';
import Orders from './pages/Orders';
import Header from './components/Header';
import { OrderProvider } from './context/OrderContext'; // Ensure the context is imported

function App() {
  return (
    <OrderProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Router>
    </OrderProvider>
  );
}

export default App;
