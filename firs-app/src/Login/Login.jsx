import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
        ...prev,
        [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const storedUserData = JSON.parse(localStorage.getItem('userData'));

        if (storedUserData.password == formData.password && storedUserData.email === formData.email) {
          localStorage.setItem('loggedInUser', JSON.stringify(formData));
          navigate('/display');
        } else {
          alert('Invalid email address or password.')
        }
      };

  return (
    <div className="login-wrapper">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Signin to Your PopX account</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing slit,</p>
        <input
          type="email"
          name="email"
          placeholder="Email Address*"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password*"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
