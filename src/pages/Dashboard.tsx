
import { useState } from 'react';
import { ChevronRight, MessageSquare, Star, Ellipsis } from 'lucide-react';
import { Link } from 'react-router-dom';

// User Profile Component
const UserProfile = ({ 
  name, 
  company, 
  imageUrl, 
  highlighted = false 
}: { 
  name: string; 
  company: string; 
  imageUrl: string; 
  highlighted?: boolean;
}) => {
  return (
    <div className={`flex items-center p-4 rounded-lg ${highlighted ? 'bg-lms-highlight' : ''}`}>
      <div className="flex-shrink-0 mr-3">
        <img src={imageUrl} alt={name} className="h-10 w-10 rounded-full object-cover" />
      </div>
      <div className="flex-1">
        <h4 className="text-sm font-medium text-gray-900">{name}</h4>
        <p className="text-xs text-gray-500">{company}</p>
      </div>
      <div className="flex space-x-2">
        {highlighted && (
          <>
            <button className="p-1 text-gray-400 hover:text-gray-600">
              <MessageSquare size={16} />
            </button>
            <button className="p-1 text-gray-400 hover:text-gray-600">
              <Star size={16} />
            </button>
            <button className="p-1 text-gray-400 hover:text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                <path d="M2 2l7.586 7.586"></path>
                <circle cx="11" cy="11" r="2"></circle>
              </svg>
            </button>
          </>
        )}
        <button className="p-1 text-gray-400 hover:text-gray-600">
          <Ellipsis size={16} />
        </button>
      </div>
    </div>
  );
};

// Stat Card Component
const StatCard = ({ title, value, link }: { title: string; value: string; link: string }) => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm flex-1">
      <h3 className="text-gray-600 text-lg mb-2">{title}</h3>
      <div className="flex justify-between items-center">
        <p className="text-4xl font-bold">{value}</p>
        {link && (
          <Link to={link} className="flex items-center text-sm text-lms-teal hover:underline">
            {title.includes("Membership") ? "All Membership" : 
             title.includes("Sales") ? "All goals" : "Revenues report"}
            <ChevronRight size={16} className="ml-1" />
          </Link>
        )}
      </div>
    </div>
  );
};

// Sales Progress Component
const SalesProgress = ({ percentage }: { percentage: number }) => {
  return (
    <div className="relative w-32 h-32">
      <svg className="w-32 h-32" viewBox="0 0 100 100">
        {/* Background circle */}
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="#F3F4F6"
          strokeWidth="8"
        />
        
        {/* Progress circle */}
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="#45DDDD"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={`${percentage * 2.51} 251`}
          strokeDashoffset="0"
          transform="rotate(-90 50 50)"
        />
        
        {/* Percentage text */}
        <text
          x="50"
          y="50"
          fontSize="20"
          textAnchor="middle"
          alignmentBaseline="middle"
          fill="#000"
          fontWeight="bold"
        >
          {percentage}%
        </text>
      </svg>
    </div>
  );
};

// Section Header
const SectionHeader = ({ title, actionText }: { title: string; actionText: string }) => {
  const [sortOption, setSortOption] = useState("Newest");
  
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      <div className="flex items-center text-sm">
        <span className="mr-2 text-gray-500">Sort by</span>
        <div className="relative">
          <select 
            value={sortOption} 
            onChange={(e) => setSortOption(e.target.value)}
            className="appearance-none bg-transparent pr-5 font-medium text-blue-500 cursor-pointer"
          >
            <option value="Newest">Newest</option>
            <option value="Oldest">Oldest</option>
            <option value="A-Z">A-Z</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

// Dashboard Page
const Dashboard = () => {
  const userProfiles = [
    {
      id: 1,
      name: "Chris Friedkly",
      company: "Supermarket Villanova",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Maggie Johnson",
      company: "Oasis Organic Inc.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      highlighted: true,
    },
    {
      id: 3,
      name: "Gael Harry",
      company: "New York Finest Fruits",
      image: "https://randomuser.me/api/portraits/men/36.jpg",
    },
    {
      id: 4,
      name: "Jenna Sullivan",
      company: "Walmart",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      id: 5,
      name: "Gael Harry",
      company: "New York Finest Fruits",
      image: "https://randomuser.me/api/portraits/men/36.jpg",
    },
    {
      id: 6,
      name: "Gael Harry",
      company: "New York Finest Fruits",
      image: "https://randomuser.me/api/portraits/men/36.jpg",
    },
    {
      id: 7,
      name: "Gael Harry",
      company: "New York Finest Fruits",
      image: "https://randomuser.me/api/portraits/men/36.jpg",
    },
  ];

  return (
    <div className="p-6">
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard
          title="Revenues"
          value="$500"
          link="/revenues"
        />
        <StatCard
          title="Lost Membership"
          value="4%"
          link="/membership"
        />
        <div className="bg-white p-6 rounded-3xl shadow-sm flex-1">
          <h3 className="text-gray-600 text-lg mb-2">Sales Increased</h3>
          <div className="flex justify-between items-center">
            <SalesProgress percentage={84} />
            <Link to="/goals" className="flex items-center text-sm text-lms-teal hover:underline">
              All goals <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Users Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Instructors Section */}
        <div className="bg-white p-6 rounded-3xl shadow-sm">
          <SectionHeader title="Instructors" actionText="Newest" />
          <div className="space-y-2">
            {userProfiles.map(profile => (
              <UserProfile
                key={`instructor-${profile.id}`}
                name={profile.name}
                company={profile.company}
                imageUrl={profile.image}
                highlighted={profile.highlighted}
              />
            ))}
          </div>
        </div>

        {/* Students Section */}
        <div className="bg-white p-6 rounded-3xl shadow-sm">
          <SectionHeader title="Students" actionText="Newest" />
          <div className="space-y-2">
            {userProfiles.map(profile => (
              <UserProfile
                key={`student-${profile.id}`}
                name={profile.name}
                company={profile.company}
                imageUrl={profile.image}
                highlighted={profile.highlighted}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
