"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { db } from "/configs/db";
import { and, eq } from "drizzle-orm";
import { CourseList } from "/configs/schema";
import { useUser } from "@clerk/nextjs";
import {
  FaRegCopy,
  FaCheck,
  FaBook,
  FaClock,
  FaUser,
  FaLanguage,
  FaChartBar,
  FaFolder,
  FaLayerGroup,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

function FinishScreen({ params }) {
  const unwrappedParams = React.use(params); // حل مشكلة params
  const { user } = useUser();
  const [course, setCourse] = useState(null);
  const [copied, setCopied] = useState(false);
  const [activeChapter, setActiveChapter] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (unwrappedParams?.courseId && user) {
      getCourse();
    }
  }, [unwrappedParams, user]);

  const getCourse = async () => {
    try {
      const result = await db
        .select()
        .from(CourseList)
        .where(
          and(
            eq(CourseList.courseId, unwrappedParams.courseId),
            eq(CourseList.createdBy, user.primaryEmailAddress.emailAddress)
          )
        );
      setCourse(result[0] || null);
    } catch (error) {
      console.error("Error fetching course:", error);
      setCourse(null);
    }
  };

  const handleCopyUrl = async () => {
    const urlToCopy = `${process.env.NEXT_PUBLIC_HOST_NAME}/create-course/${course?.courseId}/start`;
    try {
      await navigator.clipboard.writeText(urlToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300">
          {/* Success Banner */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 text-center">
            <div className="transform transition-transform duration-300 hover:scale-105">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                🎉 Congratulations!
              </h2>
              <p className="text-xl text-blue-100">
                Your course has been successfully created
              </p>
            </div>
          </div>

          <div className="p-8">
            {/* Course Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <FaBook className="text-blue-600 text-xl" />
                  <h3 className="text-2xl font-bold text-gray-800">
                    {course?.courseOutput?.courseName}
                  </h3>
                </div>
                <div className="space-y-2">
                  <InfoItem
                    icon={<FaUser />}
                    label="Instructor"
                    value={course?.userName}
                  />
                  <InfoItem
                    icon={<FaClock />}
                    label="Duration"
                    value={course?.courseOutput?.courseDuration}
                  />
                  <InfoItem
                    icon={<FaLanguage />}
                    label="Language"
                    value={course?.courseOutput?.courseLanguage}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <InfoItem
                    icon={<FaChartBar />}
                    label="Level"
                    value={course?.courseOutput?.level}
                  />
                  <InfoItem
                    icon={<FaFolder />}
                    label="Category"
                    value={course?.courseOutput?.category}
                  />
                  <InfoItem
                    icon={<FaLayerGroup />}
                    label="Chapters"
                    value={course?.courseOutput?.numberOfChapters}
                  />
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8 p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                About this Course
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {course?.courseOutput?.description}
              </p>
            </div>

            {/* Chapters Accordion */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Course Content
              </h3>
              <div className="space-y-3">
                {course?.courseOutput?.chapters?.map((chapter, index) => (
                  <ChapterAccordion
                    key={index}
                    chapter={chapter}
                    isActive={activeChapter === index}
                    onClick={() =>
                      setActiveChapter(activeChapter === index ? null : index)
                    }
                  />
                ))}
              </div>
            </div>

            {/* Share Section */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Share Your Course
              </h3>
              <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl">
                <input
                  type="text"
                  value={`${process.env.NEXT_PUBLIC_HOST_NAME}create-course/${course?.courseId}/start`}
                  readOnly
                  className="flex-1 p-3 bg-white rounded-lg border border-blue-200 text-gray-600"
                />
                <button
                  onClick={handleCopyUrl}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-200
                    ${
                      copied
                        ? "bg-green-500 text-white"
                        : "bg-blue-600 hover:bg-blue-700 text-white"
                    }`}
                >
                  {copied ? (
                    <>
                      <FaCheck />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <FaRegCopy />
                      <span>Copy Link</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => router.push("/Dashboard")}
                className="px-8 py-3 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all duration-200"
              >
                Back to Dashboard
              </button>
              <button
                onClick={() =>
                  router.push(`/create-course/${course?.courseId}/start`)
                }
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transition-all duration-200"
              >
                Start Learning
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper Components
const InfoItem = ({ icon, label, value }) => (
  <div className="flex items-center space-x-2 text-gray-600">
    <span className="text-blue-600">{icon}</span>
    <span className="font-medium">{label}:</span>
    <span>{value}</span>
  </div>
);

const ChapterAccordion = ({ chapter, isActive, onClick }) => (
  <div
    className={`border rounded-xl overflow-hidden transition-colors duration-200 
    ${isActive ? "bg-blue-50" : "bg-white hover:bg-gray-50"}`}
  >
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between p-4 text-left"
    >
      <div className="flex items-center space-x-3">
        <span className="text-blue-600">{chapter.chapterNumber}</span>
        <h4 className="font-medium text-gray-800">{chapter.chapterName}</h4>
      </div>
      <div className="flex items-center space-x-3">
        <span className="text-sm text-gray-500">{chapter.duration}</span>
        {isActive ? (
          <FaChevronUp className="text-blue-600" />
        ) : (
          <FaChevronDown className="text-gray-400" />
        )}
      </div>
    </button>

    {isActive && (
      <div className="px-4 pb-4">
        <p className="text-gray-600 mb-2">{chapter.about}</p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          {chapter.content.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

export default FinishScreen;
