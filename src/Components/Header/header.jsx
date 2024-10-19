'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ShoppingCart, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <motion.h1 
            className="text-3xl font-bold text-gray-800"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            CrockCraft
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button variant="outline">
              <ShoppingCart className="mr-2 h-4 w-4" /> Cart (0)
            </Button>
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
            className="text-5xl font-bold text-gray-900 mb-6"
            variants={fadeInUp}
          >
            Elevate Your Dining Experience
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 mb-8"
            variants={fadeInUp}
          >
            Discover our exquisite collection of handcrafted crockery
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Button size="lg">
              Shop Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
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
                  <CardContent className="p-4">
                    <div className="aspect-square bg-gray-200 rounded-md mb-4"></div>
                    <h4 className="font-semibold mb-2">{product}</h4>
                    <p className="text-gray-600">$79.99</p>
                    <Button className="w-full mt-4">Add to Cart</Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          className="bg-gray-100 rounded-lg p-8 my-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-600 mb-6">Subscribe to our newsletter for exclusive offers and new arrivals</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </motion.section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 CrockCraft. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}