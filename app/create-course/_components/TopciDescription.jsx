import { Textarea } from "/@/components/ui/textarea";
import { Input } from "/@/components/ui/input";
import { UserInputContext } from "/app/_context/UserInputContext";

import React, { useContext } from "react";

function TopicDescription() {
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);
  const handleInputChange = (fieldName, value) => {
    setUserCourseInput((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };
  return (
    <div className="max-w-3xl mx-auto px-6 py-8">
      <div className="space-y-6">
        {/* Topic Input Section */}
        <div className="space-y-2">
          <label
            htmlFor="topic"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            Write The Topic For Which You Want To Generate A Course
          </label>
          <Input
            id="topic"
            defaultValue={userCourseInput?.topic}
            placeholder="Enter your course topic here..."
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition duration-200"
            onChange={(e) => handleInputChange("topic", e.target.value)}
          />
        </div>

        {/* Description Section */}
        <div className="space-y-2">
          <label
            htmlFor="description"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            Tell Us More About Your Course
            <span className="text-gray-500 text-sm ml-2">(Optional)</span>
          </label>
          <Textarea
            id="description"
            defaultValue={userCourseInput?.description}
            placeholder="Provide a detailed description of your course..."
            className="w-full min-h-[150px] px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition duration-200 resize-y"
            onChange={(e) => handleInputChange("description", e.target.value)}
          />
        </div>

        {/* Helper Text */}
        <p className="text-sm text-gray-500 mt-2">
          Tip: A good description helps in generating more relevant course
          content
        </p>
      </div>
    </div>
  );
}

export default TopicDescription;
