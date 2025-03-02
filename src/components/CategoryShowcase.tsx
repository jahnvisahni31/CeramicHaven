import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import CategoryCard from './CategoryCard';
import { categories } from '../data/categories';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CategoryShowcase: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  
  // Get first 6 categories to display
  const showcaseCategories = categories.slice(0, 6);

  useEffect(() => {
    if (sectionRef.current && headingRef.current) {
      // Animate the heading
      gsap.from(headingRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom-=100',
        }
      });
      
      // Animate the category cards
      gsap.from('.category-card', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom-=100',
        }
      });
    }
  }, []);

  return (
    <div ref={sectionRef} className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 ref={headingRef} className="text-3xl md:text-4xl font-bold mb-4">Explore Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our collection by category to find the perfect ceramic pieces for your home.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {showcaseCategories.map((category) => (
            <div key={category.id} className="category-card">
              <CategoryCard category={category} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/categories" 
            className="inline-block border border-black text-black px-8 py-3 font-medium hover:bg-black hover:text-white transition-colors duration-300"
          >
            View All Categories
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryShowcase;