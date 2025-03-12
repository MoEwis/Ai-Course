import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div
      className="flex justify-between items-center w-full p-4 
    bg-gradient-to-r from-black/80 via-black/70 to-black/80 
    backdrop-blur-sm border-b border-white/10 
    hover:shadow-lg hover:shadow-blue-500/10"
    >
      <div className="transform hover:scale-105 transition-duration-300">
        <Image
          src="/image/logo-1.png"
          width={150}
          height={100}
          alt="logo"
          className="drop-shadow-lg"
        />
      </div>
      <UserButton className="text-gray-300 hover:text-white transition-colors duration-300" />
    </div>
  );
}

export default Header;
