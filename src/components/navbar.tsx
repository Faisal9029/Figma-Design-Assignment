"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main>
      <div className="container mx-auto flex justify-between items-center h-[91px] px-4 md:px-20">
        <div className="h-[32px] text-2xl font-bold text-white mb-1">
          <Link href="/">BrandName</Link>
        </div>
        <div className="hidden lg:flex lg:w-[815px] text-white font-bold text-[14px] items-center justify-between">
          <ul className="flex gap-4">
            <li className="border-b-2 hover:rounded-lg p-1 border-[#252B42] hover:border-b-2 hover:border-white">
              <Link href="/">Home</Link>
            </li>
            <li className="border-b-2 border-[#252B42] hover:rounded-lg p-1 hover:border-b-2 hover:border-white">
              <Link href="/product">Product</Link>
            </li>
            <li className="border-b-2 border-[#252B42] hover:rounded-lg p-1 hover:border-b-2 hover:border-white">
              <Link href="/pricing">Pricing</Link>
            </li>
            <li className="border-b-2 border-[#252B42] hover:rounded-lg p-1 hover:border-b-2 hover:border-white">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <div className="flex justify-center items-center gap-7">
            <span className="hover:text-gray-300">Login</span>
            <button className="bg-[#23A6F0] border border-white hover:bg-white hover:text-black hover:border hover:border-black transition-colors w-[110px] h-[52px] rounded-l-lg">
              Join Us
            </button>
          </div>
        </div>

        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-16 left-0 right-0 bg-[#292e43] p-4 z-10`}
      >
        <ul className="flex flex-col items-center text-white">
          <li className="py-2">
            <Link href="/">Home</Link>
          </li>
          <hr />
          <li className="py-2">
            <Link href="/product">Product</Link>
          </li>
          <hr />
          <li className="py-2">
            <Link href="/pricing">Pricing</Link>
          </li>
          <hr />
          <li className="py-2">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div className="flex justify-center gap-4 items-center mt-4">
          <Link href="#" className="hover:text-gray-300 text-white">
            Login
          </Link>
          <button className="bg-[#23A6F0] border border-white hover:bg-white hover:text-black hover:border hover:border-black transition-colors w-[100px] h-[52px] rounded-l-lg">
            Join Us
          </button>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
