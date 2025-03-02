import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../types';
import gsap from 'gsap';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    
    if (card) {
      // Hover animation
      card.addEventListener('mouseenter', () => {
        gsap.to(card.querySelector('.category-image'), {
          scale: 1.05,
          duration: 0.3,
          ease: 'power1.out'
        });
        gsap.to(card.querySelector('.category-overlay'), {
          opacity: 0.7,
          duration: 0.3,
          ease: 'power1.out'
        });
        gsap.to(card.querySelector('.category-name'), {
          y: -5,
          duration: 0.3,
          ease: 'power1.out'
        });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card.querySelector('.category-image'), {
          scale: 1,
          duration: 0.3,
          ease: 'power1.out'
        });
        gsap.to(card.querySelector('.category-overlay'), {
          opacity: 0.5,
          duration: 0.3,
          ease: 'power1.out'
        });
        gsap.to(card.querySelector('.category-name'), {
          y: 0,
          duration: 0.3,
          ease: 'power1.out'
        });
      });
    }
  }, []);

  return (
    <div ref={cardRef} className="relative overflow-hidden rounded-lg h-64 text-black">
      <Link to={`/category/${category.id}`}>
        <img 
          src={category.image} 
          alt={category.name}
          className="category-image w-full h-full object-cover transition-transform duration-300 text-black"
        />
        <div className="category-overlay absolute inset-0 text-black opacity-50 transition-opacity duration-300"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-black p-4 text-center">
          <h3 className="category-name text-2xl font-bold mb-2 transition-transform duration-300 text-black">{category.name}</h3>
          <p className="text-sm text-black">{category.description}</p>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;