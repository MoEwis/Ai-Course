"use client";
import React, { useState } from "react";
import Header from "../Dashboard/_componets/Header";
import { UserInputContext } from "../_context/UserInputContext";

function CreateCourselayout({ children }) {
  const [userCourseInput, setUserCourseInput] = useState({ category: "" });

  return (
    <UserInputContext.Provider value={{ userCourseInput, setUserCourseInput }}>
      <>
        <Header />
        {children}
      </>
    </UserInputContext.Provider>
  );
}

export default CreateCourselayout;
