import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Send,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top section with logo and quick links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <h2 className="text-2xl font-bold text-white">ValueEq</h2>
            </div>
            <p className="mt-4 text-gray-400 leading-relaxed">
              AI-powered financial intelligence for smarter investment
              decisions. Transforming data into actionable insights.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold text-white relative pb-3 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-12 before:h-1 before:bg-blue-600">
              Solutions
            </h3>
            <ul className="mt-5 space-y-3">
              <li className="group flex items-center">
                <ArrowRight
                  size={14}
                  className="text-blue-600 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Valuation Models
                </a>
              </li>
              <li className="group flex items-center">
                <ArrowRight
                  size={14}
                  className="text-blue-600 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Market Intelligence
                </a>
              </li>
              <li className="group flex items-center">
                <ArrowRight
                  size={14}
                  className="text-blue-600 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Portfolio Optimization
                </a>
              </li>
              <li className="group flex items-center">
                <ArrowRight
                  size={14}
                  className="text-blue-600 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Predictive Analytics
                </a>
              </li>
              <li className="group flex items-center">
                <ArrowRight
                  size={14}
                  className="text-blue-600 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Risk Assessment
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white relative pb-3 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-12 before:h-1 before:bg-blue-600">
              Support
            </h3>
            <ul className="mt-5 space-y-3">
              <li className="group flex items-center">
                <ArrowRight
                  size={14}
                  className="text-blue-600 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Help Center
                </a>
              </li>
              <li className="group flex items-center">
                <ArrowRight
                  size={14}
                  className="text-blue-600 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Documentation
                </a>
              </li>
              <li className="group flex items-center">
                <ArrowRight
                  size={14}
                  className="text-blue-600 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  API Status
                </a>
              </li>
              <li className="group flex items-center">
                <ArrowRight
                  size={14}
                  className="text-blue-600 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Contact Us
                </a>
              </li>
              <li className="group flex items-center">
                <ArrowRight
                  size={14}
                  className="text-blue-600 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white relative pb-3 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-12 before:h-1 before:bg-blue-600">
              Stay Updated
            </h3>
            <p className="mt-5 text-sm text-gray-400 leading-relaxed">
              Subscribe to our newsletter for the latest financial insights and
              product updates.
            </p>
            <div className="mt-4 relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-300">
                <Send size={16} />
              </button>
            </div>
            <p className="mt-3 text-xs text-gray-500">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates.
            </p>
          </div>
        </div>

        {/* Contact information */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-3">
                <Mail size={18} className="text-blue-500" />
              </div>
              <div>
                <h4 className="text-white font-medium">Email Us</h4>
                <p className="mt-1 text-gray-400">support@valueeq.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-3">
                <Phone size={18} className="text-blue-500" />
              </div>
              <div>
                <h4 className="text-white font-medium">Call Us</h4>
                <p className="mt-1 text-gray-400">+1 (888) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-3">
                <MapPin size={18} className="text-blue-500" />
              </div>
              <div>
                <h4 className="text-white font-medium">Location</h4>
                <p className="mt-1 text-gray-400">350 Financial Street,</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-500">
            &copy; 2025 ValueEq, Inc. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex flex-wrap gap-4 text-sm text-gray-500">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </a>
            <span className="hidden md:inline">•</span>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <span className="hidden md:inline">•</span>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
