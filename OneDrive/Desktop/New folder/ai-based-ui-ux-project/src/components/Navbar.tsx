'use client';

import Link from 'next/link';
import React, { useState } from 'react';

const navItems = [
  {
    label: 'Product',
    dropdown: [
      { label: 'UI Design', href: '#' },
      { label: 'AI-powered UI design', href: '#' },
      { label: 'UX Design', href: '#' },
      { label: 'UX design simplified', href: '#' },
      { label: 'Wireframing', href: '#' },
      { label: 'Easy online wireframing', href: '#' },
      { label: 'Mockups', href: '#' },
      { label: 'Digital product mockups', href: '#' },
      { label: 'Prototyping', href: '#' },
      { label: 'Prototyping made easy', href: '#' },
      { label: 'Magic iconAI Design', href: '#' },
      { label: 'Design Assistant', href: '#' },
      { label: 'Explore Uizard\'s magical AI features', href: '#' },
      { label: 'Autodesigner 2.0', href: '#' },
      { label: 'Generate projects, screens, and themes', href: '#' },
      { label: 'Screenshot Scanner', href: '#' },
      { label: 'Turn screenshots into editable mockups', href: '#' },
      { label: 'Wireframe Scanner', href: '#' },
      { label: 'Digitize your hand-drawn wireframes', href: '#' },
    ],
  },
  {
    label: 'Templates',
    dropdown: [
      { label: 'Mobile App Design', href: '#' },
      { label: 'Website Design', href: '#' },
      { label: 'Web App Design', href: '#' },
      { label: 'Tablet App Design', href: '#' },
      { label: 'App Wireframes', href: '#' },
      { label: 'Website Wireframes', href: '#' },
    ],
  },
  {
    label: 'Solutions',
    dropdown: [
      { label: 'Product Managers & Product Teams', href: '#' },
      { label: 'Designers & UX Pros', href: '#' },
      { label: 'Marketers', href: '#' },
      { label: 'Startup Founders', href: '#' },
      { label: 'Consultants & Agencies', href: '#' },
      { label: 'Developers', href: '#' },
      { label: 'Enterprise', href: '#' },
    ],
  },
  { label: 'Blog', href: '#' },
  { label: 'Pricing', href: '#' },
];

const Navbar: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="w-full bg-transparent fixed top-6 left-0 z-50 flex justify-center pointer-events-none select-none">
      <div className="w-full max-w-6xl flex items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white pointer-events-auto select-auto">
          AI<span className="gradient-text-purple">Design</span>
        </Link>
        {/* Centered Nav */}
        <div className="flex-1 flex justify-center">
          <div className="relative flex items-center justify-center">
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl rounded-full px-8 py-3 flex gap-2 md:gap-6 items-center pointer-events-auto select-auto transition-all duration-300 hover:shadow-2xl"
                 style={{ minWidth: '600px', maxWidth: '90vw' }}>
              {navItems.map((item) =>
                item.dropdown ? (
                  <div
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button className="text-white px-3 py-2 rounded-full hover:bg-white/20 transition-all font-medium flex items-center gap-1">
                      {item.label}
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </button>
                    {openDropdown === item.label && (
                      <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-72 bg-black/90 border border-white/10 rounded-xl shadow-lg py-2 z-50 pointer-events-auto select-auto">
                        {item.dropdown.map((sub, idx) => (
                          <Link
                            key={sub.label + idx}
                            href={sub.href}
                            className="block px-5 py-2 text-white hover:bg-white/10 rounded-lg transition-all text-sm"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-white px-3 py-2 rounded-full hover:bg-white/20 transition-all font-medium"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
        {/* Auth Buttons */}
        <div className="flex items-center gap-2 pointer-events-auto select-auto">
          <Link href="/signin" className="text-white px-5 py-2 rounded-full hover:bg-white/20 transition-all font-medium">
            Log in
          </Link>
          <Link href="/signup" className="px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg">
            Sign up for free
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 