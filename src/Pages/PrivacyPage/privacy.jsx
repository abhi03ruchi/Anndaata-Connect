import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <h1>Privacy Policy</h1>
      <p>Effective Date: January 10, 2025</p>
      
      <section>
        <h2>Introduction</h2>
        <p>Anndaata Connect is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our platform.</p>
      </section>
      
      <section>
        <h2>Information We Collect</h2>
        <ul>
          <li>Personal Identification Information (Name, Email, Phone Number, Address)</li>
          <li>Usage Data and Cookies</li>
          <li>Donation and Participation Data</li>
        </ul>
      </section>

      <section>
        <h2>How We Use Your Information</h2>
        <p>We use your information to:</p>
        <ul>
          <li>Facilitate food donations and distributions</li>
          <li>Improve our services</li>
          <li>Communicate with you regarding updates and opportunities</li>
        </ul>
      </section>

      <section>
        <h2>Data Protection</h2>
        <p>We implement appropriate security measures to protect your personal data from unauthorized access, alteration, or disclosure.</p>
      </section>

      <section>
        <h2>Third-Party Services</h2>
        <p>We may share your information with trusted partners only to facilitate our services. We ensure that they comply with data protection regulations.</p>
      </section>

      <section>
        <h2>Your Rights</h2>
        <p>You have the right to access, correct, or delete your personal information. Contact us at <strong>privacy@anndaata.org</strong> for any requests.</p>
      </section>

      <section>
        <h2>Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. Please review it periodically for any changes.</p>
      </section>

      <p>If you have any questions about this Privacy Policy, contact us at <strong>support@anndaata.org</strong>.</p>
    </div>
  );
};

export default PrivacyPolicy;
