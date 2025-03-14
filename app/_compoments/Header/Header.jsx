import { UserButton } from "@clerk/nextjs";
import { Button } from "/components/ui/button";
import Image from "next/image";
import React from "react";
import { SiOpenai } from "react-icons/si";
function Header() {
  return (
    <>
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo Section */}
          <div className="flex items-center gap-2 transform hover:scale-105 transition-transform duration-300">
            <SiOpenai className="text-3xl text-blue-600" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              AI Generator
            </span>
          </div>

          {/* CTA and User Button Section */}
          <div className="flex items-center gap-6">
            <Button
              className="relative overflow-hidden group px-6 py-2.5 rounded-lg
                       bg-gradient-to-r from-blue-600 to-indigo-600 
                       hover:from-blue-700 hover:to-indigo-700
                       text-white font-medium text-sm
                       transition-all duration-200 transform hover:scale-105
                       shadow-lg shadow-blue-500/25"
            >
              <span className="relative z-10">
                <a href="/Dashboard">GET STARTED</a>
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-200"></div>
            </Button>
            <UserButton />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Background Decorations */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:py-10">
            {/* Grid Container */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-sm font-semibold rounded-full border border-blue-100">
                    AI-Powered Learning Platform
                  </span>

                  <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
                    Transform Your Learning Experience with{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                      AI
                    </span>
                  </h1>
                  <p className="text-lg text-gray-600 max-w-2xl">
                    Unlock your potential with our AI-driven educational
                    platform. Create personalized learning paths and achieve
                    your goals faster.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Button
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 
                                   hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg
                                   shadow-lg shadow-blue-500/25 transform hover:scale-105
                                   transition-all duration-200"
                  >
                    <a href="/Dashboard"> Get Started Now </a>
                  </Button>
                  <Button
                    className="px-8 py-3 bg-white text-gray-700 rounded-lg
                                   border border-gray-200 hover:border-blue-500
                                   shadow-lg shadow-gray-200/25 transform hover:scale-105
                                   transition-all duration-200"
                  >
                    Learn More
                  </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8">
                  {["1M+ Users", "50+ Courses", "99% Success"].map((stat) => (
                    <div key={stat} className="text-center">
                      <div className="text-xl font-bold text-gray-900">
                        {stat}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="relative lg:block">
                <div className="relative z-10 ">
                  <Image
                    src="/image/Education.png" // Make sure to add your hero image
                    alt="AI Learning Platform"
                    width={600}
                    height={600}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
