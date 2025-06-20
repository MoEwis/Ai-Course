"use client";
import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { db } from "/configs/db.jsx";
import { CourseList, Chapters } from "/configs/schema.jsx";
import { eq } from "drizzle-orm";
import { MdDeleteOutline } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";

function UserCourseList() {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [courseChapters, setCourseChapters] = useState([]);
  const [isLoadingCourse, setIsLoadingCourse] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format date and time
  const formatDateTime = (date) => {
    return date.toISOString().slice(0, 19).replace("T", " ");
  };

  useEffect(() => {
    if (isLoaded && user) {
      getUserCourses();
    }
  }, [isLoaded, user]);

  const getUserCourses = async () => {
    try {
      const result = await db
        .select()
        .from(CourseList)
        .where(
          eq(CourseList.createdBy, user.primaryEmailAddress?.emailAddress)
        );
      setCourses(result);
      console.log("Courses:", result);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const handleCourseClick = async (courseId) => {
    try {
      setIsLoadingCourse(true);

      const [courseDetails, chaptersResult] = await Promise.all([
        db.select().from(CourseList).where(eq(CourseList.courseId, courseId)),
        db.select().from(Chapters).where(eq(Chapters.courseId, courseId)),
      ]);

      const formattedChapters = chaptersResult.map((chapter) => {
        try {
          const content =
            typeof chapter.content === "string"
              ? JSON.parse(chapter.content)
              : chapter.content;
          return {
            ...chapter,
            content,
          };
        } catch (error) {
          console.error("Error parsing chapter content:", error);
          return {
            ...chapter,
            content: {
              title: "Error loading content",
              description: "Could not load chapter content",
            },
          };
        }
      });

      setSelectedCourse(courseDetails[0]);
      setCourseChapters(formattedChapters);
      router.push(`/create-course/${courseId}/start`);
    } catch (error) {
      console.error("Error loading course details:", error);
    } finally {
      setIsLoadingCourse(false);
    }
  };

  const handleDeleteCourse = async (courseId, e) => {
    e.stopPropagation();

    try {
      await db.delete(CourseList).where(eq(CourseList.courseId, courseId));
      setCourses(courses.filter((course) => course.courseId !== courseId));
      console.log("Course deleted successfully");
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
          <div className="mt-4 text-blue-600 font-medium">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-100 shadow-sm py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Left side - Title and Time */}
            <div className="space-y-1">
              <h1 className="text-2xl font-bold text-gray-900">Your Courses</h1>
            </div>

            {/* Right side - Create Button */}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {isLoadingCourse ? (
          <div className="flex items-center justify-center min-h-[200px]">
            <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
          </div>
        ) : courses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                onClick={() => handleCourseClick(course.courseId)}
                className="group cursor-pointer transform transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-white rounded-xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden">
                  {/* Course Banner */}
                  <div className="h-48 bg-gradient-to-r from-blue-500 to-indigo-600 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/5"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <IoBookOutline className="text-6xl text-white opacity-20 group-hover:opacity-30 transition-opacity transform group-hover:scale-110 duration-300" />
                    </div>
                  </div>

                  {/* Course Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full">
                        {course.category || "Course"}
                      </span>
                      <button
                        onClick={(e) => handleDeleteCourse(course.courseId, e)}
                        className="flex items-center gap-2 px-3 py-1 text-red-600 hover:text-red-700 
                                 hover:bg-red-50 rounded-full transition-colors duration-200"
                      >
                        <MdDeleteOutline className="text-xl" />
                        <span className="text-sm font-medium">Delete</span>
                      </button>
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {course.name}
                    </h2>

                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {course.courseOutput?.description ||
                        "No description available"}
                    </p>

                    {/* Metadata */}
                    <div className="border-t border-gray-100 pt-4 mt-4">
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-2">
                          <svg
                            className="w-4 h-4 text-blue-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span className="font-medium text-gray-600">
                            Last updated by: {course.userName}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 max-w-lg mx-auto">
              <div className="mb-4">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto">
                  <IoBookOutline className="text-3xl text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                No Courses Yet
              </h3>
              <p className="text-gray-600 mb-6">
                Start your teaching journey by creating your first course.
              </p>
              <button
                onClick={() => router.push("/create-course")}
                className="inline-flex items-center px-6 py-3 rounded-lg
                         bg-gradient-to-r from-blue-600 to-indigo-600 
                         hover:from-blue-700 hover:to-indigo-700
                         text-white font-medium text-sm
                         transition-all duration-200 transform hover:scale-105
                         shadow-lg shadow-blue-500/25"
              >
                Create New Course
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserCourseList;
