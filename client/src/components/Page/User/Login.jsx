import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import loginImg from "../../../assets/login.jpg";
import userIcon from "../../../assets/user.png";
import emailIcon from "../../../assets/email.png";
import padlock from "../../../assets/padlock.png";

const Login = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({
    name: "",
    rollno: "",
    email: "",
    password: "",
    department: "",
    programme: "",
    passout_year: "",
  });
  
  const handleLogin = async () => {
    const { email, password } = loginData;

    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/login", { email, password });
      alert("Login successful!");
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Login failed");
    }
  };

  const handleSignup = async () => {
    const { name, rollno, email, password, department, programme, passout_year } = signupData;

    if (!name || !rollno || !email || !password || !department || !programme || !passout_year) {
      alert("Please fill out all fields.");
      return;
    }

    if (!/^\d{4}$/.test(passout_year)) {
      alert("Passout year must be a 4-digit number.");
      return;
    }

    if (department.length < 3 || programme.length < 3) {
      alert("Department and Programme must be at least 3 characters long.");
      return;
    }

    try {
      await axios.post("http://localhost:5000/signup", signupData);
      alert("Signup successful! You can now log in.");
      setSignupData({
        name: "",
        rollno: "",
        email: "",
        password: "",
        department: "",
        programme: "",
        passout_year: "",
      });
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="flex flex-col md:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-5xl">
        {/* Login Section */}
        <div className="w-full md:w-1/2 p-8 bg-white flex flex-col items-center justify-center">
          <img
            src={loginImg}
            alt="login"
            className="w-60 rounded-xl shadow-md mb-6"
          />
          <h2 className="text-2xl font-bold text-center text-indigo-800 mb-1">Welcome</h2>
          <p className="text-center text-gray-600 text-sm mb-6">
            <span className="font-semibold">Tezpur Alumni</span>
            <br />
            Keep Connected With Us
          </p>
          <div className="w-full max-w-xs space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={loginData.email}
              onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
              className="w-full px-4 py-2 bg-indigo-50 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <input
              type="password"
              placeholder="Password"
              value={loginData.password}
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
              className="w-full px-4 py-2 bg-indigo-50 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <button
              onClick={handleLogin}
              className="w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-500 transition"
            >
              Log In
            </button>
          </div>
        </div>

        {/* Signup Section */}
        <div className="w-full md:w-1/2 p-8 bg-indigo-200 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-center text-indigo-900 mb-6">
            Create a New Account
          </h2>
          <div className="w-full max-w-xs space-y-4">
            <div className="flex items-center bg-white px-4 py-2 rounded-xl shadow-sm">
              <img className="h-5 mr-2" src={userIcon} alt="user" />
              <input
                type="text"
                placeholder="Username"
                value={signupData.name}
                onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
                className="w-full bg-transparent outline-none"
              />
            </div>

            <input
              type="text"
              placeholder="Roll No"
              value={signupData.rollno}
              onChange={(e) => setSignupData({ ...signupData, rollno: e.target.value })}
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded-xl outline-none"
            />

            <input
              type="text"
              placeholder="Department"
              value={signupData.department}
              onChange={(e) => setSignupData({ ...signupData, department: e.target.value })}
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded-xl outline-none"
            />

            <input
              type="text"
              placeholder="Programme"
              value={signupData.programme}
              onChange={(e) => setSignupData({ ...signupData, programme: e.target.value })}
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded-xl outline-none"
            />

            <input
              type="text"
              placeholder="Passout Year"
              value={signupData.passout_year}
              onChange={(e) => setSignupData({ ...signupData, passout_year: e.target.value })}
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded-xl outline-none"
            />

            <div className="flex items-center bg-white px-4 py-2 rounded-xl shadow-sm">
              <img className="h-5 mr-2" src={emailIcon} alt="email" />
              <input
                type="email"
                placeholder="Email"
                value={signupData.email}
                onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                className="w-full bg-transparent outline-none"
              />
            </div>

            <div className="flex items-center bg-white px-4 py-2 rounded-xl shadow-sm">
              <img className="h-5 mr-2" src={padlock} alt="password" />
              <input
                type="password"
                placeholder="Password"
                value={signupData.password}
                onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                className="w-full bg-transparent outline-none"
              />
            </div>

            <button
              onClick={handleSignup}
              className="w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
