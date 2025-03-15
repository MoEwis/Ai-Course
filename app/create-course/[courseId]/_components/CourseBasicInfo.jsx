import Image from "next/image";
import React, { useState } from "react";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import Link from "next/link";
import EditCourseBasic from "./EditCourseBasic";

function CourseBasicInfo({ course }) {
  const [courseData, setCourseData] = useState(course);
  const [selectedFile, setSelectedFile] = useState(null);

  // دالة تحديث الكورس المبسطة
  const handleUpdateCourse = async (updatedData) => {
    try {
      // تحديث البيانات مباشرة في state
      setCourseData((prev) => ({
        ...prev,
        courseOutput: {
          ...prev.courseOutput,
          courseName: updatedData.courseOutput.courseName,
          description: updatedData.courseOutput.description,
        },
        category: updatedData.category,
        updatedAt: new Date().toISOString(),
        updatedBy: "MoEwis",
      }));

      return true;
    } catch (error) {
      console.error("Error updating course:", error);
      return false;
    }
  };

  const onFileSelected = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50/30 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Content Section */}
            <div className="space-y-8 order-2 lg:order-1">
              <div className="flex justify-end">
                <EditCourseBasic
                  course={courseData}
                  onUpdateCourse={handleUpdateCourse}
                />
              </div>

              {/* Course Title */}
              <div>
                <h1 className="font-bold text-3xl sm:text-4xl text-gray-900 leading-tight mb-4">
                  {courseData?.courseOutput?.courseName}
                </h1>
              </div>

              {/* Course Description */}
              <p className="text-gray-600 leading-relaxed text-lg">
                {courseData?.courseOutput?.description}
              </p>

              {/* Categories */}
              <div className="flex flex-wrap gap-3">
                <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-xl">
                  <IoExtensionPuzzleOutline className="text-xl text-primary mr-2" />
                  <span className="font-medium text-primary">
                    {courseData?.category}
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <Link href={`/create-course/${courseData?.courseId}/start`}>
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-white rounded-xl font-semibold text-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                    <span className="relative z-10">Start Learning Now</span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-200"></div>
                  </button>
                </Link>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative group order-1 lg:order-2">
              <label
                htmlFor="upload-image"
                className="block cursor-pointer overflow-hidden rounded-2xl aspect-[4/3]"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-blue-600/30 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-white/90 text-primary px-4 py-2 rounded-lg font-medium transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      Change Image
                    </span>
                  </div>
                </div>
                <Image
                  src={
                    selectedFile ||
                    courseData?.imageUrl ||
                    "/image/placeholder.webp"
                  }
                  width={1200}
                  height={900}
                  alt={courseData?.courseOutput?.courseName || "Course Image"}
                  className="w-full h-full object-cover rounded-2xl transform group-hover:scale-105 transition-all duration-700 ease-out"
                  priority
                />
              </label>
              <input
                type="file"
                id="upload-image"
                className="hidden"
                onChange={onFileSelected}
                accept="image/*"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseBasicInfo;
