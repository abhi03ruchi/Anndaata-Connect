import React, { useState } from 'react';
import Logo from "../../Components/assets/logo.png";
import './register.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

function DonorRegistration() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    organizationName: '',
    address: '',
    agreeToSafety: false,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!emailRegex.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!passwordRegex.test(formData.password)) newErrors.password = 'Password must be at least 8 characters long and include a number';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!phoneRegex.test(formData.phoneNumber)) newErrors.phoneNumber = 'Phone number must be 10 digits';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.agreeToSafety) newErrors.agreeToSafety = 'You must agree to the food safety policy';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form Data Submitted:', formData);
      // Submit form data to the backend
    }
  };
  
  return (
    <>
        <Navbar/>
    <div className="registration-container">
        <div className="logo-container">
            <a
              href="/"
              className="logo-link"
            >
              <img src={Logo} alt="Food Donor Logo" className="logo-image" />
            </a>
          </div>
      <h2>Donor Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label>
          <input type="text" name="fullName" placeholder='enter your name' value={formData.fullName} onChange={handleChange} />
          {errors.fullName && <span>{errors.fullName}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" placeholder='enter your email' value={formData.email} onChange={handleChange} />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" placeholder='enter password' value={formData.password} onChange={handleChange} />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" name="confirmPassword" placeholder='confirm your password' value={formData.confirmPassword} onChange={handleChange} />
          {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
        </div>
        <div>
          <label>Phone Number:</label>
          <input type="text" name="phoneNumber" placeholder='enter your phone number' value={formData.phoneNumber} onChange={handleChange} />
          {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
        </div>
        <div>
          <label>Organization Name (optional):</label>
          <input type="text" name="organizationName" placeholder='enter your organization' value={formData.organizationName} onChange={handleChange} />
        </div>
        <div>
          <label>Address:</label>
          <textarea name="address" placeholder='enter your address' value={formData.address} onChange={handleChange}></textarea>
          {errors.address && <span>{errors.address}</span>}
        </div>
        <div>
          <label>
            <input type="checkbox" name="agreeToSafety" checked={formData.agreeToSafety} onChange={handleChange} />
            I agree to the Food Safety Policy
          </label>
          {errors.agreeToSafety && <span>{errors.agreeToSafety}</span>}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
    <Footer/>
    </>
  );
}

export default DonorRegistration;
