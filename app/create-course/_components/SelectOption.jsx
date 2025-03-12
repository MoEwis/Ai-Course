import React, { useContext } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "/@/components/ui/select";
import { Input } from "/@/components/ui/input";
import { UserInputContext } from "/app/_context/UserInputContext";

function SelectOption() {
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);
  const handleInputChange = (fieldName, value) => {
    setUserCourseInput((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };
  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-32">
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
            {/* Difficulty Level */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 block">
                🏆 Difficulty Level
              </label>
              <Select
                defaultValue={userCourseInput?.level}
                onValueChange={(value) => handleInputChange("level", value)}
              >
                <SelectTrigger className="w-full h-11 border-gray-200 rounded-lg hover:border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                  <SelectValue placeholder="Select Level" />
                </SelectTrigger>
                <SelectContent className="bg-white rounded-lg border border-gray-200 shadow-lg">
                  <SelectItem
                    value="Beginner"
                    className="py-2.5 px-4 hover:bg-blue-50 cursor-pointer"
                  >
                    Beginner
                  </SelectItem>
                  <SelectItem
                    value="Intermediate"
                    className="py-2.5 px-4 hover:bg-blue-50 cursor-pointer"
                  >
                    Intermediate
                  </SelectItem>
                  <SelectItem
                    value="Advanced"
                    className="py-2.5 px-4 hover:bg-blue-50 cursor-pointer"
                  >
                    Advanced
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Course Duration */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 block">
                ⏳ Course Duration
              </label>
              <Select
                defaultValue={userCourseInput?.CourseDuration}
                onValueChange={(value) =>
                  handleInputChange("CourseDuration", value)
                }
              >
                <SelectTrigger className="w-full h-11 border-gray-200 rounded-lg hover:border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                  <SelectValue placeholder="Select Duration" />
                </SelectTrigger>
                <SelectContent className="bg-white rounded-lg border border-gray-200 shadow-lg">
                  <SelectItem
                    value="1 Hour"
                    className="py-2.5 px-4 hover:bg-blue-50 cursor-pointer"
                  >
                    1 Hour
                  </SelectItem>
                  <SelectItem
                    value="2 Hours"
                    className="py-2.5 px-4 hover:bg-blue-50 cursor-pointer"
                  >
                    2 Hours
                  </SelectItem>
                  <SelectItem
                    value="More Than 3 Hours"
                    className="py-2.5 px-4 hover:bg-blue-50 cursor-pointer"
                  >
                    More Than 3 Hours
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Add Video */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 block">
                🎥 Add Video
              </label>
              <Select
                defaultValue={userCourseInput?.addVideo}
                onValueChange={(value) => handleInputChange("addVideo", value)}
              >
                <SelectTrigger className="w-full h-11 border-gray-200 rounded-lg hover:border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                  <SelectValue placeholder="Select Option" />
                </SelectTrigger>
                <SelectContent className="bg-white rounded-lg border border-gray-200 shadow-lg">
                  <SelectItem
                    value="Yes"
                    className="py-2.5 px-4 hover:bg-blue-50 cursor-pointer"
                  >
                    Yes
                  </SelectItem>
                  <SelectItem
                    value="No"
                    className="py-2.5 px-4 hover:bg-blue-50 cursor-pointer"
                  >
                    No
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Number Of Chapters */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 block">
                📖 Num Of Chapters
              </label>
              <Input
                defaultValue={userCourseInput?.numberOfChapters}
                onChange={(event) =>
                  handleInputChange("numberOfChapters", event.target.value)
                }
                type="number"
                className="w-full h-11 border-gray-200 rounded-lg hover:border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Enter number of chapters"
              />
            </div>

            {/* Add Quizzes */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 block">
                📝 Add Quizzes
              </label>
              <Select
                defaultValue={userCourseInput?.addQuizzes}
                onValueChange={(value) =>
                  handleInputChange("addQuizzes", value)
                }
              >
                <SelectTrigger className="w-full h-11 border-gray-200 rounded-lg hover:border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                  <SelectValue placeholder="Select Quizzes" />
                </SelectTrigger>
                <SelectContent className="bg-white rounded-lg border border-gray-200 shadow-lg">
                  <SelectItem
                    value="3 Quizzes"
                    className="py-2.5 px-4 hover:bg-blue-50 cursor-pointer"
                  >
                    3 Quizzes
                  </SelectItem>
                  <SelectItem
                    value="5 Quizzes"
                    className="py-2.5 px-4 hover:bg-blue-50 cursor-pointer"
                  >
                    5 Quizzes
                  </SelectItem>
                  <SelectItem
                    value="10 Quizzes"
                    className="py-2.5 px-4 hover:bg-blue-50 cursor-pointer"
                  >
                    10 Quizzes
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Course Language */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 block">
                🌍 Course Language
              </label>
              <Select
                defaultValue={userCourseInput?.courseLanguage}
                onValueChange={(value) =>
                  handleInputChange("courseLanguage", value)
                }
              >
                <SelectTrigger className="w-full h-11 border-gray-200 rounded-lg hover:border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                  <SelectValue placeholder="Select Language" />
                </SelectTrigger>
                <SelectContent className="bg-white rounded-lg border border-gray-200 shadow-lg">
                  <SelectItem
                    value="English"
                    className="py-2.5 px-4 hover:bg-blue-50 cursor-pointer"
                  >
                    English
                  </SelectItem>
                  <SelectItem
                    value="Arabic"
                    className="py-2.5 px-4 hover:bg-blue-50 cursor-pointer"
                  >
                    Arabic
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectOption;
