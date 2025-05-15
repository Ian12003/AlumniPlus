import React from 'react';
import user from '../../../assets/user.png';
import blog from '../../../assets/blog.png';
import achievement from '../../../assets/achievement.png';
import community from '../../../assets/community.png';
import settings from '../../../assets/settings.png';
import logout from '../../../assets/logout.png';
import { Link } from 'react-router-dom';

const UserBlog = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-indigo-300 p-5 flex flex-col text-white">
        <div className="flex items-center space-x-3 border-b pb-4">
          <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-lg font-bold">EP</div>
          <div>
            <h2 className="text-lg font-semibold">Eli Pame</h2>
            <p className="text-sm break-words">eli@gmail.com</p>
          </div>
        </div>

        <nav className="mt-5 flex-1">
          <ul className="space-y-2">
            <li>
              <Link to="/dashboard" className="flex items-center space-x-2 hover:text-indigo-700">
                <img className="w-5" src={user} alt="User" />
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
                <img className="w-5" src={settings} alt="Setting" />
                <span>Settings</span>
              </Link>
            </li>
          </ul>
        </nav>

        <Link to="/" className="mt-6">
          <button className="w-full flex items-center justify-center space-x-2 bg-indigo-500 py-2 px-4 rounded hover:bg-indigo-600 transition">
            <img className="w-5 bg-white rounded-full" src={logout} alt="Logout" />
            <span>Logout</span>
          </button>
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6 overflow-auto">
        <div className="bg-indigo-400 text-white text-center py-3 rounded-md text-lg font-bold">Blog</div>

        {/* You can add your blog content below */}
        <div className="mt-6 bg-white p-4 rounded shadow">
          <p className="text-gray-600">Welcome to your blog section. Start writing something amazing!</p>
        </div>
      </div>
    </div>
  );
};

export default UserBlog;
