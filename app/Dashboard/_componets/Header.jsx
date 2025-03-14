"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { SiOpenai } from "react-icons/si";

function Header() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []); // Empty dependency array means this effect runs once on mount

  // Format time function
  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  };

  // Format date function
  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="flex justify-between items-center max-w-full px-6 py-3">
        {/* Logo Section */}
        <div className="flex items-center gap-2 transform hover:scale-105 transition-transform duration-300">
          <SiOpenai className="text-3xl text-blue-600" />
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            AI Generator
          </span>
        </div>

        {/* Right Section with Time and UserButton */}
        <div className="flex items-center gap-6">
          {/* Current Date and Time Display */}
          <div className="hidden md:flex flex-col items-end">
            <div className="text-sm font-medium text-gray-600">
              {formatDate(currentTime)}
            </div>
            <div className="text-sm text-blue-600 font-medium">
              {formatTime(currentTime)}
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block h-8 w-px bg-gray-200"></div>

          {/* User Section */}
          <div className="flex items-center gap-3">
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "hover:scale-105 transition-all duration-200",
                  rootBox: "hover:opacity-80 transition-all duration-200",
                },
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
