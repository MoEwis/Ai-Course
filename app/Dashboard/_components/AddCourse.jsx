"use client";
import { useUser } from "@clerk/nextjs";
import React, { useState, useEffect } from "react";
import { Button } from "/@/components/ui/button";
import Link from "next/link";

function AddCourse() {
  const { user } = useUser();
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

  return (
    <div className="bg-white border-b border-gray-100 shadow-sm py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Left Section - Welcome and DateTime */}
          <div className="space-y-4">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-gray-900">
                Hello,{" "}
                <span className="text-blue-600">
                  {user?.fullName || "MoEwis"}
                </span>
              </h2>
              <p className="text-gray-600">
                Create and manage your AI-powered courses
              </p>
            </div>
          </div>

          {/* Right Section - Create Button */}
          <Link href="/create-course">
            <Button
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 
                         hover:from-blue-700 hover:to-indigo-700
                         text-white rounded-lg font-medium text-sm
                         transition-all duration-200 transform hover:scale-105
                         shadow-lg shadow-blue-500/25
                         flex items-center gap-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Create AI Course
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AddCourse;
