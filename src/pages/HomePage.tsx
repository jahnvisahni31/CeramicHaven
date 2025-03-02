import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import CategoryShowcase from '../components/CategoryShowcase';
import Newsletter from '../components/Newsletter';
import gsap from 'gsap';

const HomePage: React.FC = () => {
  useEffect(() => {
    // Smooth scroll initialization
    gsap.to(window, {
      duration: 0,
      scrollBehavior: 'smooth'
    });
  }, []);

  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <div className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Ceramic crafting" 
                className="w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Handcrafted with Passion</h2>
              <p className="text-gray-300 mb-6">
                Each piece in our collection is meticulously handcrafted by skilled artisans who have dedicated years to perfecting their craft. We believe in the beauty of imperfection and the uniqueness that comes with handmade ceramic pieces.
              </p>
              <p className="text-gray-300 mb-6">
                Our ceramics are not just functional items but works of art that bring elegance and character to your home. The minimalist black and white aesthetic ensures they complement any interior style.
              </p>
              <a 
                href="/about" 
                className="inline-block border border-white text-white px-6 py-3 font-medium hover:bg-white hover:text-black transition-colors duration-300"
              >
                Our Story
              </a>
            </div>
          </div>
        </div>
      </div>
      <CategoryShowcase />
      <Newsletter />
    </div>
  );
};

export default HomePage;