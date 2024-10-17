import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { SiGoogleplay, SiAppstore } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-5 mt-11 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10  ">
        {/* Brand Info */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">SJH Foundation</h2>
          <p className="text-gray-400 mb-6">Your trusted partner in financial solutions, helping you reach your dreams with flexible loan options.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-yellow-400">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        {/* Useful Links */}
       

        {/* Newsletter Signup */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Stay Updated</h3>
          <p className=" mb-3">Subscribe to our newsletter to get the latest updates on loan rates and financial tips.</p>
          <div className="flex text-xl">
          <input
              type="email"
              placeholder="Enter your email"
              className="mt-5 w-full font-extrabold text-black px-3 py-2 rounded-l-lg border-0 focus:ring-2 focus:ring-yellow-500"
            />
            <button className="bg-yellow-500  text-gray-900 font-semibold px-6 rounded-lg hover:bg-yellow-600 transition duration-200">
              Subscribe
            </button>
          </div>
        </div>

        {/* Download Our App */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Download Our App</h3>
          <p className="text-gray-400 mb-3">Manage your loans on the go with our mobile app, available on:</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-yellow-400 flex items-center space-x-2">
              <SiGoogleplay size={24} />
              <span>Google Play</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 flex items-center space-x-2">
              <SiAppstore size={24} />
              <span>App Store</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto text-center text-gray-500 mt-10">
        <p>© 2024 MoneyWise. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
