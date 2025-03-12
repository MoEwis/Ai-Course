"use client";
import { useContext, useEffect, useState } from "react";
import { RiApps2Fill, RiBook2Fill, RiSettings4Fill } from "react-icons/ri";
import { Button } from "/@/components/ui/button";
import SelectCategory from "/app/create-course/_components/SelectCategory";
import TopciDescription from "/app/create-course/_components/TopciDescription";
import SelectOption from "/app/create-course/_components/SelectOption";
import LoadingDialog from "/app/create-course/_components/LoadingDialog";
import { UserInputContext } from "../_context/UserInputContext";
import { GeneratorCourseLayout_AI } from "/configs/AiModel";
import { db } from "/configs/db.jsx";
import { CourseList } from "/configs/schema.jsx";
import uuid4 from "uuid4";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

function CreateCourse() {
  const StepperOption = [
    { id: 1, name: "Category", Icon: <RiApps2Fill className="w-6 h-6" /> },
    {
      id: 2,
      name: "Topic & Description",
      Icon: <RiBook2Fill className="w-6 h-6" />,
    },
    { id: 3, name: "Options", Icon: <RiSettings4Fill className="w-6 h-6" /> },
  ];

  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const [activeStep, setActiveStep] = useState(0);
  const route = useRouter();
  useEffect(() => {
    console.log(userCourseInput);
  }, [userCourseInput]);

  const handleNext = () => {
    if (activeStep < StepperOption.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  const checkStatus = () => {
    return !userCourseInput?.category;
  };

  const GeneratorCourseLayout = async () => {
    setLoading(true);
    const BASIC_PROMPT =
      "Generate A Course Tutorial on Following Detail With field as Course Name, Course Duration, Along with Chapter Name, about, Add Quizzes, Course Language, Duration:";
    const USER_INPUT_PROMPT =
      "CourseDuration:" +
      userCourseInput?.CourseDuration +
      ", addQuizzes:" +
      userCourseInput?.addQuizzes +
      ", category:" +
      userCourseInput?.category +
      ", courseLanguage:" +
      userCourseInput?.courseLanguage +
      ", description:" +
      userCourseInput?.description +
      ", level:" +
      userCourseInput?.level +
      ", numberOfChapters:" +
      userCourseInput?.numberOfChapters +
      ", topic:" +
      userCourseInput?.topic +
      ", in JSON format";

    const FINAL_PROMPT = BASIC_PROMPT + USER_INPUT_PROMPT;
    console.log(FINAL_PROMPT);

    try {
      const result = await GeneratorCourseLayout_AI.sendMessage(FINAL_PROMPT);
      const courseLayout = JSON.parse(result.response?.text());
      console.log(courseLayout);
      await SaveCourseLayoutInDb(courseLayout);
    } catch (error) {
      console.error("Error generating course layout:", error);
    } finally {
      setLoading(false);
    }
  };

  const SaveCourseLayoutInDb = async (courseLayout) => {
    const id = uuid4();

    setLoading(true);
    try {
      const result = await db.insert(CourseList).values({
        courseId: id,
        name: userCourseInput?.topic,
        level: userCourseInput?.level,
        category: userCourseInput?.category,
        addQuizzes: userCourseInput?.addQuizzes,
        courseLanguage: userCourseInput?.courseLanguage,
        courseOutput: courseLayout,
        createdBy: user?.primaryEmailAddress?.emailAddress,
        userName: user?.fullName,
        userProfileImage: user?.imageUrl,
      });
      console.log("Course saved successfully:", result);
    } catch (error) {
      console.error("Error saving course:", error);
    } finally {
      setLoading(false);
    }
    route.replace(`/create-course/${id}`);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Stepper Header */}
      <div className="flex flex-col justify-center items-center mb-12">
        <h2 className="text-3xl font-semibold text-primary mb-8">
          Create Course
        </h2>

        {/* Stepper Navigation */}
        <div className="flex justify-center items-center gap-4">
          {StepperOption.map((item, index) => (
            <div className="flex items-center justify-center" key={item.id}>
              <div className="flex flex-col items-center">
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-full transition-colors duration-300 ${
                    activeStep >= index
                      ? "bg-primary text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {item.Icon}
                </div>
                <span
                  className={`hidden md:block mt-2 text-sm font-medium ${
                    activeStep >= index ? "text-primary" : "text-gray-500"
                  }`}
                >
                  {item.name}
                </span>
              </div>

              {/* Connector Line */}
              {index !== StepperOption.length - 1 && (
                <div className="flex-1 h-1 mx-4 md:mx-8">
                  <div
                    className={`h-full rounded-full transition-colors duration-300 ${
                      activeStep > index ? "bg-primary" : "bg-gray-200"
                    }`}
                  ></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="min-h-[300px] mb-8 p-6 bg-white rounded-lg shadow-sm">
        {activeStep === 0 ? (
          <SelectCategory />
        ) : activeStep === 1 ? (
          <TopciDescription />
        ) : activeStep === 2 ? (
          <SelectOption />
        ) : null}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          onClick={handleBack}
          disabled={activeStep === 0}
          className="px-6"
        >
          Back
        </Button>
        {activeStep < 2 && (
          <Button
            onClick={handleNext}
            disabled={activeStep === StepperOption.length - 1 || checkStatus()}
            className="px-6"
          >
            Next
          </Button>
        )}
        {activeStep === 2 && (
          <Button
            onClick={GeneratorCourseLayout}
            className="px-6"
            disabled={loading}
          >
            {loading ? "Generating..." : "Generate Course"}
          </Button>
        )}
      </div>
      <LoadingDialog loading={loading} />
    </div>
  );
}

export default CreateCourse;
