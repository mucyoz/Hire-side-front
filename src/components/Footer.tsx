import React from "react";
import { NavLink } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import { FOOTER_LINKS, COMPANY_INFO } from "../config/constants";
import NewsletterForm from "./NewsLetterForm";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <NavLink
              to="/"
              className="flex items-center space-x-2 mb-4 focus-visible"
            >
              <div className="text-2xl font-bold text-brandBlue">
                Hireside Chat
              </div>
            </NavLink>
            <p className="text-gray-300 mb-6 max-w-md">
              {COMPANY_INFO.tagline}. Let's talk about your hiring needs and
              transform connections that stick.
            </p>
            {/* <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span>{COMPANY_INFO.phone}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>{COMPANY_INFO.email}</span>
              </div>
            </div> */}
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.navigation.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.href}
                    className="text-gray-300 hover:text-white transition-colors focus-visible"
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}

          <NewsletterForm />
          {/* <div>
            <h4 className="text-lg font-semibold mb-4">Let's Talk Hiring</h4>
            <p className="text-gray-300 text-sm mb-4">
              Get hiring insights from a people-first, accessible company.
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Let's discuss your needs"
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                aria-label="Email address for newsletter"
              />
              <button 
                type="submit"
                className="px-4 py-2 bg-brandBlue hover:bg-blue-700 rounded-r-md transition-colors focus-visible"
                aria-label="Subscribe to newsletter"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          </div> */}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-wrap justify-center items-center space-x-8 mb-8">
            <div className="text-gray-400 text-sm">
              Trusted by leading companies:
            </div>
            <div className="flex items-center space-x-6">
              <div className="px-4 py-2 bg-gray-800 rounded text-gray-300 text-sm">
                MedCore Health
              </div>
              <div className="px-4 py-2 bg-gray-800 rounded text-gray-300 text-sm">
                Swift Logistics
              </div>
              <div className="px-4 py-2 bg-gray-800 rounded text-gray-300 text-sm">
                BuildPro
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 {COMPANY_INFO.name}. {COMPANY_INFO.tagline}.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {FOOTER_LINKS.legal.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors focus-visible"
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
