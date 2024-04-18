import React, { useState } from 'react';

function LoginLogout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="login-container">
      {!isLoggedIn ? (
        <button onClick={handleLogin} className="login-button">Log In</button>
      ) : (
        <div>
          <p>Welcome!</p>
          <button onClick={handleLogout} className="logout-button">Log Out</button>
        </div>
      )}
    </div>
  );
}

export default LoginLogout;
