'use client'
// components/Navbar.tsx
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className=" text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <Image src="/images/layer 1.png" alt="Logo" width={160} height={40} />
          </Link>
        </div>
        <div className="flex items-center text-[#101010]">
          <Link href="/about" className="mr-4">
            About
          </Link>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="mr-4 focus:outline-none"
            >
              Services
            </button>
            {dropdownOpen && (
              <div className="absolute bg-gray-700 text-white py-2 mt-2 rounded shadow-lg">
                <Link href="/services/service1">
                  <a className="block px-4 py-2 hover:bg-gray-600">Service 1</a>
                </Link>
                <Link href="/services/service2">
                  <a className="block px-4 py-2 hover:bg-gray-600">Service 2</a>
                </Link>
                <Link href="/services/service3">
                  <a className="block px-4 py-2 hover:bg-gray-600">Service 3</a>
                </Link>
              </div>
            )}
          </div>
          <Link href="/contact" className="mr-4">
            Contact
          </Link>
          <Link href="/signup" className="mr-4">
            Sign Up
          </Link>
          <Link href="/signin">
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
