import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/checkout');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Please Log In to Continue</h2>
      <button onClick={handleLogin} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Log In
      </button>
    </div>
  );
};

export default Login;
