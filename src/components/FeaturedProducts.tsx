import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { products } from '../data/products';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FeaturedProducts: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  
  // Get featured products
  const featuredProducts = products.filter(product => product.featured).slice(0, 8);

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
      
      // Animate the product cards
      gsap.from('.product-card', {
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
    <div ref={sectionRef} className="py-16  text-black">
      <div className="container mx-auto px-4 ">
        <div className="text-center mb-12">
          <h2 ref={headingRef} className="text-3xl md:text-4xl font-bold mb-4 text-black">Featured Collection</h2>
          <p className="text-black max-w-2xl mx-auto">
            Discover our most popular ceramic pieces, handcrafted with precision and care.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-black">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 text-black">
          <Link 
            to="/shop" 
            className="inline-block border border-black text-black px-8 py-3 font-medium hover:bg-black hover:text-white transition-colors duration-300"
          >
            View All Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;