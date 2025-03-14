"use client";
import React, { useEffect, useState } from "react";
import { db } from "/configs/db.jsx";
import { CourseList } from "/configs/schema.jsx";
import { useRouter } from "next/navigation";
import { MdAccountCircle } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";

function Explore() {
  const router = useRouter();
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    getAllCourses();
  }, []);

  const formatDateTime = (date) => {
    return date.toISOString().slice(0, 19).replace("T", " ");
  };

  const getAllCourses = async () => {
    try {
      const result = await db.select().from(CourseList);
      setCourses(result);
      console.log("All Courses:", result);
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCourseClick = (courseId) => {
    router.push(`/create-course/${courseId}/start`);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
          <div className="mt-4 text-blue-600 font-medium">
            Loading courses...
          </div>
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
            <div className="space-y-4">
              <div className="space-y-1">
                <h1 className="text-2xl font-bold text-gray-900">
                  Explore Courses
                </h1>
                <p className="text-gray-600">
                  Discover AI-powered courses from our community
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {courses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.courseId}
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
                      <div className="flex items-center gap-2 text-gray-600">
                        <MdAccountCircle className="text-xl text-blue-500" />
                        <span className="text-sm font-medium">
                          {course.userName}
                        </span>
                      </div>
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
                          <span className="font-medium">
                            Updated: {course.updatedAt}
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
                No Courses Found
              </h3>
              <p className="text-gray-600 mb-6">
                Explore our platform and discover new courses.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Explore;
