import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAVIGATION_ITEMS, COMPANY_INFO } from '../config/constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2 focus-visible">
            <div className="text-2xl font-bold text-brandBlue">
              Hireside Chat
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {NAVIGATION_ITEMS.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium transition-colors focus-visible ${
                    isActive
                      ? 'text-brandBlue border-b-2 border-brandBlue'
                      : 'text-slate-700 hover:text-brandBlue'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink
              to="/get-started"
              className="btn-primary"
            >
              Get Started
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-slate-700 hover:text-brandBlue hover:bg-gray-100 focus-visible"
            aria-label={isMenuOpen ? 'Close main menu' : 'Open main menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="space-y-2">
              {NAVIGATION_ITEMS.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `block px-3 py-2 text-base font-medium transition-colors focus-visible ${
                      isActive
                        ? 'text-brandBlue bg-blue-50'
                        : 'text-slate-700 hover:text-brandBlue hover:bg-gray-50'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
              <div className="pt-4">
                <NavLink
                  to="/get-started"
                  className="btn-primary w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;