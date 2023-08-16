import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">DimBou</h2>
            <p>Build, preview, and go live for free today. And as you expand, choose one of our scalable pricing plans to move faster and fuel sustainable growth.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-300">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-300">Pricing</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-300">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact</h2>
            <ul>
              <li className="flex items-center mb-2">
                <FaEnvelope className="mr-2" />
                <span>support@dimbou.com</span>
              </li>
              <li className="flex items-center mb-2">
                <FaPhoneAlt className="mr-2" />
                <span>+1 (123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <span>123 DimBou St, City, Country</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="h-6 w-6 hover:text-gray-400" />
              </a>
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="h-6 w-6 hover:text-gray-400" />
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="h-6 w-6 hover:text-gray-400" />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="h-6 w-6 hover:text-gray-400" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} DimBou. All rights reserved.
        </div>
      </div>
    </div>
  );
}
