"use client";
import React, { useState, useEffect } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
  avatarUrl: string;
  rating: number;
}

const TestimonialSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Sample testimonial data
  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "I absolutely love the quality of the clothes. The material is soft, comfortable, and very stylish. I've received so many compliments!",
      author: "Sarah Johnson",
      role: "Regular Customer",
      avatarUrl: "/images/pp1.jpeg",
      rating: 5,
    },
    {
      id: 2,
      text: "The customer service was exceptional. They helped me find the perfect outfit for my event and the shipping was incredibly fast.",
      author: "Michael Brown",
      role: "New Customer",
      avatarUrl: "/images/pp1.jpeg",
      rating: 5,
    },
    {
      id: 3,
      text: "These products have become my go-to for everyday fashion. The price-quality ratio is simply unbeatable.",
      author: "Emma Wilson",
      role: "Fashion Blogger",
      avatarUrl: "/images/pp1.jpeg",
      rating: 4,
    },
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
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

  return (
    <section className="py-12 px-4 md:px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">What Our Customers Say</h2>
        </div>

        <div className="relative">
          {/* Testimonial slides */}
          <div className="relative overflow-hidden rounded-lg bg-white shadow-md p-6 md:p-8 min-h-[300px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-opacity duration-500 ${
                  index === currentSlide
                    ? "opacity-100 relative z-10"
                    : "opacity-0 absolute inset-0 z-0"
                }`}
              >
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-center text-gray-600 italic mb-6">"{testimonial.text}"</p>

                {/* Author */}
                <div className="flex items-center justify-center">
                  <img
                    src={testimonial.avatarUrl}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-medium text-gray-800">{testimonial.author}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-800 p-2 rounded-full"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <FiArrowLeft size={24} />
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-800 p-2 rounded-full"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <FiArrowRight size={24} />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 mx-1 rounded-full ${
                  index === currentSlide ? "bg-gray-800" : "bg-gray-300"
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
