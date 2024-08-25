import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Dashboard</h2>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/home" className="block py-2 px-4 rounded hover:bg-gray-700">
              Home
            </Link>
          </li>
          <li>
            <Link to="/onebox" className="block py-2 px-4 rounded hover:bg-gray-700">
              OneBox
            </Link>
          </li>
          <li>
            <Link to="/profile" className="block py-2 px-4 rounded hover:bg-gray-700">
              Profile
            </Link>
          </li>
          <li>
            <Link to="/settings" className="block py-2 px-4 rounded hover:bg-gray-700">
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
