import React, { useRef } from 'react';
import I1 from '../../assets/image1.jpg'
import I2 from '../../assets/image2.jpg'
import I3 from '../../assets/image3.jpg'
import I4 from '../../assets/image4.jpg'
import I5 from '../../assets/image5.jpg'
import I6 from '../../assets/image6.jpg'
import I7 from '../../assets/image7.jpg'
import I8 from '../../assets/image8.jpg'
import I9 from '../../assets/image9.jpg'
import Gallery1 from './Gallery1';
const Gallery = () => {
  const galleryRef = useRef(null);

  const btnPrev = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const btnNext = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  // Sample Images (Replace these with actual image URLs)
  const images = [
    I1,I2,I3,I4,I5,I6,I7,I8,I9
  ];

  return (
    <div className="relative overflow-hidden p-6 bg-indigo-100">
      <Gallery1/>
      <div className="w-fit px-4 py-2 mb-3 ml-4 text-xl  text-black underline bg-indigo-300 font-semibold rounded-md shadow-lg">
        Convocation '24
      </div>
      {/* Left Navigation Button */}
      <button 
        onClick={btnPrev} 
        className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 bg-gray-700 text-white text-3xl px-4 py-2 rounded-full hover:bg-gray-900 transition">
        &#10094;
      </button>

      {/* Right Navigation Button */}
      <button 
        onClick={btnNext} 
        className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 bg-gray-700 text-white text-3xl px-4 py-2 rounded-full hover:bg-gray-900 transition">
        &#10095;
      </button>

      {/* Image Gallery */}
      <div ref={galleryRef} className="flex overflow-x-auto scroll-smooth scrollbar-hide space-x-4 p-2">
        {images.map((img, index) => (
          <div key={index} className="flex-shrink-0 w-80 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition">
            <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-52 object-cover rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
