"use client";

import Image from "next/image";
import CategoryList from "/app/_shared/CategoryList";
import React, { useContext, useState } from "react";
import { UserInputContext } from "/app/_context/UserInputContext";

function SelectCategory() {
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);
  const handleCategoryChange = (category) => {
    setUserCourseInput((prev) => ({ ...prev, category: category }));
  };
  return (
    <div className="grid grid-cols-3 max-md:grid-cols-1 gap-10">
      {CategoryList.map((item, index) => (
        <div
          key={item.id}
          className={`"flex flex-col p-5 border items-center rounded-xl hover:border-primary hover:bg-blue-50 cursor-pointer" ${
            userCourseInput?.category === item.name
              ? "border-primary bg-blue-50"
              : ""
          }`}
          onClick={() => handleCategoryChange(item.name)}
        >
          <Image src={item.icon} width={50} height={50} alt={item.name} />
          <h2>{item.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default SelectCategory;
