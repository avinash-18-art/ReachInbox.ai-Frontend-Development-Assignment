import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { isAuthenticated, logout } from '../services/auth';

const Header = () => {
  const handleLogout = () => {
    logout();
    window.location.href = '/login'; // Redirect to login page after logout
  };

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Link to="/" className="text-2xl font-bold">
          ReachInbox
        </Link>
        {isAuthenticated() && (
          <nav className="ml-6">
            <Link to="/onebox" className="mr-4 hover:underline">
              OneBox
            </Link>
            {/* Add more navigation links here */}
          </nav>
        )}
      </div>
      <div className="flex items-center">
        <ThemeToggle />
        {isAuthenticated() && (
          <button
            className="ml-4 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
            onClick={handleLogout}
          >
            Logout
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
