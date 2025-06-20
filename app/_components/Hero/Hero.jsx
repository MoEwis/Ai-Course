import React from "react";
import "./Hero.css";
import { Motion } from "framer-motion";

function Hero() {
  const categories = [
    "Programming",
    "Health & Fitness",
    "Business",
    "Design",
    "Marketing",
    "AI & Machine Learning",
    "Cooking",
    "Creative",
    "Photography",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
      },
    },
  };
  return (
    <div>
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-black min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="text-center relative z-10">
          <div
            className="max-w-4xl mx-auto p-10 rounded-2xl
      bg-gradient-to-b from-black/70 to-black/40
      backdrop-blur-xl border border-white/10
      transform hover:scale-[1.01] transition-all duration-500
      shadow-[0_0_50px_0_rgba(0,0,0,0.3)]"
          >
            {/* Title with animated gradient */}
            <div className="relative">
              <h2
                className="text-5xl font-bold py-8 text-transparent bg-clip-text
          bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400
          animate-gradient-x sm:text-6xl"
              >
                AI Course Generator
              </h2>
              <div className="absolute -inset-1 blur-lg bg-gradient-to-r from-blue-600 to-purple-600 opacity-20"></div>
            </div>

            {/* Decorative elements */}
            <div className="flex justify-center gap-2 my-6">
              <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse"></div>
              <div className="w-3 h-3 rounded-full bg-purple-400 animate-pulse delay-75"></div>
              <div className="w-3 h-3 rounded-full bg-pink-400 animate-pulse delay-150"></div>
            </div>

            {/* Enhanced description */}
            <p
              className="mt-6 text-xl text-gray-300 sm:text-2xl leading-relaxed
        px-4 sm:px-8 font-light"
            >
              It is an{" "}
              <span className="text-blue-400 font-medium">innovative tool</span>{" "}
              powered by
              <span className="text-purple-400 font-medium">
                {" "}
                artificial intelligence
              </span>{" "}
              designed to create and customize educational courses. This tool
              helps educational institutions and trainers develop
              <span className="text-pink-400 font-medium">
                {" "}
                dynamic learning content
              </span>{" "}
              that suits the needs of learners while considering different
              levels, educational objectives, and modern teaching methods.
            </p>

            {/* Gradient divider with animation */}
            <div className="relative mt-12">
              <div className="absolute inset-0 blur-md bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-50"></div>
              <div className="h-px bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 w-full transform hover:scale-x-110 transition-transform duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-screen text-center overflow-hidden flex items-center justify-center bg-slate-900">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover transform transition-transform duration-[20s] hover:scale-100"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/image/hero-3.mp4" type="video/mp4" />
        </video>

        {/* Enhanced gradient overlay with animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/75 to-black/90 backdrop-blur-[2px] bg-gradient-animate" />

        {/* Main content container */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto p-6 z-10">
          {categories.map((category, index) => (
            <button
              key={index}
              className="category-item group relative animate-float"
            >
              {/* Animated glow effect */}
              <div
                className="absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 blur-xl"
                style={{ opacity: 0.2 }}
              />

              {/* Button content */}
              <div className="relative flex items-center gap-4 rounded-xl border border-slate-700/50 bg-slate-950/90 p-4 backdrop-blur-md">
                {/* Icon container */}
                <div className="relative">
                  <div className="absolute -inset-1 rounded-lg bg-teal-500/30 blur-md" />
                  <svg
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="relative h-8 w-8 text-teal-400"
                  >
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  </svg>
                </div>

                {/* Text content */}
                <div className="flex flex-col items-start">
                  <span className="text-xl font-bold text-white tracking-wide group-hover:text-teal-400 transition-colors duration-300">
                    {category}
                  </span>
                  <span className="text-sm font-medium text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                    Explore Now
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Hero;
