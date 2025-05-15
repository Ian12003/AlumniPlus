import React, { useState, useEffect } from "react";
import '../../../../App';

// Import images
import Card1 from '../../../../assets/Card1.jpeg';
import Card2 from '../../../../assets/Card2.jpeg';
import Card3 from '../../../../assets/Card3.jpeg';
import Card4 from '../../../../assets/Card4.jpeg';
import Card5 from '../../../../assets/Card5.jpg';

const slides = [Card1, Card2, Card3, Card4, Card5];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-xl shadow-2xl my-6">
      {/* Slides */}
      <div className="relative h-[40vh] sm:h-[50vh] md:h-[65vh] w-full">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover rounded-xl transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}
      </div>

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-black bg-opacity-40 text-white text-3xl p-2 rounded-full hover:bg-opacity-70 z-20"
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-black bg-opacity-40 text-white text-3xl p-2 rounded-full hover:bg-opacity-70 z-20"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full transition-all duration-300 cursor-pointer ${
              index === currentIndex ? "bg-white scale-110" : "bg-gray-500"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
