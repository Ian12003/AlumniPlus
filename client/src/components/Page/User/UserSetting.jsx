import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import settings from '../../../assets/settings.png';
import logout from '../../../assets/logout.png';
import axios from 'axios';

const UserSettings = () => {
  const [user, setUser] = useState({ name: '', email: '' });
  useEffect(() => {
    const fetchUserInfo = async () => {
      const token = localStorage.getItem('token'); // temporarily using this
      try {
        const res = await axios.get('http://localhost:5000/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          
        });
        setUser(res.data);
       // console.log("Token used:", token);
      } catch (err) {
        console.error('Failed to fetch user info:', err);
      }
    };

    fetchUserInfo();}, []);
  const [form, setForm] = useState({
    password: '',
    newPassword: '',
    confirmPassword: '',
    notifications: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform password validation
    if (form.newPassword !== form.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const token = localStorage.getItem('token'); // Assuming token is saved in localStorage
      const response = await axios.post('http://localhost:5000/update-password', {
        currentPassword: form.password,
        newPassword: form.newPassword,
        confirmPassword: form.confirmPassword,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert('Password updated successfully!');
      console.log(response.data); // Log the server response
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || 'An error occurred while updating the password');
    }
  };

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
          <ul className="space-y-3">
            <li>
              <Link to="/dashboard" className="flex items-center space-x-2 hover:text-indigo-900 transition">
                <img className="w-5" src={settings} alt="Settings" />
                <span>General</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/usersetting" className="flex items-center space-x-2 hover:text-indigo-900 transition">
                <img className="w-5" src={settings} alt="Settings" />
                <span>Change Password</span>
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
      <main className="flex-1 p-6">
        <div className="bg-indigo-400 text-white text-center py-3 rounded-md text-lg font-bold">
          Change Password
        </div>

        {/* Settings Form */}
        <form onSubmit={handleSubmit} className="mt-6 bg-white rounded shadow p-6 space-y-5 max-w-2xl mx-auto">
          <div>
            <label className="block text-gray-700 font-medium">Current Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-300"
              placeholder="••••••••"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">New Password</label>
            <input
              type="password"
              name="newPassword"
              value={form.newPassword}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-300"
              placeholder="••••••••"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Confirm New Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-300"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded w-full transition"
          >
            Save Settings
          </button>
        </form>
      </main>
    </div>
  );
};

export default UserSettings;
