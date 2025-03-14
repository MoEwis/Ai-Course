"use client";
import React, { useState, useEffect } from "react";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { MdGavel, MdSecurity, MdPeople } from "react-icons/md";

function PlatformEthics() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDateTime = (date) => {
    return date.toISOString().slice(0, 19).replace("T", " ");
  };

  const ethicsCategories = [
    {
      title: "Content Integrity",
      icon: <IoShieldCheckmarkOutline className="text-4xl text-blue-600" />,
      rules: [
        "Respect intellectual property rights",
        "Create original and authentic content",
        "Properly cite all sources and references",
        "Maintain academic honesty in all materials",
      ],
    },
    {
      title: "User Conduct",
      icon: <MdPeople className="text-4xl text-green-600" />,
      rules: [
        "Engage in constructive discussions",
        "Report inappropriate content",
      ],
    },
    {
      title: "Platform Security",
      icon: <MdSecurity className="text-4xl text-purple-600" />,
      rules: [
        "Protect your account credentials",
        "Don't share access with others",
        "Report security concerns promptly",
        "Use secure and updated devices",
      ],
    },
    {
      title: "Course Guidelines",
      icon: <MdGavel className="text-4xl text-orange-600" />,
      rules: [
        "Provide accurate course descriptions",
        "Update content regularly",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-100 shadow-sm py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="space-y-4">
              <div className="space-y-1">
                <h1 className="text-2xl font-bold text-gray-900">
                  Platform Ethics & Guidelines
                </h1>
                <p className="text-gray-600">
                  Understanding our community standards and course policies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ethicsCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                {category.icon}
                <h2 className="text-xl font-bold text-gray-900">
                  {category.title}
                </h2>
              </div>
              <ul className="space-y-3">
                {category.rules.map((rule, ruleIndex) => (
                  <li key={ruleIndex} className="flex items-start gap-3">
                    <div className="min-w-[20px] h-5 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    </div>
                    <span className="text-gray-600">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Agreement Section */}
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="text-center">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Community Agreement
            </h3>
            <p className="text-gray-600 mb-6">
              By using this platform, you agree to follow these guidelines and
              maintain the highest standards of academic integrity and
              professional conduct.
            </p>
            <button
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 
                           hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg
                           transition-all duration-200 transform hover:scale-105
                           shadow-lg shadow-blue-500/25"
            >
              I Understand and Agree
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlatformEthics;
