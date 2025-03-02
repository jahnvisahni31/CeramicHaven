import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import gsap from 'gsap';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    
    if (card) {
      // Hover animation
      card.addEventListener('mouseenter', () => {
        gsap.to(card.querySelector('.product-image'), {
          scale: 1.05,
          duration: 0.3,
          ease: 'power1.out'
        });
        gsap.to(card.querySelector('.add-to-cart'), {
          y: 0,
          opacity: 1,
          duration: 0.3,
          ease: 'power1.out'
        });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card.querySelector('.product-image'), {
          scale: 1,
          duration: 0.3,
          ease: 'power1.out'
        });
        gsap.to(card.querySelector('.add-to-cart'), {
          y: 10,
          opacity: 0,
          duration: 0.3,
          ease: 'power1.out'
        });
      });
    }
  }, []);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    
    // Add to cart animation
    gsap.to(cardRef.current, {
      y: -10,
      duration: 0.1,
      ease: 'power1.out',
      onComplete: () => {
        gsap.to(cardRef.current, {
          y: 0,
          duration: 0.2,
          ease: 'power3.out'
        });
      }
    });
  };

  return (
    <div ref={cardRef} className="group relative">
      <Link to={`/product/${product.id}`} className="block">
        <div className="overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="product-image w-full h-64 object-cover transition-transform duration-300"
          />
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
          <p className="mt-1 text-sm text-gray-500">{product.category}</p>
          <p className="mt-2 font-semibold text-gray-900">${product.price.toFixed(2)}</p>
        </div>
        
        <button 
          onClick={handleAddToCart}
          className="add-to-cart absolute bottom-4 right-4 bg-black text-white p-2 rounded-full opacity-0 translate-y-10 transition-all duration-300"
        >
          <ShoppingCart className="w-5 h-5" />
        </button>
        
        {product.featured && (
          <div className="absolute top-2 left-2 text-white text-xs font-bold px-2 py-1">
            Featured
          </div>
        )}
      </Link>
    </div>
  );
};

export default ProductCard;