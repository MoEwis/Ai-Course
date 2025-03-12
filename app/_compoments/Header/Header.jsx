import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="relative bg-cover bg-center bg-no-repeat text-white min-h-screen">
      <video
        className="absolute inset-0 w-full h-full object-cover filter brightness-75"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/image/1226.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80"></div>

      <div className="relative z-10">
        <div className="flex justify-between items-center p-5 backdrop-blur-sm bg-black/30 border-b border-white/10">
          <div className="transform hover:scale-105 transition-transform duration-300">
            <Image
              src="/image/logo-1.png"
              style={{ width: "150px" }}
              width={100}
              height={100}
              alt="logo"
              className="drop-shadow-lg"
            />
          </div>

          <div className="flex items-center gap-6">
            <button
              className="relative px-6 py-3 text-[12px] text-white rounded-lg font-bold uppercase
          bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600
          hover:from-purple-600 hover:via-blue-500 hover:to-blue-600
          transition-all duration-300 ease-in-out
          transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
            >
              <span className="relative z-10">
                <a href="/Dashboard">GET STARTED</a>
              </span>{" "}
              <div className="absolute inset-0 w-full h-full blur-xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-50 rounded-lg"></div>
            </button>

            <UserButton />
          </div>
        </div>

        <section className="mx-auto flex max-w-screen-xl items-center px-6 py-16 lg:px-8 lg:h-screen h-full">
          <div className="text-left pb-52 space-y-8 animate-fadeIn">
            <div className="flex-col gap-4 w-full flex pt-10 justify-center mb-12">
              <div
                className="w-20 h-20 border-4 border-transparent text-blue-400 animate-spin
            flex items-center justify-center border-t-blue-400 rounded-full
            shadow-lg shadow-blue-500/20"
              >
                <div
                  className="w-16 h-16 border-4 border-transparent text-purple-400
              animate-spin flex items-center justify-center border-t-purple-400 rounded-full
              animation-delay-200"
                ></div>
              </div>
            </div>

            <h1
              className="text-5xl font-bold sm:text-8xl tracking-tight"
              style={{
                textShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
              }}
            >
              AI Generator
              <span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-600
            animate-gradient"
              >
                Course
              </span>
            </h1>

            <p className="mt-6 text-xl sm:text-2xl text-gray-300 leading-relaxed max-w-2xl">
              An AI tool for creating and customizing
              <br className="hidden sm:block" />
              <span className="text-blue-400">educational courses</span>{" "}
              tailored to learners' needs.
            </p>

            <div className="mt-12 flex flex-wrap gap-6">
              <button
                className="group relative inline-flex items-center justify-center px-8 py-4
            overflow-hidden rounded-lg text-white font-bold text-lg uppercase tracking-wider
            bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600
            transition-all duration-300 ease-out
            hover:from-purple-600 hover:via-blue-500 hover:to-blue-600
            transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <span className="relative z-10 flex items-center gap-2">
                  GET STARTED
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
                <div
                  className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0
              group-hover:opacity-50 transition-opacity duration-300 blur-xl"
                ></div>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Header;
