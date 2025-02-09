import React from 'react';
import { ChevronRight, Shield, FileText, Globe, MailIcon, PhoneCall } from 'lucide-react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './Terms.css'

const TermsAndConditions = () => {
  return (
    <>
      <Navbar />
      <div className="contact-page">
        <div className="terms-container">
          <h1 className="terms-heading">Terms and Conditions</h1>

          <div className="terms-content">
            {[
              {
                icon: <Shield className="text-[#c0392b] w-8 h-8" />,
                title: "User Agreement",
                content: "By accessing Annadata, you agree to comply with and be bound by the terms set forth in this agreement."
              },
              {
                icon: <FileText className="text-[#c0392b] w-8 h-8" />,
                title: "Data Usage Policy",
                content: "We collect and store user data to improve the service. Your personal data is kept private and will not be shared without consent unless required by law."
              },
              {
                icon: <Globe className="text-[#c0392b] w-8 h-8" />,
                title: "Liability Disclaimer",
                content: "Annadata is not responsible for any direct or indirect damage resulting from the use of the platform. Use it at your own risk."
              },
              {
                icon: <ChevronRight className="text-[#c0392b] w-8 h-8" />,
                title: "Modification Rights",
                content: "We reserve the right to modify or update these terms at any time. Changes will be reflected on this page, and continued use of the platform constitutes acceptance of those changes."
              },
              {
                icon: <ChevronRight className="text-[#c0392b] w-8 h-8" />,
                title: "Termination",
                content: "We may suspend or terminate your access to the website for any violation of these terms or any illegal or unauthorized use."
              },
              {
                icon: <Globe className="text-[#c0392b] w-8 h-8" />,
                title: "Governing Law",
                content: "These terms and conditions are governed by and construed in accordance with the laws of India. Any disputes will be subject to the exclusive jurisdiction of the courts of India."
              }
            ].map((section, index) => (
              <div key={index} className="section-item">
                <div className="section-icon">{section.icon}</div>
                <div className="section-content">
                  <h2>{section.title}</h2>
                  <p>{section.content}</p>
                </div>
              </div>
            ))}

            <h2>Contact Us</h2>
            <pre>
              Email: support@anndaata.org <br />
              Phone: +xxxxxxxxxx
            </pre>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;