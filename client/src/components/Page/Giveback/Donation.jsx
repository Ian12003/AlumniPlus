import React, { useState } from "react";
import image from "../../../assets/donation.jpg";

const Donation = () => {
  const [inputs, setInputs] = useState({});
  const [showPopup, setShowPopup] = useState(false);

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
        <p>🌍 Giving Back: One Donation at a Time</p>
      </div>

      {/* Main Container */}
      <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden p-10 mt-4">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={image}
            alt="Donation"
            className="rounded-lg shadow-md w-full h-auto md:h-full object-cover"
          />
          <div className="text-center mt-4">
            <span
              className="text-indigo-600 font-semibold cursor-pointer hover:underline"
              onClick={() => setShowPopup(true)}
            >
              View Bank Details
            </span>
          </div>
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

            {/* Title */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Title:</label>
              <input
                type="text"
                name="title"
                placeholder="Title Here"
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
                placeholder="Share your achievements"
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

      {/* Bank Details Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="w-96 p-6 bg-white text-black rounded-lg shadow-2xl relative">
            <button
              className="absolute top-2 cursor-pointer right-2 text-gray-600 hover:text-black text-xl"
              onClick={() => setShowPopup(false)}
            >
              ✖
            </button>
            <p className="text-lg font-bold mb-4 text-indigo-700">
              Bank Account Details
            </p>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Name of Account Holder:</strong> Tezpur University Alumni
                Association
              </p>
              <p>
                <strong>Bank Name:</strong> State Bank of India
              </p>
              <p>
                <strong>Branch Name:</strong> Tezpur University Branch, Napaam,
                Tezpur, Assam
              </p>
              <p>
                <strong>IFS Code:</strong>{" "}
                <span className="font-mono">SBIN0014259</span>
              </p>
              <p>
                <strong>Account Number:</strong>{" "}
                <span className="font-mono">10501586524</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Donation;
