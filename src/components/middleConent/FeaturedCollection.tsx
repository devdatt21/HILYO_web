"use client";
import React from "react";
import Link from "next/link";

interface FeaturedCollectionProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
  buttonText: string;
  buttonLink: string;
  position?: "left" | "right";
}

// Dummy featured collection data
const dummyCollections: FeaturedCollectionProps[] = [
  {
    title: "Spring Collection 2024",
    subtitle: "Explore the latest trends in fashion with our new spring collection.",
    imageUrl: "/images/spring-collection.jpeg",
    buttonText: "Shop Now",
    buttonLink: "/collections/spring",
    position: "right",
  },
  {
    title: "Luxury Wedding Attire",
    subtitle: "Exclusive designer wedding outfits to make your big day even more special.",
    imageUrl: "/images/wedding-collection.jpeg",
    buttonText: "Discover",
    buttonLink: "/collections/wedding",
    position: "left",
  },
  {
    title: "Streetwear Essentials",
    subtitle: "Stay stylish with our premium streetwear collection.",
    imageUrl: "/images/streetwear.jpeg",
    buttonText: "Explore",
    buttonLink: "/collections/streetwear",
    position: "right",
  },
];

const FeaturedCollection: React.FC<FeaturedCollectionProps> = ({
  title = "Exclusive Collection",
  subtitle = "Discover our top curated collections",
  imageUrl = "/images/default-collection.jpg",
  buttonText = "Shop Now",
  buttonLink = "/collections",
  position = "right",
}) => {
  return (
    <section className="py-10 px-4 md:px-6">
      <div className="relative overflow-hidden rounded-lg shadow-md">
        {/* Background image */}
        <div className="relative h-[300px] md:h-[400px]">
          <img
            src={imageUrl}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
          
          {/* Content */}
          <div className={`absolute inset-0 flex items-center ${
            position === "right" ? "justify-start" : "justify-end"
          }`}>
            <div className={`p-6 md:p-10 max-w-md ${
              position === "right" ? "text-left" : "text-right mr-6"
            }`}>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{title}</h2>
              {subtitle && <p className="text-gray-200 mb-6">{subtitle}</p>}
              <Link
                href={buttonLink}
                className="inline-block bg-pale-pink hover:bg-pink-600 text-white font-medium px-6 py-3 rounded-md transition-colors duration-200"
              >
                {buttonText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Component to Render Multiple Featured Collections
const FeaturedCollectionsGrid: React.FC = () => {
  return (
    <div className="space-y-10">
      {dummyCollections.map((collection, index) => (
        <FeaturedCollection key={index} {...collection} />
      ))}
    </div>
  );
};

export default FeaturedCollectionsGrid;
