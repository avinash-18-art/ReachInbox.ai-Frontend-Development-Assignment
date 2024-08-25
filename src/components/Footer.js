import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <div className="container mx-auto">
        <p className="mb-2">&copy; {new Date().getFullYear()} ReachInbox.ai. All rights reserved.</p>
        <nav>
          <a href="https://www.yourwebsite.com/privacy-policy" className="text-gray-400 hover:text-gray-300 mx-2">
            Privacy Policy
          </a>
          <a href="https://www.yourwebsite.com/terms-of-service" className="text-gray-400 hover:text-gray-300 mx-2">
            Terms of Service
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
