"use client";
import { Progress } from "/@/components/ui/progress";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  IoHomeOutline,
  IoShieldCheckmarkOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import { MdOutlineHorizontalSplit } from "react-icons/md";
import { IoHelpCircleOutline } from "react-icons/io5";
import { SiOpenai } from "react-icons/si";
function SideBar() {
  const Menu = [
    {
      id: 1,
      name: "Home",
      icon: <IoHomeOutline />,
      path: "/Dashboard",
    },
    {
      id: 2,
      name: "Explore",
      icon: <MdOutlineHorizontalSplit />,
      path: "/Dashboard/explore",
    },
    {
      id: 3,
      name: "PlatformEthics",
      icon: <IoShieldCheckmarkOutline />,
      path: "/Dashboard/PlatformEthics",
    },
    {
      id: 4,
      name: "Help Center",
      icon: <IoHelpCircleOutline />,
      path: "/Dashboard/help",
    },
    {
      id: 5,
      name: "Logout",
      icon: <IoLogOutOutline />,
      path: "/",
    },
  ];

  const path = usePathname();

  return (
    <div className="flex flex-col h-full md:w-64 bg-white border-r border-gray-100 shadow-sm">
      {/* Logo Section */}
      <div className="flex items-center gap-2 transform hover:scale-105 transition-transform duration-300 p-5">
        <SiOpenai className="text-3xl text-blue-600" />
        <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          AI Generator
        </span>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mx-6" />

      {/* Navigation Menu */}
      <div className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          {Menu.map((item) => (
            <Link href={item.path} key={item.id}>
              <li
                className={`
                  flex items-center cursor-pointer
                  rounded-lg px-4 py-3 transition-all duration-200
                  group relative
                  ${
                    item.path === path
                      ? "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600"
                      : "text-gray-600 hover:bg-gray-50"
                  }
                `}
              >
                {/* Active Indicator */}
                {item.path === path && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-600 rounded-r-full" />
                )}

                {/* Icon */}
                <span
                  className={`mr-3 text-xl transition-colors duration-200
                    ${
                      item.path === path
                        ? "text-blue-600"
                        : "text-gray-400 group-hover:text-blue-600"
                    }
                  `}
                >
                  {item.icon}
                </span>

                {/* Text */}
                <span
                  className={`font-medium transition-colors duration-200
                    ${
                      item.path === path
                        ? "text-blue-600"
                        : "text-gray-600 group-hover:text-blue-600"
                    }
                  `}
                >
                  {item.name}
                </span>

                {/* Hover Effect */}
                {item.path !== path && (
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-50" />
                  </div>
                )}
              </li>
            </Link>
          ))}
        </ul>
      </div>

      {/* Optional: Bottom Section */}
      <div className="p-4 mt-auto">
        <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
          <p className="text-sm text-gray-600 font-medium">Welcome back</p>
          <p className="text-blue-600 font-semibold">Instructor</p>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
