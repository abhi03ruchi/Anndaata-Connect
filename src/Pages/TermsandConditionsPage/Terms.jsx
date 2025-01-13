import React from 'react';
import './Terms.css';

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      <h1 className="terms-heading">Terms and Conditions</h1>
      <div className="terms-content">
        <h2>User Agreement</h2>
        <p>
          By accessing or using Annadata, you agree to comply with and be bound by the terms set forth
          in this agreement.
        </p>

        <h2>Data Usage Policy</h2>
        <p>
          We collect and store user data to improve the service. Your personal data is kept private
          and will not be shared without consent unless required by law.
        </p>

        <h2>Liability Disclaimer</h2>
        <p>
          Annadata is not responsible for any direct or indirect damage resulting from the use of the
          platform. Use it at your own risk.
        </p>

        <h2>Modification Rights</h2>
        <p>
          We reserve the right to modify or update these terms at any time. Changes will be reflected on
          this page, and continued use of the platform constitutes acceptance of those changes.
        </p>

        <h2>Termination</h2>
        <p>
        We may suspend or terminate your access to the website for any violation of these terms or any illegal or unauthorized use.
        </p>

        <h2>Governing Law</h2>
        <p>
        These terms and conditions are governed by and construed in accordance with the laws of India. Any disputes will be subject to the exclusive jurisdiction of the courts of India.
        </p>

        <h2>Contact Us</h2>
        <p>
        For questions or concerns about these terms and conditions, please contact us at:
        </p>
         <pre>
         Email: support@anndaata.org <br />
         Phone: +xxxxxxxxxx
        </pre>
         
        
      </div>
    </div>
  );
};

export default TermsAndConditions;
