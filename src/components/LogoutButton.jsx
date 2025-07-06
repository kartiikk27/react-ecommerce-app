import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <button onClick={handleLogout} style={{ margin: '10px', padding: '6px 12px' }}>
      Log Out
    </button>
  );
};

export default LogoutButton;
