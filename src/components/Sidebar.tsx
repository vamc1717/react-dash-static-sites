
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="w-64 bg-white rounded-3xl p-6 flex flex-col h-full">
      {/* Logo */}
      <div className="mb-8">
        <div className="flex items-center">
          <div className="w-12 h-12 border-2 border-lms-teal rounded-lg flex items-center justify-center">
            <span className="text-gray-700 text-2xl font-bold">LMS</span>
          </div>
        </div>
      </div>
      
      {/* Search input */}
      <div className="mb-6 relative">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-gray-400" />
        </div>
        <input 
          type="text" 
          placeholder="Search" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 pr-4 py-2 w-full bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-lms-teal"
        />
      </div>
      
      {/* Navigation Links */}
      <nav className="flex-1">
        <ul className="space-y-2">
          <li>
            <Link 
              to="/" 
              className={`flex items-center p-2 rounded-lg ${
                isActive('/') ? 'text-lms-teal' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
              </svg>
              Dashboard
            </Link>
          </li>
          <li>
            <Link 
              to="/courses" 
              className={`flex items-center p-2 rounded-lg ${
                isActive('/courses') ? 'text-lms-teal' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
              Manage Courses
            </Link>
          </li>
          <li>
            <Link 
              to="#" 
              className="flex items-center p-2 text-gray-600 rounded-lg hover:bg-gray-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                <line x1="12" y1="2" x2="12" y2="22"></line>
                <path d="M2 12h20"></path>
              </svg>
              Track Activities
            </Link>
          </li>
          <li>
            <Link 
              to="#" 
              className="flex items-center p-2 text-gray-600 rounded-lg hover:bg-gray-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              View Ticket
            </Link>
          </li>
        </ul>
      </nav>
      
      {/* User/Admin Section */}
      <div className="mt-auto pt-4 border-t border-gray-100">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 rounded-full bg-gray-300 mr-3 overflow-hidden">
            <img 
              src="https://randomuser.me/api/portraits/men/42.jpg" 
              alt="Admin" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="text-sm font-medium">Admin</div>
            <span className="px-2 py-0.5 bg-teal-500 text-white rounded-md text-xs">Admin</span>
          </div>
        </div>
        
        {/* Settings & Logout */}
        <ul className="space-y-2">
          <li>
            <Link 
              to="#" 
              className="flex items-center p-2 text-gray-600 rounded-lg hover:bg-gray-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>
              Settings
            </Link>
          </li>
          <li>
            <Link 
              to="#" 
              className="flex items-center p-2 text-red-500 rounded-lg hover:bg-gray-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
              </svg>
              Log out
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
