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

        <input name="fullName" placeholder="Full Name*" onChange={handleChange} required />
        <input name="phoneNumber" placeholder="Phone Number*" onChange={handleChange} required />
        <input name="email" placeholder="Email Address*" onChange={handleChange} required />
        <input name="password" placeholder="Password*" type="password" onChange={handleChange} required />
        <input name="companyName" placeholder="Company Name" onChange={handleChange} />

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