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
      name: "Upgrade",
      icon: <IoShieldCheckmarkOutline />,
      path: "/Dashboard/Upgrade",
    },
    {
      id: 4,
      name: "Logout",
      icon: <IoLogOutOutline />,
      path: "/Dashboard/Logout",
    },
  ];

  const path = usePathname();

  return (
    <div className="flex flex-col h-full md:w-64 p-5 bg-gradient-to-b from-black/80 via-black/70 to-black/80 backdrop-blur-sm border-r border-white/10">
      <div className="transform hover:scale-105 transition-duration-300">
        <Image
          src="/image/logo-1.png"
          style={{ width: "150px" }}
          width={160}
          height={100}
          alt="logo"
          className="drop-shadow-lg"
        />
      </div>

      <hr className="my-5 border-white/10" />

      <ul className="flex flex-col gap-4 flex-1">
        {Menu.map((item) => (
          <Link href={item.path} key={item.id}>
            <li
              className={`
                flex items-center cursor-pointer
                rounded-lg p-3 transition-all duration-300
                hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20
                hover:shadow-lg hover:shadow-blue-500/10
                ${
                  item.path === path
                    ? "bg-gradient-to-r from-blue-600/20 via-blue-500/20 to-purple-600/20 text-white shadow-lg shadow-blue-500/10"
                    : "text-gray-300 hover:text-white"
                }
              `}
            >
              <span className="mr-3 text-2xl group-hover:text-blue-400">
                {item.icon}
              </span>
              <span className="font-medium">{item.name}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
