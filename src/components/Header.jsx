import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import axios from 'axios';
import { OrderContext } from '../context/OrderContext'; // Assuming you're using this context to store user login state

function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { user, setUser } = useContext(OrderContext); // Using context to store login info
  const navigate = useNavigate();

  const toggleLogin = () => {
    setShowLogin(!showLogin);
    setErrorMessage(''); // Clear any previous error messages
  };

  const toggleRegister = () => {
    setIsRegistering(!isRegistering);
    setErrorMessage(''); // Clear any previous error messages
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/login', { email, password });
      setUser(res.data.user); // Assuming the response has a user object
      setShowLogin(false); // Close login form on success
      navigate('/'); // Redirect to home page
    } catch (error) {
      setErrorMessage('Invalid credentials. Please try again.');
    }
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/register', { name, email, password });
      setUser(res.data.user); // Assuming the response has a user object
      setShowLogin(false); // Close registration form on success
      navigate('/'); // Redirect to home page
    } catch (error) {
      console.error('Registration error:', error.response?.data || error.message);
      setErrorMessage('Registration failed. Try again.');
    }
  };
  
  const handleLogout = async () => {
    try {
      await axios.post('/api/auth/logout');
      setUser(null); // Clear user from context
      navigate('/'); // Redirect to home
    } catch (error) {
      setErrorMessage('Failed to log out. Try again.');
    }
  };

  return (
    <header className="header">
      <Link to="/">
        <img src="/logo/codebrew-logo.png" alt="CodeBrew Cafe Logo" className="logo" />
      </Link>
      <nav>
        <Link to="/menu">Menu</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/orders">Orders</Link>
      </nav>
      {!user ? (
        <button onClick={toggleLogin} className="login-button">
          {showLogin ? 'Close' : 'Login / Register'}
        </button>
      ) : (
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      )}

      {showLogin && (
        <div className="login-form-header">
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          {isRegistering ? (
            <>
              <h2>Register</h2>
              <form onSubmit={handleRegister}>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button type="submit">Register</button>
                <p>
                  Already have an account?{' '}
                  <span onClick={toggleRegister}>Login here</span>
                </p>
              </form>
            </>
          ) : (
            <>
              <h2>Login</h2>
              <form onSubmit={handleLogin}>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button type="submit">Login</button>
                <p>
                  Don’t have an account?{' '}
                  <span onClick={toggleRegister}>Register here</span>
                </p>
              </form>
            </>
          )}
        </div>
      )}
    </header>
  );
}

export default Header;
