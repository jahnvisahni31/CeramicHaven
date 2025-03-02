import React, { useEffect, useRef } from 'react';
import CategoryCard from '../components/CategoryCard';
import { categories } from '../data/categories';
import gsap from 'gsap';

const CategoriesPage: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pageRef.current) {
      gsap.from(pageRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out'
      });
      
      gsap.from('.category-item', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 0.2
      });
    }
  }, []);

  return (
    <div ref={pageRef} className="pt-24 pb-16 bg-black">
      <div className="container mx-auto px-4 text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Categories</h1>
        <p className="text-black max-w-3xl mb-12">
          Explore our diverse range of ceramic categories, each showcasing unique craftsmanship and design. Find the perfect pieces to complement your home and lifestyle.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="category-item">
              <CategoryCard category={category} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;