import React from 'react';
import { ArrowLeft, Shield, Lock, Bell, Users, Book, Settings, Mail } from 'lucide-react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-[rgb(226,105,89)] text-white py-16 mt-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl opacity-90">Effective Date: January 10, 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 -mt-8">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-16">
          {/* Introduction Card */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-100">
            <div className="flex items-center gap-4 mb-4">
              <Shield className="w-8 h-8 text-[rgb(226,105,89)]" />
              <h2 className="text-2xl font-bold text-gray-800">Introduction</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Anndaata Connect is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our platform.
            </p>
          </div>

          {/* Information Collection Card */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-100">
            <div className="flex items-center gap-4 mb-4">
              <Lock className="w-8 h-8 text-[rgb(226,105,89)]" />
              <h2 className="text-2xl font-bold text-gray-800">Information We Collect</h2>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[rgb(226,105,89)]"></div>
                <span className="text-gray-700">Personal Identification Information (Name, Email, Phone Number, Address)</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[rgb(226,105,89)]"></div>
                <span className="text-gray-700">Usage Data and Cookies</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[rgb(226,105,89)]"></div>
                <span className="text-gray-700">Donation and Participation Data</span>
              </li>
            </ul>
          </div>

          {/* Information Usage Card */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-100">
            <div className="flex items-center gap-4 mb-4">
              <Bell className="w-8 h-8 text-[rgb(226,105,89)]" />
              <h2 className="text-2xl font-bold text-gray-800">How We Use Your Information</h2>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[rgb(226,105,89)]"></div>
                <span className="text-gray-700">Facilitate food donations and distributions</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[rgb(226,105,89)]"></div>
                <span className="text-gray-700">Improve our services</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[rgb(226,105,89)]"></div>
                <span className="text-gray-700">Communicate with you regarding updates and opportunities</span>
              </li>
            </ul>
          </div>

          {/* Data Protection Card */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-100">
            <div className="flex items-center gap-4 mb-4">
              <Users className="w-8 h-8 text-[rgb(226,105,89)]" />
              <h2 className="text-2xl font-bold text-gray-800">Data Protection</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              We implement appropriate security measures to protect your personal data from unauthorized access, alteration, or disclosure.
            </p>
          </div>

          {/* Third-Party Services Card */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-100">
            <div className="flex items-center gap-4 mb-4">
              <Book className="w-8 h-8 text-[rgb(226,105,89)]" />
              <h2 className="text-2xl font-bold text-gray-800">Third-Party Services</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              We may share your information with trusted partners only to facilitate our services. We ensure that they comply with data protection regulations.
            </p>
          </div>

          {/* Your Rights Card */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-100">
            <div className="flex items-center gap-4 mb-4">
              <Settings className="w-8 h-8 text-[rgb(226,105,89)]" />
              <h2 className="text-2xl font-bold text-gray-800">Your Rights</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              You have the right to access, correct, or delete your personal information. Contact us at{' '}
              <a href="mailto:privacy@anndaata.org" className="text-[rgb(226,105,89)] font-semibold hover:underline">
                privacy@anndaata.org
              </a>{' '}
              for any requests.
            </p>
          </div>

          {/* Contact Section */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-100">
            <div className="flex items-center gap-4 mb-4">
              <Mail className="w-8 h-8 text-[rgb(226,105,89)]" />
              <h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about this Privacy Policy, contact us at{' '}
              <a href="mailto:support@anndaata.org" className="text-[rgb(226,105,89)] font-semibold hover:underline">
                support@anndaata.org
              </a>
            </p>
          </div>

          {/* Back Button */}
          <button 
            onClick={() => window.history.back()} 
            className="flex items-center gap-2 px-6 py-3 bg-[rgb(226,105,89)] text-white rounded-lg hover:bg-opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <ArrowLeft size={20} />
            Back
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;