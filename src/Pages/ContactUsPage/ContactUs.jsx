import React, { useState } from 'react';
import './ContactUs.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Your message has been sent!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
    <Navbar/>
    <div className='contact-page'>
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>Have questions or feedback? We'd love to hear from you!</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" style={{ backgroundColor: 'red', color: 'white' }}>Send Message</button>
      </form>
      <div className="contact-info">
        <p><strong>Address:</strong> Annadaata Organization, NewDelhi</p>
        <p><strong>Email:</strong> support@annadaata.org</p>
        <p><strong>Phone:</strong> +91 987XXXXXXX</p>
      </div>
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default ContactUs;
