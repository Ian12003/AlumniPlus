import React from "react";
import welcome from "../../assets/welcome.jpg";
import growth from "../../assets/growth.jpg";
import connect from "../../assets/connect.jpg";
import Admin from "./Admin";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="px-4 md:px-12 lg:px-18">
      <div className="flex justify-center">
        <p className="w-fit p-2 bg-indigo-400 text-xl text-white font-semibold rounded-md text-center m-5">
          <span>WHO ARE WE?</span>
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-around gap-6">
        <div className="w-full lg:w-1/3 bg-indigo-300 rounded-2xl p-6 lg:p-10 py-5">
          <p className="text-lg lg:text-xl text-center text-white font-medium">
            TU ALUMNI CONNECT PORTAL
          </p>
          <p className="mt-4 lg:mt-6 font-semibold text-sm md:text-base">
          Welcome to our Alumni Portal, a dynamic platform designed to foster connections, celebrate achievements, and facilitate meaningful contributions to the institution that shaped your journey. We take pride in building a robust bridge between the past and the present, connecting alumni with their alma mater and providing a space to share experiences, opportunities, and successes.
          </p>
        </div>
        <div className="w-full lg:w-1/3 flex justify-center">
          <img src={welcome} alt="Welcome" className="w-full h-auto rounded-lg" />
        </div>
        <div className="w-full lg:w-1/3 bg-indigo-300 rounded-2xl p-6 lg:p-10 py-5">
          <p className="text-lg lg:text-xl text-center text-white font-medium">
            OUR MISSION AND VISION
          </p>
          <p className="mt-4 lg:mt-6 font-semibold text-sm md:text-base">
          Our mission is to create a vibrant and engaged community of alumni who actively contribute to the growth and success of our alma mater. We envision a platform where connections thrive, knowledge is shared, and each graduate plays a significant role in shaping the future of our college.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-around gap-6 mt-8">
        <div className="w-full lg:w-1/3 flex justify-center">
          <img src={growth} alt="Growth" className="w-full h-auto rounded-lg" />
        </div>
        <div className="w-full lg:w-1/3 bg-indigo-300 rounded-2xl p-6 lg:p-10">
          <p className="text-lg lg:text-xl text-center text-white font-medium mb-4">
            KEY FEATURES
          </p>
          <ul className="list-disc text-left mx-auto w-fit text-xl md:text-base">
          <li><strong>Alumni Registration:</strong>Obtain a unique Alumni ID by registering on our portal, becoming an integral part of our alumni community.</li>
          <li><strong>Achievement Sharing:</strong> Share your successes, milestones, and achievements with your fellow alumni and inspire the upcoming generations.</li>
          <li><strong>Opportunity Sharing:</strong> Contribute to the growth of your alma mater by posting and discovering job opportunities, internships, and collaborations</li>
          <li><strong>College Contributions:</strong>Give back to the college community by providing valuable insights, mentorship, and support to current students and recent graduates.</li>
          <li><strong>Event Updates:</strong>Stay informed about upcoming alumni activities, events, reunions, and networking opportunities.</li>
        </ul>
        </div>
        <div className="w-full lg:w-1/3 flex justify-center">
          <img src={connect} alt="Connect" className="w-full h-auto rounded-lg" />
        </div>
      </div>

      <div className="p-6 lg:p-10 bg-indigo-300 mt-8 rounded-2xl mb-4 text-center">
        <p className="text-white font-medium text-lg lg:text-xl">
          WHY JOIN OUR ALUMNI PORTAL?
        </p>
        <p className="text-sm md:text-base font-medium my-4">
          Joining our Alumni Portal Offers a Myriad of Benefits
        </p>
        <ul className="list-disc text-left mx-auto w-fit text-xl md:text-base">
          <li><strong>Networking:</strong> Connect with fellow alumni, expand your professional network, and discover new opportunities.</li>
          <li><strong>Mentorship:</strong> Provide mentorship to current students and receive guidance from experienced alumni in your field.</li>
          <li><strong>Stay Updated:</strong> Receive regular updates on college news, events, and the achievements of your peers.</li>
          <li><strong>Contribution:</strong> Give back to the college community by sharing your experiences, insights, and expertise.</li>
          <li><strong>Reconnect:</strong> Reconnect with old friends, classmates, and professors, fostering a sense of community and belonging</li>
        </ul>
      </div>

     <Admin/>
      <div className="text-center pt-4 text-lg lg:text-2xl mb-8">
        <p className="font-bold">Ready to embark on this exciting journey?</p>
        <p className="font-bold mt-2">
          Register now and become a vital part of our thriving alumni community.
        </p>
        <p className="font-light mt-2">Your unique Alumni ID awaits!</p>
        <div className="flex justify-center mt-4">
          <button className="bg-black text-white px-6 py-2 text-lg lg:text-2xl rounded-lg hover:bg-indigo-400">
           <Link to = '/register'>Register Now!</Link>
          </button>
        </div>
        <div className="mt-6">
  <p className="text-sm font-medium text-gray-600">
    Are you an admin? 
    <Link to="/about/login" className="text-indigo-700 font-semibold ml-1 hover:underline">
      Login here
    </Link>
  </p>
</div>

      </div>
    </div>
  );
};

export default About;
