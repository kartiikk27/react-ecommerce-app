import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav style={{
      padding: '10px',
      background: theme === 'dark' ? '#111' : '#eee',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: theme === 'dark' ? 'white' : 'black',
    }}>
      <div>
        <Link to="/" style={{ marginRight: 10 }}>Home</Link>
        <Link to="/checkout" style={{ marginRight: 10 }}>Checkout</Link>
        {isAuthenticated ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
      <button onClick={toggleTheme}>
        {theme === 'dark' ? '🌞 Light Mode' : '🌙 Dark Mode'}
      </button>
    </nav>
  );
};

export default Navbar;
