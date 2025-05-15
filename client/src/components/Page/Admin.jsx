import React, { useState, useEffect } from "react";
import axios from "axios";
import avatar from '../../assets/admin.jpg'; // Path to default avatar image

const Admin = () => {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    // Fetch admins when the component mounts
    const fetchAdmins = async () => {
      try {
        // Send request to backend to get all admins
        const response = await axios.get("http://localhost:5000/api/admin/list");
        setAdmins(response.data); // Set the admins data in state
      } catch (error) {
        console.error("Error fetching admins:", error);
      }
    };

    fetchAdmins(); // Call the fetch function
  }, []);

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 ">
      <h2 className="bg-indigo-500 text-white text-xl font-bold py-2 px-8 rounded-lg shadow-md mb-8">
        ADMIN MEMBERS
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {admins.length > 0 ? (
          admins.map((admin) => (
            <div
              key={admin.id}
              className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Admin Avatar */}
              <img
                src={avatar} // Default avatar image (can replace with profile image if needed)
                alt={admin.name}
                className="w-24 h-24 rounded-full mb-4 border-4 border-indigo-500 shadow-md"
              />

              {/* Admin Info */}
              <p className="font-semibold text-lg text-gray-900">{admin.name}</p>

              {/* Email */}
              <a
                href={`mailto:${admin.email}`}
                className="mt-3 text-indigo-500 hover:text-indigo-700 font-medium underline transition"
              >
                {admin.email}
              </a>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No admins found</p>
        )}
      </div>
    </div>
  );
};

export default Admin;
