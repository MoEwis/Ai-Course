"use client";
import { createContext, useState } from "react";

export const UserInputContext = createContext(null);

export const UserInputProvider = ({ children }) => {
  const [userCourseInput, setUserCourseInput] = useState({
    category: "",
  });

  return (
    <UserInputContext.Provider value={{ userCourseInput, setUserCourseInput }}>
      {children}
    </UserInputContext.Provider>
  );
};
