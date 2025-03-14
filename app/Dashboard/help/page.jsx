"use client";
import React, { useState, useEffect } from "react";
import {
  IoBookOutline,
  IoHelpCircleOutline,
  IoMailOutline,
  IoChevronForward,
  IoCheckmarkCircle,
} from "react-icons/io5";
import {
  MdCategory,
  MdTopic,
  MdSettings,
  MdVideoLibrary,
} from "react-icons/md";

function HelpCenter() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDateTime = (date) => {
    return date.toISOString().slice(0, 19).replace("T", " ");
  };

  const courseCreationSteps = [
    {
      title: "Choose Category",
      icon: <MdCategory className="text-3xl" />,
      description: "Select the appropriate category for your course:",
      details: [
        "programming",
        "Health & Fitness",
        "Finance & Accounting",
        "Business",
        "Design",
        "Marketing",
        "Design",
        "Marketing",
        "AI & Machine Learning",
        "Cooking",
        "Health & Fitness",
        "Creative",
        "Photography",
      ],
    },
    {
      title: "Topic & Description",
      icon: <MdTopic className="text-3xl" />,
      description: "Define your course content:",
      details: [
        "Choose a clear, specific course title",
        "Write a compelling course description",
        "Define learning objectives",
      ],
    },
    {
      title: "Course Options",
      icon: <MdSettings className="text-3xl" />,
      description: "Configure course settings:",
      details: [
        "Set course duration",
        "Choose course format (Video)",
        "Define assessment methods",
        "Configure course visibility",
        "Add course thumbnail",
      ],
    },
    {
      title: "Course Content",
      icon: <MdVideoLibrary className="text-3xl" />,
      description: "Create and organize content:",
      details: [
        "Structure course outline",
        "Create video lectures",
        "Include downloadable resources",
        "Create quizzes or tests",
      ],
    },
    {
      title: "Course Chapters",
      icon: <IoBookOutline className="text-3xl" />,
      description: "Organize chapters and lessons:",
      details: [
        "Create chapter structure",
        "Add lessons to chapters",
        "Order content logically",
        "Add chapter descriptions",
        "Include chapter resources",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-100 shadow-sm py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="space-y-4">
              <div className="space-y-1">
                <h1 className="text-2xl font-bold text-gray-900">
                  Help Center
                </h1>
                <p className="text-gray-600">
                  Learn how to create and manage your courses
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8">
          {/* Steps List */}
          <div className="space-y-6">
            {courseCreationSteps.map((step, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-sm border border-gray-100 p-6 
                           transition-all duration-300 
                           ${
                             activeStep === index ? "ring-2 ring-blue-500" : ""
                           }`}
                onClick={() => setActiveStep(index)}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-lg ${
                      activeStep === index
                        ? "bg-blue-50 text-blue-600"
                        : "bg-gray-50 text-gray-600"
                    }`}
                  >
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {`${index + 1}. ${step.title}`}
                    </h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-gray-600"
                        >
                          <IoCheckmarkCircle className="text-green-500 mt-1 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpCenter;
