import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutPage: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (pageRef.current) {
      gsap.from(pageRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out'
      });
      
      // Animate sections as they come into view
      sectionsRef.current.forEach((section) => {
        gsap.from(section, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom-=100',
          }
        });
      });
    }
  }, []);

  // Function to add sections to the ref array
  const addToSectionsRef = (el: HTMLDivElement) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div ref={pageRef} className="pt-24 pb-16 ">
      <div className="container mx-auto px-4">
        {/* Hero section */}
        <div ref={addToSectionsRef} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ceramic Elegance was founded with a passion for creating beautiful, functional ceramic pieces that bring art into everyday life.
          </p>
        </div>
        
        {/* Mission section */}
        <div ref={addToSectionsRef} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Ceramic crafting" 
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              At Ceramic Elegance, our mission is to create timeless ceramic pieces that blend artistry with functionality. We believe that everyday objects should be beautiful, and beautiful objects should be used every day.
            </p>
            <p className="text-gray-600">
              Our black and white aesthetic represents our commitment to simplicity, elegance, and the perfect balance between modern design and traditional craftsmanship.
            </p>
          </div>
        </div>
        
        {/* Craftsmanship section */}
        <div ref={addToSectionsRef} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-6">Craftsmanship</h2>
            <p className="text-gray-600 mb-4">
              Each piece in our collection is meticulously handcrafted by skilled artisans who have dedicated years to perfecting their craft. We embrace the beauty of imperfection and the uniqueness that comes with handmade ceramic pieces.
            </p>
            <p className="text-gray-600">
              From throwing on the wheel to glazing and firing, every step of our process is done with care and attention to detail. We use only the finest materials and traditional techniques to ensure the quality and longevity of our products.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="https://images.unsplash.com/photo-1482517967863-00e15c9b44be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Ceramic crafting process" 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
        
        {/* Sustainability section */}
        <div ref={addToSectionsRef} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1605883705077-8d3d3cebe78c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Sustainable practices" 
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Sustainability</h2>
            <p className="text-gray-600 mb-4">
              We are committed to sustainable practices in all aspects of our business. Our ceramics are made to last a lifetime, reducing the need for disposable alternatives and promoting a more sustainable lifestyle.
            </p>
            <p className="text-gray-600">
              We source our materials locally whenever possible, use energy-efficient kilns, and minimize waste in our production process. Our packaging is plastic-free and made from recycled materials.
            </p>
          </div>
        </div>
        
        {/* Team section */}
        <div ref={addToSectionsRef} className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                alt="Team member" 
                className="w-48 h-48 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-1">Emma Chen</h3>
              <p className="text-gray-500 mb-3">Founder & Lead Designer</p>
              <p className="text-gray-600 max-w-xs mx-auto">
                With over 15 years of experience in ceramic design, Emma brings her vision and expertise to every piece.
              </p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                alt="Team member" 
                className="w-48 h-48 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-1">David Kim</h3>
              <p className="text-gray-500 mb-3">Master Ceramicist</p>
              <p className="text-gray-600 max-w-xs mx-auto">
                David's technical skill and artistic vision help bring our most complex designs to life.
              </p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                alt="Team member" 
                className="w-48 h-48 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-1">Sarah Johnson</h3>
              <p className="text-gray-500 mb-3">Creative Director</p>
              <p className="text-gray-600 max-w-xs mx-auto">
                Sarah oversees our collections and ensures each piece aligns with our aesthetic vision.
              </p>
            </div>
          </div>
        </div>
        
        {/* Visit us section */}
        <div ref={addToSectionsRef} className="bg-gray-100 p-8 md:p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-6">Visit Our Studio</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We welcome visitors to our studio where you can see our artisans at work and browse our full collection. We also offer workshops for those interested in learning the art of ceramics.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto text-left">
            <div>
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-gray-600">
                123 Artisan Way<br />
                Ceramic District<br />
                New York, NY 10001
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Hours</h3>
              <p className="text-gray-600">
                Monday - Friday: 10am - 6pm<br />
                Saturday: 11am - 5pm<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;