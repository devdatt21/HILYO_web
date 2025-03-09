"use client"
import React from 'react';
import HeroBannerSlider from '@/components/homeComps/HeroBannerSlider';
import FeaturedCollection from '@/components/homeComps/FeaturedCollection';
import TestimonialSlider from '@/components/homeComps/TestimonialSlider';
import ProductGridWrapper from '@/components/homeComps/ProductGrid';
import BlogGridWrapper from '@/components/homeComps/BlogGrid';
import CategoryGridWrapper from '@/components/homeComps/CategoryGrid';

const HomePage = () => {

  return (
    <>

    <div className="pt-[60px]">
    <HeroBannerSlider/>
    <ProductGridWrapper/>
    <CategoryGridWrapper/>
    <FeaturedCollection/>
    <BlogGridWrapper/>
    <TestimonialSlider/>
    </div>
        
    </>
  );
};
  
export default HomePage;