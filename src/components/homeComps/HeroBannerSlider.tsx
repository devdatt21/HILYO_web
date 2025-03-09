"use client";
import React, { useState, useEffect } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

interface BannerSlide {
  id: number;
  imageUrl: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const HeroBannerSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Sample banner data - replace with your own
  const bannerSlides: BannerSlide[] = [
    {
      id: 1,
      imageUrl: "/images/banner2.jpeg",
      title: "Spring Collection 2025",
      subtitle: "Discover the latest trends in women's fashion",
      buttonText: "Shop Now",
      buttonLink: "/collections/spring-2025",
    },
    {
      id: 2,
      imageUrl: "/images/banner1.jpeg",
      title: "Summer Essentials",
      subtitle: "Get ready for the warm season with our curated collection",
      buttonText: "Explore",
      buttonLink: "/collections/summer-essentials",
    },
    {
      id: 3,
      imageUrl: "/images/banner3.jpeg",
      title: "Special Offer",
      subtitle: "Up to 40% off selected items for a limited time",
      buttonText: "View Offers",
      buttonLink: "/collections/sale",
    },
  ];

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev === bannerSlides.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev === 0 ? bannerSlides.length - 1 : prev - 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const goToSlide = (index: number) => {
    if (!isAnimating && index !== currentSlide) {
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  // Auto-rotate slides with improved dependency handling
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setCurrentSlide((prev) => (prev === bannerSlides.length - 1 ? 0 : prev + 1));
        setTimeout(() => setIsAnimating(false), 500);
      }
    }, 4000); // Changed to 5000ms (5 seconds) for a more natural rotation
    
    return () => clearInterval(interval);
  }, [isAnimating, bannerSlides.length]); // Only depend on isAnimating and array length

  return (

    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
      {/* Slides */}
      <div className="relative w-full h-full">
        {bannerSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.imageUrl})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">{slide.title}</h2>
                  <p className="text-lg md:text-xl mb-6">{slide.subtitle}</p>
                  <a
                    href={slide.buttonLink}
                    className="inline-block bg-pale-pink hover:bg-pink-600 text-white font-medium px-6 py-3 rounded-md transition-colors duration-200"
                  >
                    {slide.buttonText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-2 z-20 transition-all duration-200"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <FiArrowLeft size={24} className="text-white" />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-2 z-20 transition-all duration-200"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <FiArrowRight size={24} className="text-white" />
      </button>

      {/* Dots indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
        {bannerSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentSlide ? "bg-pale-pink" : "bg-white bg-opacity-50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBannerSlider;