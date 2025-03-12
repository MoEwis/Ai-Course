"use client";

import React from "react";
import Image from "next/image";

function LoadingDialog({ loading }) {
  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-sm mx-4 shadow-xl animate-fadeIn">
        <div className="flex flex-col items-center py-8 space-y-4">
          <div className="relative w-24 h-24">
            <Image
              src="/image/idea.gif"
              alt="Loading animation showing business development"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 animate-pulse">
            Please Wait...
          </h2>
        </div>
      </div>
    </div>
  );
}

export default LoadingDialog;
