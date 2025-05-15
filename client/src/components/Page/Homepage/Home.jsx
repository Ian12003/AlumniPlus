import React from 'react';
import { TfiAnnouncement } from 'react-icons/tfi';
import ImageSlider from './ImageSlider/ImageSlider';
import Achievement from './Achievement/Achievement';
import '../../../App';
import Board from './Board';
import { useState, useEffect } from 'react';
const Home = () => {
  const [announcement, setAnnouncement] = useState('');

  useEffect(() => {
    const fetchAnnouncement = async () => {
      try {
        const res = await fetch('/api/announcement');
        const data = await res.json();
        if (res.ok) {
          setAnnouncement(data.message);
        }
      } catch (err) {
        console.error("Failed to load announcement:", err);
      }
    };
    fetchAnnouncement();
  }, []);
  return (
    <div className="bg-blue-50 mt-5">
      {announcement && (
        <div className="bg-black p-1 text-white flex items-center justify-center text-sm md:text-base font-semibold shadow-md animate-fadeIn">
          <TfiAnnouncement className="text-lg md:text-2xl mr-2" />
          <p>{announcement}</p>
        </div>
      )}

      {/* Welcome Section */}
      <div className="flex flex-col items-center text-center px-4 lg:px-20 mt-10 animate-fadeInUp">
        <p className="text-3xl md:text-4xl text-blue-950 font-bold">Welcome Home,</p>
        <p className="text-3xl md:text-4xl font-semibold text-blue-800">Tezpur University Alumni!</p>
        <p className="mt-5 text-sm md:text-lg font-medium max-w-3xl text-gray-700">
          Let's celebrate our shared journey, rekindle cherished memories, and envision a brighter future together. 
          United as one family, we inspire greatness.
        </p>
      </div>

      {/* Image Slider */}
      <div className="mt-10">
        <ImageSlider />
      </div>

      {/* Alumni Achievements Section */}
      <div className="h-14 bg-gradient-to-r from-purple-400 to-indigo-400 mt-10 flex justify-center items-center p-2 shadow-md">
        <p className="font-semibold text-xl md:text-3xl text-black text-center animate-fadeIn">Get the highlights of Alumni Achievements</p>
      </div>
      
      <div className="my-6 flex justify-center md:px-20">
        <span className="bg-indigo-400 text-white uppercase font-semibold text-2xl p-2 rounded-md shadow-md">Our Inspirations</span>
      </div>
      
      <div>
        <Achievement />
      </div>
      
      <div className="mt-10">
        <Board />
      </div>
    </div>
  );
};

export default Home;
