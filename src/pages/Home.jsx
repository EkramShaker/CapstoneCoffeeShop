import React, { useState } from 'react';
import './Home.css';

function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  const toggleRegister = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div className="home-page">
      <div className="video-background">
        <video
          width="100%"
          height="100%"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/coffee-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="content">
        <h1>Welcome to CodeBrew Cafe</h1>
        {/* Removed nav links from here */}
      </div>

      {/* Login/Register Modal or Dropdown */}
      {showLogin && (
        <div className="login-form">
          {isRegistering ? (
            <>
              <h2>Register</h2>
              <form>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit">Register</button>
                <p>
                  Already have an account?{" "}
                  <span onClick={toggleRegister}>Login here</span>
                </p>
              </form>
            </>
          ) : (
            <>
              <h2>Login</h2>
              <form>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
                <p>
                  Don’t have an account?{" "}
                  <span onClick={toggleRegister}>Register here</span>
                </p>
              </form>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
