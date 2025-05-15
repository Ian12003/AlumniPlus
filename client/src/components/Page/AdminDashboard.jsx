import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddAdmin = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("adminToken");
  
      const res = await axios.post(
        "http://localhost:5000/api/admin/add",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      setMessage("Admin added successfully.");
      setFormData({ name: "", email: "", password: "" });
    } catch (err) {
      console.error("Error adding admin:", err);
      if (err.response) {
        console.log("Server responded with:", err.response.data);
        setMessage(err.response.data.message || "Failed to add admin.");
      } else {
        console.error("Request failed:", err.message);
        setMessage("Network error or server not responding.");
      }
          }
  };
  
  

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-700">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      <div className="bg-white p-6 rounded shadow max-w-lg">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Add New Admin
        </h2>

        {message && (
          <div className="mb-4 text-sm text-green-600 bg-green-100 p-2 rounded">
            {message}
          </div>
        )}

        <form onSubmit={handleAddAdmin} className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-600">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded border-gray-300"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded border-gray-300"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded border-gray-300"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
          >
            Add Admin
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;
