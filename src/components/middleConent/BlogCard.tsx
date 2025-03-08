"use client";
import React from "react";
import Link from "next/link";
import { FiClock, FiUser } from "react-icons/fi";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  author: string;
  category: string;
  categoryLink: string;
  link: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title,
  excerpt,
  imageUrl,
  date,
  author,
  category,
  categoryLink,
  link,
}) => {
  // Format date
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Blog image */}
      <Link href={link} className="block relative overflow-hidden pb-[60%]">
        <img
          src={imageUrl}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {/* Category tag */}
        <Link
          href={categoryLink}
          className="absolute top-4 left-4 bg-pale-pink text-white text-xs font-medium px-3 py-1 rounded-full hover:bg-pink-600 transition-colors duration-200"
        >
          {category}
        </Link>
      </Link>

      {/* Blog content */}
      <div className="p-4 md:p-5">
        {/* Meta info */}
        <div className="flex items-center text-xs text-gray-500 mb-3">
          <div className="flex items-center">
            <FiUser size={14} className="mr-1" />
            <span>{author}</span>
          </div>
          <span className="mx-2">•</span>
          <div className="flex items-center">
            <FiClock size={14} className="mr-1" />
            <span>{formattedDate}</span>
          </div>
        </div>

        {/* Title */}
        <Link href={link} className="block mb-2">
          <h3 className="text-lg font-semibold text-gray-800 hover:text-pale-pink transition-colors duration-200 line-clamp-2">
            {title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{excerpt}</p>

        {/* Read more link */}
        <Link
          href={link}
          className="inline-block text-pale-pink hover:text-pink-600 font-medium text-sm transition-colors duration-200"
        >
          Read More
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;