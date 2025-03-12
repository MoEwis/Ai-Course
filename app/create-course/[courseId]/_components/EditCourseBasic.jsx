import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { db } from "/configs/db";
import { CourseList } from "/configs/schema";

function EditChapters({ course }) {
  const [isOpen, setIsOpen] = useState(false);
  const [chapterData, setChapterData] = useState({
    chapterName: "",
    about: "",
    duration: "",
  });

  const onUpdateHandler = async () => {
    // Create a new chapter object with current timestamp
    const newChapter = {
      ...chapterData,
      createdAt: "2025-03-07 23:57:57",
      createdBy: "MoEwis",
      updatedAt: "2025-03-07 23:57:57",
      updatedBy: "MoEwis",
    };

    // Add the new chapter to existing chapters
    const updatedChapters = [
      ...(course?.courseOutput?.chapters || []),
      newChapter,
    ];

    // Update the database
    await db
      .update(CourseList)
      .set({
        courseOutput: {
          ...course.courseOutput,
          chapters: updatedChapters,
        },
      })
      .returning({ id: CourseList.id });

    setIsOpen(false);
    setChapterData({ chapterName: "", about: "", duration: "" }); // Reset form
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setChapterData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      {/* Edit Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 hover:bg-blue-50 rounded-lg transition-all duration-200"
      >
        <FaRegEdit className="w-5 h-5 text-blue-600" />
      </button>

      {/* Modal Backdrop */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          {/* Modal Content */}
          <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl mx-4 relative animate-fadeIn">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <IoClose className="w-5 h-5 text-gray-500" />
            </button>

            {/* Modal Header */}
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800">
                Add New Chapter
              </h2>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              {/* Chapter Name Input */}
              <div className="space-y-2">
                <label
                  htmlFor="chapterName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Chapter Name
                </label>
                <input
                  id="chapterName"
                  name="chapterName"
                  type="text"
                  value={chapterData.chapterName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                  placeholder="Enter chapter name"
                />
              </div>

              {/* Chapter About Textarea */}
              <div className="space-y-2">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium text-gray-700"
                >
                  About Chapter
                </label>
                <textarea
                  id="about"
                  name="about"
                  value={chapterData.about}
                  onChange={handleInputChange}
                  rows="6"
                  className="w-full px-4 py-2.5 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Enter chapter description"
                />
              </div>

              {/* Chapter Duration Input */}
              <div className="space-y-2">
                <label
                  htmlFor="duration"
                  className="block text-sm font-medium text-gray-700"
                >
                  Duration
                </label>
                <input
                  id="duration"
                  name="duration"
                  type="text"
                  value={chapterData.duration}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                  placeholder="e.g., 30 mins"
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-gray-100 flex items-center justify-end gap-3">
              <button
                onClick={() => setIsOpen(false)}
                className="px-5 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={onUpdateHandler}
                className="px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Add Chapter
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default EditChapters;
