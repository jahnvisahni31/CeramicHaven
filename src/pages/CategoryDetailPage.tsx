import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { categories } from '../data/categories';
import gsap from 'gsap';

const CategoryDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [sortOption, setSortOption] = useState('featured');
  const [categoryProducts, setCategoryProducts] = useState(products);
  const pageRef = useRef<HTMLDivElement>(null);
  
  // Find the category by ID
  const category = categories.find(c => c.id === Number(id));

  useEffect(() => {
    if (pageRef.current && category) {
      gsap.from(pageRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out'
      });
      
      gsap.from('.category-header', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
        delay: 0.1
      });
    }
  }, [category]);

  useEffect(() => {
    if (category) {
      // Filter products by category
      const filtered = products.filter(product => product.category === category.name);
      
      // Sort products based on selected option
      let sorted = [...filtered];
      switch (sortOption) {
        case 'price-low':
          sorted.sort((a, b) => a.price - b.price);
          break;
        case 'price-high':
          sorted.sort((a, b) => b.price - a.price);
          break;
        case 'name-asc':
          sorted.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case 'name-desc':
          sorted.sort((a, b) => b.name.localeCompare(a.name));
          break;
        case 'featured':
        default:
          sorted.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
          break;
      }
      
      setCategoryProducts(sorted);
      
      // Animate the product cards when they change
      gsap.fromTo('.product-card', 
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          stagger: 0.05, 
          duration: 0.4,
          ease: 'power2.out',
          delay: 0.1
        }
      );
    }
  }, [category, sortOption]);

  if (!category) {
    return (
      <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Category Not Found</h2>
          <p className="text-gray-600 mb-6">The category you're looking for doesn't exist or has been removed.</p>
          <Link 
            to="/categories" 
            className="inline-block bg-black text-white px-6 py-3 font-medium hover:bg-gray-800 transition-colors"
          >
            Back to Categories
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div ref={pageRef} className="pt-24 pb-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Back button */}
        <Link to="/categories" className="inline-flex items-center text-gray-600 hover:text-black mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Categories
        </Link>
        
        {/* Category header */}
        <div className="category-header relative h-64 mb-12 overflow-hidden rounded-lg">
          <img 
            src={category.image} 
            alt={category.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white p-6">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{category.name}</h1>
              <p className="text-lg max-w-2xl">{category.description}</p>
            </div>
          </div>
        </div>
        
        {/* Sorting */}
        <div className="flex justify-end mb-8">
          <div className="flex items-center">
            <label htmlFor="sort" className="text-sm mr-2">Sort by:</label>
            <select
              id="sort"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
            </select>
          </div>
        </div>
        
        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categoryProducts.map((product) => (
            <div key={product.id} className="product-card">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        
        {/* Empty state */}
        {categoryProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryDetailPage;