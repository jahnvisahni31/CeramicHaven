import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Heart, Share2, ArrowLeft } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import gsap from 'gsap';
import ProductCard from '../components/ProductCard';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const pageRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  
  // Find the product by ID
  const product = products.find(p => p.id === Number(id));
  
  // Get related products (same category, excluding current product)
  const relatedProducts = product 
    ? products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4)
    : [];

  useEffect(() => {
    if (pageRef.current && product) {
      // Page entrance animation
      gsap.from(pageRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out'
      });
      
      // Product image animation
      if (imageRef.current) {
        gsap.from(imageRef.current, {
          scale: 0.9,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          delay: 0.2
        });
      }
      
      // Product details animation
      gsap.from('.product-details > *', {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 0.3
      });
    }
  }, [product]);

  const handleAddToCart = () => {
    if (product) {
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }
      
      // Add to cart animation
      gsap.to('.add-to-cart-btn', {
        scale: 0.95,
        duration: 0.1,
        ease: 'power1.out',
        onComplete: () => {
          gsap.to('.add-to-cart-btn', {
            scale: 1,
            duration: 0.2,
            ease: 'power3.out'
          });
        }
      });
    }
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    
    // Wishlist animation
    gsap.to('.wishlist-btn', {
      scale: isWishlisted ? 1 : 1.2,
      duration: 0.2,
      ease: 'back.out(1.7)',
      onComplete: () => {
        gsap.to('.wishlist-btn', {
          scale: 1,
          duration: 0.2,
          ease: 'power3.out'
        });
      }
    });
  };

  if (!product) {
    return (
      <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Link 
            to="/shop" 
            className="inline-block bg-black text-white px-6 py-3 font-medium hover:bg-gray-800 transition-colors"
          >
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div ref={pageRef} className="pt-24 pb-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Back button */}
        <Link to="/shop" className="inline-flex items-center text-gray-600 hover:text-black mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Shop
        </Link>
        
        {/* Product details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Product image */}
          <div className="bg-gray-100">
            <img 
              ref={imageRef}
              src={product.image} 
              alt={product.name}
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Product info */}
          <div className="product-details">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-gray-500 mb-4">{product.category}</p>
            <p className="text-2xl font-semibold mb-6">${product.price.toFixed(2)}</p>
            
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-2">Description</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
            
            {/* Quantity selector */}
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-2">Quantity</h3>
              <div className="flex items-center">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                >
                  -
                </button>
                <span className="w-12 h-10 border-t border-b border-gray-300 flex items-center justify-center">
                  {quantity}
                </span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>
            
            {/* Action buttons */}
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={handleAddToCart}
                className="add-to-cart-btn flex-1 bg-black text-white py-3 px-6 flex items-center justify-center hover:bg-gray-900 transition-colors"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </button>
              <button 
                onClick={toggleWishlist}
                className="wishlist-btn w-12 h-12 border border-gray-300 flex items-center justify-center hover:bg-gray-100"
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-black' : ''}`} />
              </button>
              <button className="w-12 h-12 border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;