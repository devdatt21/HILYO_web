"use client";
import React, { useState, useEffect } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Image from "next/image";

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

  // Sample testimonials
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

  // Handle slide navigation
  const changeSlide = (direction: 'next' | 'prev') => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    if (direction === 'next') {
      setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    } else {
      setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    }
    
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => changeSlide('next'), 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
          What Our Customers Say
        </h2>

        <div className="relative">
          {/* Testimonial container */}
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 min-h-[280px] relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute inset-0 p-6 md:p-8 transition-opacity duration-500 ${
                  index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                {/* Rating stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-center text-gray-600 italic mb-6">
                  &quot;{testimonial.text}&quot;
                </p>

                {/* Author info */}
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 relative mr-4">
                    <Image
                      src={testimonial.avatarUrl}
                      alt={testimonial.author}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">{testimonial.author}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <button
            className="absolute left-10 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white shadow-md hover:bg-gray-100 text-gray-800 p-2 rounded-full z-20"
            onClick={() => changeSlide('prev')}
            aria-label="Previous testimonial"
          >
            <FiArrowLeft size={20} />
          </button>
          <button
            className="absolute right-10 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white shadow-md hover:bg-gray-100 text-gray-800 p-2 rounded-full z-20"
            onClick={() => changeSlide('next')}
            aria-label="Next testimonial"
          >
            <FiArrowRight size={20} />
          </button>

          {/* Indicator dots */}
          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 mx-1 rounded-full transition-colors ${
                  index === currentSlide ? "bg-gray-800" : "bg-gray-300"
                }`}
                onClick={() => {
                  if (!isAnimating && index !== currentSlide) {
                    setIsAnimating(true);
                    setCurrentSlide(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;