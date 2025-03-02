import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (heroRef.current && titleRef.current && subtitleRef.current) {
      const tl = gsap.timeline();
      
      // Helper function to split text into spans
      const splitText = (element: HTMLElement) => {
        const words = element.innerText.split(" ").map(word => {
          const wordSpan = document.createElement("span");
          wordSpan.style.display = "inline-block";
          wordSpan.style.overflow = "hidden";
          wordSpan.style.whiteSpace = "nowrap";
          wordSpan.innerHTML = word.split("").map(char => `<span style="display: inline-block;">${char}</span>`).join("");
          return wordSpan;
        });
        element.innerHTML = "";
        words.forEach(wordSpan => {
          element.appendChild(wordSpan);
          element.appendChild(document.createTextNode(" "));
        });
        return element.querySelectorAll("span span");
      };

      // Apply text splitting
      const titleChars = splitText(titleRef.current);
      const subtitleChars = splitText(subtitleRef.current);
      
      // Animate the hero background
      tl.from(heroRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
      
      // Animate title characters
      tl.from(titleChars, {
        opacity: 0,
        y: 50,
        stagger: 0.03,
        duration: 0.8,
        ease: "back.out(1.7)"
      }, "-=0.5");
      
      // Animate subtitle characters
      tl.from(subtitleChars, {
        opacity: 0,
        y: 20,
        stagger: 0.05,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.3");
      
      // Animate the button
      tl.from(".hero-button", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.5");
    }
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative h-screen flex items-center justify-center bg-black text-white overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
          alt="Ceramic art" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0  text-black opacity-60"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          Ceramic Elegance
        </h1>
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-gray-300"
        >
          Handcrafted ceramic pieces for the modern home. Elegant, timeless, and uniquely yours.
        </p>
        <Link 
          to="/shop" 
          className="hero-button inline-block text-black px-8 py-3 text-lg font-medium rounded-none hover:bg-gray-200 transition-colors duration-300"
        >
          Explore Collection
        </Link>
      </div>
    </div>
  );
};

export default Hero;
