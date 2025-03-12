"use client";
import React, { useEffect, useState } from "react";
import { db } from "/configs/db.jsx";
import { CourseList } from "/configs/schema.jsx";
import { useRouter } from "next/navigation";
import { MdAccountCircle } from "react-icons/md";

function Explore() {
  const router = useRouter();
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllCourses();
  }, []);

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
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {courses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.courseId}
                onClick={() => handleCourseClick(course.courseId)}
                className="group cursor-pointer transform transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl">
                  {/* Course Banner */}
                  <div className="h-48 bg-gradient-to-r from-blue-500 to-indigo-600 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl text-white font-bold opacity-20 group-hover:opacity-30 transition-opacity">
                        {course.name?.charAt(0)}
                      </span>
                    </div>
                  </div>

                  {/* Course Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                        {course.category || "Course"}
                      </span>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MdAccountCircle className="text-xl" />
                        <span className="text-sm font-medium">
                          {course.userName}
                        </span>
                      </div>
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {course.name}
                    </h2>

                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {course.courseOutput.description ||
                        "No description available"}
                    </p>

                    {/* Metadata */}
                    <div className="border-t pt-4 mt-4">
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-2">
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
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span>{course.updatedAt}</span>
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
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg mx-auto">
              <div className="mb-4">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
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
