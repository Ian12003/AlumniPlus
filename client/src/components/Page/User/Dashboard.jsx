import React, { useEffect, useState,  } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import userIcon from '../../../assets/user.png';
import blog from '../../../assets/blog.png';
import achievement from '../../../assets/achievement.png';
import community from '../../../assets/community.png';
import settings from '../../../assets/settings.png';
import logout from '../../../assets/logout.png';
import axios from 'axios';

const Dashboard = () => {
  const [user, setUser] = useState({ name: '', email: '' });
  const navigate = useNavigate(); 
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/'); 
  };
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }
  
    const fetchUserInfo = async () => {
      try {
        const res = await axios.get('http://localhost:5000/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(res.data);
      } catch (err) {
        console.error('Failed to fetch user info:', err);
      }
    };
  
    fetchUserInfo();
  }, []);
  

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-indigo-300 p-5 flex flex-col text-white">
        <div className="flex items-center space-x-3 border-b pb-4">
          <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-lg font-bold">
          {user.name?.split(' ').map(namePart => namePart?.[0]?.toUpperCase()).join('')}
          </div>
          <div>
            <h2 className="text-lg font-semibold">{user.name}</h2>
            <p className="text-sm">{user.email}</p>
          </div>
        </div>
        <nav className="mt-5 flex-1">
          <ul className="space-y-2">
            <li>
              <Link to="/dashboard" className="flex items-center space-x-2 hover:text-indigo-700">
                <img className="w-5" src={userIcon} alt="User" />
                <span>General</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/userblog" className="flex items-center space-x-2 hover:text-indigo-700">
                <img className="w-5" src={blog} alt="Blog" />
                <span>Blog</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/usercommunity" className="flex items-center space-x-2 hover:text-indigo-700">
                <img className="w-5" src={community} alt="Community" />
                <span>Communities</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/userachievement" className="flex items-center space-x-2 hover:text-indigo-700">
                <img className="w-5" src={achievement} alt="Achievement" />
                <span>Achievements</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/usersetting" className="flex items-center space-x-2 hover:text-indigo-700">
                <img className="w-5" src={settings} alt="Settings" />
                <span>Change Password</span>
              </Link>
            </li>
          </ul>
        </nav>
        <Link to="/" className="mt-6">
        <button
      onClick={handleLogout}
      className="w-full flex items-center justify-center space-x-2 bg-indigo-500 py-2 px-4 rounded hover:bg-indigo-600 transition mt-6"
    >
      <img className="w-5 bg-white rounded-full" src={logout} alt="Logout" />
      <span>Logout</span>
    </button>

        </Link>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6 overflow-auto">
        <div className="bg-indigo-400 text-white text-center py-3 rounded-md text-lg font-bold">DASHBOARD</div>

        <div className="flex flex-col md:flex-row mt-6 space-y-6 md:space-y-0 md:space-x-6">
          {/* Right Box */}
          <div className="w-full md:w-2/3 bg-indigo-200 p-6 rounded-md shadow-md">
            <div className="flex justify-between items-center flex-wrap gap-2">
              <h2 className="text-lg font-bold">Profile</h2>
            </div>
            <div className="mt-4 space-y-3">
              <div className="bg-white p-3 rounded shadow-md">Name: <span className="font-semibold">{user.name}</span></div>
              <div className="bg-white p-3 rounded shadow-md">Email: <span className="font-semibold">{user.email}</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
