import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ShoppingCart, ArrowRight } from 'lucide-react'
import ReactTypingEffect from 'react-typing-effect';

export default function CrockeryLandingPage() {
  const [email, setEmail] = useState('')

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const CustomButton = ({ children, className, ...props }) => (
    <button
      className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black hover:bg-gray-200 h-10 px-4 py-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  )

  const Card = ({ children, className, ...props }) => (
    <div className={`rounded-lg overflow-hidden bg-gray-900 ${className}`} {...props}>
      {children}
    </div>
  )

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <motion.h1 
            className="text-3xl font-bold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Sahni Crockeries
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CustomButton>
              <ShoppingCart className="mr-2 h-4 w-4" /> Cart (0)
            </CustomButton>
          </motion.div>
        </nav>
      </header>

      <main className="container mx-auto px-4">
        <motion.section 
          className="text-center py-20"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <motion.h2 
            className="text-5xl font-bold mb-6"
            variants={fadeInUp}
          >
            <ReactTypingEffect
              text={['Elevate Your Dining Experience', 'Discover Exquisite Crockery', 'Handcrafted with Passion']}
              speed={100}
              eraseSpeed={50}
              eraseDelay={1500}
              typingDelay={500}
            />
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            variants={fadeInUp}
          >
            Explore our curated selection of handcrafted crockery pieces
          </motion.p>
          <motion.div variants={fadeInUp}>
            <CustomButton>
              Shop Now <ArrowRight className="ml-2 h-4 w-4" />
            </CustomButton>
          </motion.div>
        </motion.section>

        <motion.section 
          className="py-20"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <motion.h3 
            className="text-3xl font-semibold text-center mb-12"
            variants={fadeInUp}
          >
            Featured Products
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Elegant Dinner Set', 'Rustic Serving Bowl', 'Modern Tea Set'].map((product, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card>
                  <div className="p-4">
                    <div className="aspect-square bg-gray-800 rounded-md mb-4"></div>
                    <h4 className="font-semibold mb-2">{product}</h4>
                    <p className="text-gray-300">$79.99</p>
                    <CustomButton className="w-full mt-4">
                      Add to Cart
                    </CustomButton>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          className="bg-gray-900 rounded-lg p-8 my-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">Subscribe to our newsletter for exclusive offers and new arrivals</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow px-3 py-2 bg-black border border-gray-700 rounded-md text-sm shadow-sm placeholder-gray-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white"
              />
              <CustomButton type="submit">
                Subscribe
              </CustomButton>
            </form>
          </div>
        </motion.section>
      </main>

      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center text-gray-300">
          <p>&copy; 2023 Sahni Crockeries. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

