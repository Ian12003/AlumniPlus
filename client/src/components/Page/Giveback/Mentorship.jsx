import React, { useState } from "react";
import image from "../../../assets/login.jpg";

const Mentorship = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-indigo-50 to-indigo-200 px-4 py-3">
      {/* Header */}
      <div className="w-fit px-4 py-2 bg-indigo-500 text-white font-semibold rounded-md shadow-lg">
        <p>🌟 Be the Change, Step into Mentorship</p>
      </div>

      {/* Main Container */}
      <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden p-10 mt-4">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img src={image} alt="Achievement" className="rounded-lg shadow-md w-full h-auto md:h-full object-cover" />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg border-l-4 border-indigo-500 shadow-md">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Name */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Name:</label>
              <input
                type="text"
                name="username"
                placeholder="Enter your Name"
                value={inputs.username || ""}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              />
            </div>

            {/* Alumni ID */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Alumni ID:</label>
              <input
                type="text"
                name="alumniId"
                placeholder="Enter your Alumni ID"
                value={inputs.alumniId || ""}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                value={inputs.email || ""}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              />
            </div>

            {/* Eligibility */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Eligibility:</label>
              <input
                type="text"
                name="title"
                placeholder="Enter Eligibility Criteria"
                value={inputs.title || ""}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              />
            </div>

            {/* Description */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Description:</label>
              <textarea
                name="description"
                placeholder="Share your achievements..."
                value={inputs.description || ""}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none h-24"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="p-3 bg-indigo-500 text-white rounded-lg font-semibold shadow-md hover:bg-indigo-600 transition-all"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Mentorship;
