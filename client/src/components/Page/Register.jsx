import React, { useState } from "react";
import image from "../../assets/admin.jpg";
import { useEffect } from "react";
const Register = () => {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // true if token exists
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleFile = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(URL.createObjectURL(selectedFile));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const token = localStorage.getItem("token");
  
    if (!token) {
      setMessage("❌ You must be logged in to submit a request.");
      return;
    }
  
    const { email, password } = inputs;
  
    if (!email || !password) {
      setMessage("❌ Email and password are required to request alumni ID.");
      return;
    }
  
    try {
      const res = await fetch("http://localhost:5000/api/request-alumni-id", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await res.json();
      console.log("Response from server:", data);
  
      if (res.ok) {
        const { alumni_id } = data;
        setMessage(`✅ Your Alumni ID is: ${alumni_id}`);
      } else {
        setMessage("❌ " + (data.error || "Request failed"));
      }
      
    } catch (err) {
      console.error("Error submitting request:", err);
      setMessage("❌ Server error");
    }
  };
  
  
  

  const fields = [
    { label: "Name", name: "name" },
    { label: "Email", name: "email", type: "email" },
    { label: "Password", name: "password", type: "password" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-indigo-50 to-indigo-200 px-4 py-3">
      {/* Header */}
      <div className="w-fit px-4 py-2 bg-indigo-500 text-white font-semibold rounded-md shadow-lg">
        Get your Alumni ID
      </div>

      {/* Main Container */}
      <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden p-10 mt-4">
        {/* Image Upload Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <img
            src={file || image}
            alt="Profile Preview"
            className="rounded-lg shadow-md w-64 h-64 object-cover border-4 border-indigo-500"
          />
          <div className="mt-4 w-full text-center">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              Upload Image:
            </h2>
            <input
              type="file"
              onChange={handleFile}
              className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-500 file:text-white hover:file:bg-indigo-600 cursor-pointer"
            />
          </div>
          <button
            type="button"
            className="mt-2 px-4 py-2 bg-indigo-500 text-white rounded-md shadow hover:bg-indi-600"
          >
            Upload Image
          </button>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg border-l-4 border-indigo-500 shadow-md">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {fields.map(({ label, name, type = "text" }) => (
              <div key={name} className="flex flex-col">
                <label className="text-gray-700 font-medium">{label}:</label>
                <input
                  type={type}
                  name={name}
                  value={inputs[name] || ""}
                  onChange={handleChange}
                  placeholder={`Enter your ${label}`}
                  className="mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                />
              </div>
            ))}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!isLoggedIn}
              className={`p-3 ${
                isLoggedIn
                  ? "bg-indigo-500 hover:bg-indigo-600"
                  : "bg-gray-400 cursor-not-allowed"
              } text-white font-semibold rounded-lg shadow-md transition-all w-full md:w-fit mx-auto`}
            >
              {isLoggedIn ? "Submit" : "Log in to Submit"}
            </button>

            {message && (
  <div className="text-center mt-4 p-3 bg-indigo-100 text-indigo-800 font-medium rounded-md shadow">
    {message}
  </div>

            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
