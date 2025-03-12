import { UserButton } from "@clerk/nextjs";
import React from "react";
import AddCourse from "./_componets/AddCourse";
import UserCourseList from "./_componets/UserCourseList";
function Dashboard() {
  return (
    <div>
      <AddCourse></AddCourse>
      <UserCourseList></UserCourseList>
    </div>
  );
}

export default Dashboard;
