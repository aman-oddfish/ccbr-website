'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="min-h-auto">
      {/* Top Header */}
      <div className="bg-[#1e374d]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/3 lg:w-1/4">
              <div className="animate-fadeInLeft">
                <Link href="/" className="block">
                  <img 
                    src="https://assets.cdn.thewebconsole.com/S3WEB9810/l/logo11.png" 
                    alt="CCBR Logo" 
                    className="h-auto"
                  />
                </Link>
              </div>
            </div>
            <div className="w-full md:w-2/3 lg:w-3/4">
              <div className="flex justify-end space-x-4 animate-fadeInRight">
                <Link 
                  href="/ccbr-magazine-subscription" 
                  className="bg-[#00b3ba] text-white px-4 py-2 rounded hover:bg-[#009ba1] transition-colors"
                >
                  <span className="block">
                    <span className="font-bold">ccbr</span> Magazine Subscription
                  </span>
                </Link>
                <Link 
                  href="/advertise-in-ccbr" 
                  className="bg-[#00b3ba] text-white px-4 py-2 rounded hover:bg-[#009ba1] transition-colors"
                >
                  <span className="block">
                    Advertise<span className="ml-1">in <span className="font-bold">ccbr</span></span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="bg-[#1e374d]">
        <div className="container mx-auto px-4">
          <nav className="py-4">
            <div className="flex flex-wrap items-center justify-between">
              <div className="block md:hidden">
                <button className="text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
              <div className="hidden md:block w-full md:w-auto">
                <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
                  <li><Link href="/" className="text-white hover:text-[#00b3ba]">Home</Link></li>
                  <li><Link href="/blog/tag/editorial" className="text-white hover:text-[#00b3ba]">Editorial</Link></li>
                  <li className="relative group">
                    <Link href="/blog/tag/news" className="text-white hover:text-[#00b3ba]">News</Link>
                    <ul className="absolute hidden group-hover:block bg-white shadow-lg py-2 w-48">
                      <li><Link href="/blog/tag/business-news" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Business News</Link></li>
                      <li><Link href="/blog/tag/cover-story" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Cover Stories</Link></li>
                      <li><Link href="/blog/tag/manufacturing-news" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Manufacturing News</Link></li>
                      <li><Link href="/blog/tag/property" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Property News</Link></li>
                      <li><Link href="/blog/tag/tourism-news" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Tourism News</Link></li>
                    </ul>
                  </li>
                  <li><Link href="/ccbr-magazine-subscription" className="text-white hover:text-[#00b3ba]">Subscribe</Link></li>
                  <li><Link href="/advertise-in-ccbr" className="text-white hover:text-[#00b3ba]">Advertise</Link></li>
                  <li className="relative group">
                    <Link href="#" className="text-white hover:text-[#00b3ba]">Publications</Link>
                    <ul className="absolute hidden group-hover:block bg-white shadow-lg py-2 w-48">
                      <li><Link href="/central-coast-business-investment" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Invest on the Central Coast</Link></li>
                      <li><Link href="/ccbr-yearbook-2023" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">CCBR Yearbook 2023</Link></li>
                      <li><Link href="/central-coast-business-directory" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Central Coast Business Directory</Link></li>
                    </ul>
                  </li>
                  <li><Link href="/contact-us" className="text-white hover:text-[#00b3ba]">Contact Us</Link></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Search Panel */}
      <div className="bg-[#00b3ba] border-b border-[#1d384d] h-[60px]">
        <div className="container mx-auto px-4 h-full">
          <form onSubmit={handleSearch} className="h-full flex items-center">
            <div className="flex-1 flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
                className="w-full px-4 py-2 rounded-l focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[#1e374d] text-white px-4 py-2 rounded-r hover:bg-[#2a4a66] transition-colors"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Tagline Panel */}
      <div className="bg-[#1e374d] py-5 px-4">
        <div className="container mx-auto">
          <p className="text-white text-center text-lg">
            The Central Coast&apos;s Most Trusted News Source For Over 30 Years
          </p>
        </div>
      </div>
    </header>
  );
}
