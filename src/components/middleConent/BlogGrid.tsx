"use client";
import React from "react";
import BlogCard from "./BlogCard";

interface BlogPost {
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

interface BlogGridProps {
  title?: string;
  subtitle?: string;
  posts: BlogPost[];
  viewAllLink?: string;
}

// Dummy blog posts data
const dummyPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Ultimate Guide to Sustainable Fashion",
    excerpt: "Learn how to build a sustainable wardrobe and make eco-friendly fashion choices.",
    imageUrl: "/images/sustainable-fashion.jpeg",
    date: "March 5, 2024",
    author: "Emma Johnson",
    category: "Fashion Tips",
    categoryLink: "/blog/fashion-tips",
    link: "/blog/sustainable-fashion",
  },
  {
    id: "2",
    title: "Top 10 Outfit Ideas for Wedding Season",
    excerpt: "Discover the trendiest outfits for weddings and special occasions this year.",
    imageUrl: "/images/wedding-outfits.jpeg",
    date: "February 20, 2024",
    author: "Michael Brown",
    category: "Style Guide",
    categoryLink: "/blog/style-guide",
    link: "/blog/wedding-outfits",
  },
  {
    id: "3",
    title: "Why Minimalist Fashion is Taking Over",
    excerpt: "Explore the beauty of minimalism in fashion and how to create effortless looks.",
    imageUrl: "/images/minimalist-fashion.jpeg",
    date: "January 15, 2024",
    author: "Sophia Williams",
    category: "Trends",
    categoryLink: "/blog/trends",
    link: "/blog/minimalist-fashion",
  },
  {
    id: "4",
    title: "Best Accessories to Elevate Your Everyday Look",
    excerpt: "From statement earrings to classic handbags, explore accessories that transform outfits.",
    imageUrl: "/images/fashion-accessories.jpeg",
    date: "March 10, 2024",
    author: "Daniel Lee",
    category: "Accessories",
    categoryLink: "/blog/accessories",
    link: "/blog/fashion-accessories",
  },
  {
    id: "5",
    title: "How to Style Your Outfits Like a Celebrity",
    excerpt: "A deep dive into how celebrities are influencing fashion and how you can recreate their looks.",
    imageUrl: "/images/celebrity-fashion.jpeg",
    date: "February 5, 2024",
    author: "Olivia Carter",
    category: "Celebrity Style",
    categoryLink: "/blog/celebrity-style",
    link: "/blog/celebrity-fashion",
  },
  {
    id: "6",
    title: "The Evolution of Streetwear in 2024",
    excerpt: "A look at how streetwear has changed over the years and what’s trending now.",
    imageUrl: "/images/streetwear1.jpeg",
    date: "January 30, 2024",
    author: "James Anderson",
    category: "Street Fashion",
    categoryLink: "/blog/street-fashion",
    link: "/blog/streetwear",
  },
];

const BlogGrid: React.FC<BlogGridProps> = ({
  title = "Latest Fashion Insights",
  subtitle = "Stay updated with the latest trends and style guides",
  posts = dummyPosts,
  viewAllLink = "/blog",
}) => {
  return (
    <section className="py-10 px-4 md:px-6">
      {/* Section header */}
      {title && (
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{title}</h2>
          {subtitle && <p className="mt-2 text-gray-600">{subtitle}</p>}
        </div>
      )}

      {/* Blog grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>

      {/* View all link */}
      {viewAllLink && (
        <div className="text-center mt-8">
          <a
            href={viewAllLink}
            className="inline-block border border-pale-pink text-pale-pink hover:bg-pale-pink hover:text-white font-medium px-6 py-2 rounded-md transition-colors duration-200"
          >
            View All Articles
          </a>
        </div>
      )}
    </section>
  );
};

export default BlogGrid;
