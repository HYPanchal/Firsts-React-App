import React from 'react';
import './CreateAccount.css';
import { useNavigate } from 'react-router-dom';

function CreateAccount() {
  const navigate = useNavigate();

  return (
    <div className="create-account">
      <h1>Welcome to PopX</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      <button onClick={() => navigate('/signup')}>Create Account</button><br/>
      <button onClick={() => navigate('/login')}>
        Already Registered? Login
      </button>
    </div>
  );
}

export default CreateAccount;
