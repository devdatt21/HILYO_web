"use client"
import React from 'react';
import HeroBannerSlider from '@/components/middleConent/HeroBannerSlider';
import ProductGrid from '@/components/middleConent/ProductGrid';
import CategoryGrid from '@/components/middleConent/CategoryGrid';
import BlogGrid from '@/components/middleConent/BlogGrid';
import FeaturedCollection from '@/components/middleConent/FeaturedCollection';
import TestimonialSlider from '@/components/middleConent/TestimonialSlider';


const AnitaDongreHomepage = () => {

  return (
    <div className="font-sans">

    <HeroBannerSlider/>
    <ProductGrid/>
    <CategoryGrid/>
    <FeaturedCollection/>
    <BlogGrid/>
    <TestimonialSlider/>
        
    </div>
  );
};
  
export default AnitaDongreHomepage;