import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ArrowLeft, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import gsap from 'gsap';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();
  const pageRef = useRef<HTMLDivElement>(null);
  const cartItemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pageRef.current) {
      gsap.from(pageRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out'
      });
    }
  }, []);

  useEffect(() => {
    if (cartItemsRef.current) {
      gsap.from('.cart-item', {
        y: 20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 0.2
      });
    }
  }, [cart.length]);

  const handleRemoveItem = (productId: number) => {
    const item = document.querySelector(`.cart-item-${productId}`);
    if (item) {
      gsap.to(item, {
        x: -100,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => {
          removeFromCart(productId);
        }
      });
    } else {
      removeFromCart(productId);
    }
  };

  return (
    <div ref={pageRef} className="pt-24 pb-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
          <Link to="/shop" className="inline-flex items-center text-gray-600 hover:text-black">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Continue Shopping
          </Link>
        </div>
        
        {cart.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div ref={cartItemsRef} className="lg:col-span-2">
              <div className="border-b border-gray-200 pb-2 mb-4 hidden md:grid md:grid-cols-12 gap-4">
                <div className="md:col-span-6">
                  <span className="text-sm font-medium text-black">Product</span>
                </div>
                <div className="md:col-span-2 text-center">
                  <span className="text-sm font-medium text-black">Price</span>
                </div>
                <div className="md:col-span-2 text-center">
                  <span className="text-sm font-medium text-black">Quantity</span>
                </div>
                <div className="md:col-span-2 text-right">
                  <span className="text-sm font-medium text-black">Total</span>
                </div>
              </div>
              
              {cart.map((item) => (
                <div 
                  key={item.id} 
                  className={`cart-item cart-item-${item.id} border-b border-gray-200 py-4 grid grid-cols-1 md:grid-cols-12 gap-4 items-center`}
                >
                  <div className="md:col-span-6 flex items-center">
                    <div className="w-20 h-20 bg-gray-100 mr-4">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-black">{item.name}</h3>
                      <p className="text-sm text-black">{item.category}</p>
                    </div>
                  </div>
                  <div className="md:col-span-2 text-center text-black">
                    <span className="md:hidden inline-block mr-2 font-medium text-black">Price:</span>
                    ${item.price.toFixed(2)}
                  </div>
                  <div className="md:col-span-2 flex items-center justify-center">
                    <span className="md:hidden inline-block mr-2 font-medium text-black">Quantity:</span>
                    <div className="flex items-center">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="w-10 h-8 border border-gray-300 flex items-center justify-center text-black">
                        {item.quantity}
                      </span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-center text-black">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default CartPage;
