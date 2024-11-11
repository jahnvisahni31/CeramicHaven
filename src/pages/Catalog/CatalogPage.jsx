import React from 'react';
import { motion } from 'framer-motion';
import { categories } from './assets'; // Import categories from assets.js
import './Catalog.css';

const CatalogPage = () => {
  return (
    <div className="catalog-page">
      <header className="catalog-header">
        <h1>Our Catalog</h1>
        <p>Explore our selection of beautifully crafted crockery items.</p>
      </header>
      
      <main className="catalog-grid">
        {categories.map((category, index) => (
          <motion.div 
            key={index} 
            className="catalog-card" 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={category.image} alt={category.name} className="catalog-image" />
            <div className="catalog-info">
              <h3>{category.name}</h3>
              <p>{category.description}</p>
              <button className="view-button">View More</button>
            </div>
          </motion.div>
        ))}
      </main>
    </div>
  );
};

export default CatalogPage;
