import { Link } from "react-router-dom";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-10 pb-4 px-10 md:px-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Alumni Plus</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-indigo-400 transition">About</Link></li>
              <li><Link to="/community" className="hover:text-indigo-400 transition">Communities</Link></li>
              <li><Link to="/events" className="hover:text-indigo-400 transition">Events</Link></li>
              <li><Link to="/family" className="hover:text-indigo-400 transition">Alumni Family</Link></li>
              <li><Link to="/blog" className="hover:text-indigo-400 transition">Blog</Link></li>
              <li><Link to="/gallery" className="hover:text-indigo-400 transition">Gallery</Link></li>
            </ul>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="hover:text-blue-400 transition">Services</Link></li>
              <li><Link to="/transcript" className="hover:text-blue-400 transition">Transcript</Link></li>
              <li><a href="http://www.tezu.ernet.in/bus_time/Bus_Timing_01_02_2025.pdf" className="hover:text-blue-400 transition">Bus Timing</a></li>
              <li><a href="http://agnee.tezu.ernet.in:8001/online/login" className="hover:text-blue-400 transition">Guest House</a></li>
              <li><a href="https://www.tezu.ernet.in/" className="hover:text-blue-400 transition">TU Home</a></li>
              <li><a href="https://www.tezu.ernet.in/newsfeeds.html" className="hover:text-blue-400 transition">TU News</a></li>
              <li><a href="https://www.tezu.ernet.in/dba/new/student-magazine.php" className="hover:text-blue-400 transition">Magazine</a></li>
              <li><a href="https://www.tezu.ernet.in/students_affairs/" className="hover:text-blue-400 transition">Student Affairs</a></li>
              <li><a href="https://webmail.tezu.ernet.in/src/login.php" className="hover:text-blue-400 transition">TU Mail</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.youtube.com/c/TezpurUniversity94" className="hover:text-red-500 transition ">YouTube</a>
              <a href="https://www.facebook.com/TezpurUniversity/" className="hover:text-blue-900 transition ">Facebook</a>
              <a href="https://www.linkedin.com/school/tezpur-university/posts/?feedView=all" className="hover:text-blue-400 transition ">LinkedIn</a>
              <a href="https://www.instagram.com/tezpur.uni/?hl=en" className="hover:text-pink-500 transition ">Instagram</a>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Contact Us</h3>
            <p className="text-sm text-gray-300">
              Tezpur University Alumni Association <br />
              Tezpur, Assam, India <br />
              <span className="font-bold">Phone:</span> 123 456-7890
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-10 text-sm text-gray-300">
          <p>© 2024 Alumni Plus, TEZPUR UNIVERSITY. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
