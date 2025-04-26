import React, {useState} from "react";
import './SignUp.css';
import { useNavigate } from "react-router-dom";

function SignUp(){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        password: '',
        comapanyName: '',
        isAgency: 'Yes'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('userData', JSON.stringify(formData));
        navigate('/display');
    };

    return (
      <div className="signup-wrapper">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>
      <div className="input-group">
        <input type="text" className="floating-input" name="fullName" onChange={handleChange} required />
        <label className="floating-label">Full Name*</label>
      </div>
      <div className="input-group">
        <input type="number" className="floating-input" name="phoneNumber" onChange={handleChange} required />
        <label className="floating-label">Phone Number*</label>
      </div>
      <div className="input-group">
        <input type="email" className="floating-input" name="email" onChange={handleChange} required />
        <label className="floating-label">Email Address*</label>
      </div>
      <div className="input-group">
        <input className="floating-input" name="password" type="password" onChange={handleChange} required />
        <label className="floating-label">Password*</label>
      </div>
      <div className="input-group">
        <input type="text" className="floating-input" name="companyName" onChange={handleChange} />
        <label className="floating-label">Company Name</label>
      </div>
        <label>Are you an agency?</label>
        <div className="radio-group">
          <label><input type="radio" name="agency" value="yes" /> Yes</label>
          <label><input type="radio" name="agency" value="no" /> No</label>
        </div>

          <button type="submit">Create Account</button>
        </form>
      </div>
    );
}

export default SignUp;