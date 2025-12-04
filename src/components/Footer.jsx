import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaShoppingBag, FaCreditCard, FaTruck, FaShieldAlt, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between gap-8">


          <div className="w-full md:w-1/4">
            <div className="flex items-center gap-2 mb-4">
              <FaShoppingBag className="text-red-500 text-2xl" />
              <span className="text-xl font-bold text-white">EliteMart</span>
            </div>
            <p className="text-sm mb-4">
              Your trusted e-commerce destination for quality products and exceptional service.
            </p>
            <div className="flex gap-3">
              {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub].map((Icon, index) => (
                <a key={index} href="#" className="p-2 bg-gray-800 hover:bg-red-600 rounded-full transition-colors">
                  <Icon className="text-white" size={18} />
                </a>
              ))}
            </div>
          </div>


          <div className="w-full sm:w-1/3 md:w-1/6">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Products', 'Categories', 'Deals', 'New Arrivals'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm hover:text-red-400 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>


          <div className="w-full sm:w-1/3 md:w-1/6">
            <h3 className="text-white font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              {['Contact Us', 'FAQ', 'Shipping Policy', 'Return Policy', 'Privacy Policy'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm hover:text-red-400 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>


          <div className="w-full sm:w-1/3 md:w-1/4">
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-red-500" />
                <span className="text-sm">123 Street, City, Country</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-red-500" />
                <span className="text-sm">+1 234 567 8900</span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-red-500" />
                <span className="text-sm">support@EliteMart.com</span>
              </li>
            </ul>
          </div>

        </div>



      </div>


      <div className="bg-gray-950 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2024 EliteMart. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-xs text-gray-400 hover:text-red-400">Terms</a>
              <a href="#" className="text-xs text-gray-400 hover:text-red-400">Privacy</a>
              <a href="#" className="text-xs text-gray-400 hover:text-red-400">Cookies</a>
              <a href="#" className="text-xs text-gray-400 hover:text-red-400">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer