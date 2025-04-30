// "use client";
// import React, { useEffect, useState } from "react";
// import { db } from "/configs/db";
// import { CourseList, Chapters } from "/configs/schema.jsx";
// import { and, eq } from "drizzle-orm";
// import ChapterListCard from "./_components/ChapterListCard.jsx";
// import ChapterContent from "./_components/ChapterContent.jsx";

// function CourseStart({ params }) {
//   const [course, setCourse] = useState(null); // Initialize with null
//   const [selectedChapter, setSelectedChapter] = useState(null);
//   const [chapterContent, setChapterContent] = useState(null);
//   const [unwrappedParams, setUnwrappedParams] = useState(null);
//   const [loading, setLoading] = useState(false); // Loading state

//   // Unwrap params Promise
//   useEffect(() => {
//     params.then((p) => setUnwrappedParams(p));
//   }, [params]);

//   // Fetch course when unwrappedParams updates
//   useEffect(() => {
//     if (unwrappedParams?.courseId) {
//       GetCourse();
//     }
//   }, [unwrappedParams]);

//   const GetCourse = async () => {
//     try {
//       setLoading(true);
//       const result = await db
//         .select()
//         .from(CourseList)
//         .where(eq(CourseList.courseId, unwrappedParams.courseId));
//       console.log("Course result:", result);
//       if (result.length > 0) {
//         setCourse(result[0]);
//       } else {
//         console.warn(
//           `No course found for courseId: ${unwrappedParams.courseId}`
//         );
//         setCourse(null);
//       }
//     } catch (error) {
//       console.error("Error fetching course:", error);
//       setCourse(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const GetSelectedChapterContent = async (chapterId) => {
//     if (!course || !course.courseId) {
//       console.error("Course is not loaded or courseId is missing.");
//       return;
//     }

//     try {
//       setLoading(true);
//       const result = await db
//         .select()
//         .from(Chapters)
//         .where(
//           and(
//             eq(Chapters.chapterId, chapterId),
//             eq(Chapters.courseId, course.courseId)
//           )
//         );
//       console.log("Chapter content result:", result);
//       if (result.length > 0) {
//         setChapterContent(result[0]);
//       } else {
//         console.warn(
//           `No content found for chapterId: ${chapterId}, courseId: ${course.courseId}`
//         );
//         setChapterContent(null);
//       }
//     } catch (error) {
//       console.error("Error fetching chapter content:", error);
//       setChapterContent(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <p className="text-gray-600">Loading...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="flex">
//       {/* Chapter list Sidebar */}
//       <div className="md:w-64 h-screen hidden md:block border-r shadow-sm bg-gray-50">
//         <h2 className="font-medium text-lg bg-primary text-white p-3 text-center">
//           {course?.courseOutput?.courseName || "Course Name"}
//         </h2>
//         <div>
//           {course?.courseOutput?.chapters?.length > 0 ? (
//             course.courseOutput.chapters.map((chapter, index) => (
//               <div
//                 key={index}
//                 className={`cursor-pointer hover:bg-blue-100 p-2 border-b ${
//                   selectedChapter?.chapterName === chapter.chapterName
//                     ? "bg-blue-200"
//                     : "bg-white"
//                 }`}
//                 onClick={() => {
//                   setSelectedChapter(chapter);
//                   GetSelectedChapterContent(chapter.chapterId || index + 1); // Use chapterId or index+1 as fallback
//                 }}
//               >
//                 <ChapterListCard chapter={chapter} index={index} />
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-500 text-center mt-4">
//               No chapters available
//             </p>
//           )}
//         </div>
//       </div>

//       {/* Content Chapter */}
//       <div className="flex-1 p-10 bg-white shadow-md rounded-lg">
//         {selectedChapter ? (
//           <ChapterContent
//             chapter={selectedChapter}
//             content={chapterContent?.content}
//           />
//         ) : (
//           <p className="text-gray-600 text-center">
//             Select a chapter to view content
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default CourseStart;
// ===============================================

// "use client";
// import React, { useEffect, useState } from "react";
// import { db } from "/configs/db";
// import { CourseList, Chapters } from "/configs/schema.jsx";
// import { and, eq } from "drizzle-orm";
// import ChapterListCard from "./_components/ChapterListCard.jsx";
// import ChapterContent from "./_components/ChapterContent.jsx";
// import AddQuizzes from "./_components/AddQuizzes.jsx";

// function CourseStart({ params }) {
//   const [course, setCourse] = useState(null);
//   const [selectedChapter, setSelectedChapter] = useState(null);
//   const [chapterContent, setChapterContent] = useState(null);
//   const [unwrappedParams, setUnwrappedParams] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [showQuizzes, setShowQuizzes] = useState(false); // Add state for showing quizzes

//   useEffect(() => {
//     params.then((p) => setUnwrappedParams(p));
//   }, [params]);

//   useEffect(() => {
//     if (unwrappedParams?.courseId) {
//       GetCourse();
//     }
//   }, [unwrappedParams]);

//   const GetCourse = async () => {
//     try {
//       setLoading(true);
//       const result = await db
//         .select()
//         .from(CourseList)
//         .where(eq(CourseList.courseId, unwrappedParams.courseId));
//       console.log("Course result:", result);
//       if (result.length > 0) {
//         setCourse(result[0]);
//       } else {
//         console.warn(
//           `No course found for courseId: ${unwrappedParams.courseId}`
//         );
//         setCourse(null);
//       }
//     } catch (error) {
//       console.error("Error fetching course:", error);
//       setCourse(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const GetSelectedChapterContent = async (chapterId) => {
//     if (!course || !course.courseId) {
//       console.error("Course is not loaded or courseId is missing.");
//       return;
//     }

//     try {
//       setLoading(true);
//       const result = await db
//         .select()
//         .from(Chapters)
//         .where(
//           and(
//             eq(Chapters.chapterId, chapterId),
//             eq(Chapters.courseId, course.courseId)
//           )
//         );
//       console.log("Chapter content result:", result);
//       if (result.length > 0) {
//         setChapterContent(result[0]);
//       } else {
//         console.warn(
//           `No content found for chapterId: ${chapterId}, courseId: ${course.courseId}`
//         );
//         setChapterContent(null);
//       }
//     } catch (error) {
//       console.error("Error fetching chapter content:", error);
//       setChapterContent(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <p className="text-gray-600">Loading...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="flex">
//       {/* Chapter list Sidebar */}
//       <div className="md:w-64 h-screen hidden md:block border-r shadow-sm bg-gray-50">
//         <h2 className="font-medium text-lg bg-primary text-white p-3 text-center">
//           {course?.courseOutput?.courseName || "Course Name"}
//         </h2>
//         <div>
//           {course?.courseOutput?.chapters?.length > 0 ? (
//             <>
//               {course.courseOutput.chapters.map((chapter, index) => (
//                 <div
//                   key={index}
//                   className={`cursor-pointer hover:bg-blue-100 p-2 border-b ${
//                     selectedChapter?.chapterName === chapter.chapterName
//                       ? "bg-blue-200"
//                       : "bg-white"
//                   }`}
//                   onClick={() => {
//                     setSelectedChapter(chapter);
//                     setShowQuizzes(false); // Hide quizzes when selecting chapter
//                     GetSelectedChapterContent(chapter.chapterId || index + 1);
//                   }}
//                 >
//                   <ChapterListCard chapter={chapter} index={index} />
//                 </div>
//               ))}
//               {/* Quiz Button */}
//               <div
//                 className={`cursor-pointer hover:bg-blue-100 p-4 border-b ${
//                   showQuizzes ? "bg-blue-200" : "bg-white"
//                 }`}
//                 onClick={() => setShowQuizzes(true)}
//               >
//                 <h2 className="font-semibold text-lg text-gray-800">
//                   Course Quizzes
//                 </h2>
//               </div>
//             </>
//           ) : (
//             <p className="text-gray-500 text-center mt-4">
//               No chapters available
//             </p>
//           )}
//         </div>
//       </div>

//       {/* Content Chapter or Quizzes */}
//       <div className="flex-1 p-10 bg-white shadow-md rounded-lg">
//         {showQuizzes ? (
//           <AddQuizzes quizzes={course?.courseOutput?.quizzes} />
//         ) : selectedChapter ? (
//           <ChapterContent
//             chapter={selectedChapter}
//             content={chapterContent?.content}
//           />
//         ) : (
//           <p className="text-gray-600 text-center">
//             Select a chapter to view content
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default CourseStart;

"use client";
import React, { useEffect, useState } from "react";
import { db } from "/configs/db";
import { CourseList, Chapters } from "/configs/schema.jsx";
import { and, eq } from "drizzle-orm";
import ChapterListCard from "./_components/ChapterListCard.jsx";
import ChapterContent from "./_components/ChapterContent.jsx";
import AddQuizzes from "./_components/AddQuizzes.jsx";
import { FaBook, FaQuestionCircle, FaSpinner } from "react-icons/fa";

function CourseStart({ params }) {
  const [course, setCourse] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [chapterContent, setChapterContent] = useState(null);
  const [unwrappedParams, setUnwrappedParams] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showQuizzes, setShowQuizzes] = useState(false);

  useEffect(() => {
    params.then((p) => setUnwrappedParams(p));
  }, [params]);

  useEffect(() => {
    if (unwrappedParams?.courseId) {
      GetCourse();
    }
  }, [unwrappedParams]);

  const GetCourse = async () => {
    try {
      setLoading(true);
      const result = await db
        .select()
        .from(CourseList)
        .where(eq(CourseList.courseId, unwrappedParams.courseId));
      if (result.length > 0) {
        setCourse(result[0]);
      } else {
        console.warn(
          `No course found for courseId: ${unwrappedParams.courseId}`
        );
        setCourse(null);
      }
    } catch (error) {
      console.error("Error fetching course:", error);
      setCourse(null);
    } finally {
      setLoading(false);
    }
  };

  const GetSelectedChapterContent = async (chapterId) => {
    if (!course || !course.courseId) {
      console.error("Course is not loaded or courseId is missing.");
      return;
    }

    try {
      setLoading(true);
      const result = await db
        .select()
        .from(Chapters)
        .where(
          and(
            eq(Chapters.chapterId, chapterId),
            eq(Chapters.courseId, course.courseId)
          )
        );
      console.log("mm", result);
      if (result.length > 0) {
        setChapterContent(result[0]);
      } else {
        setChapterContent(null);
      }
    } catch (error) {
      console.error("Error fetching chapter content:", error);
      setChapterContent(null);
    } finally {
      setLoading(false);
    }
  };
  console.log("chapter Content", chapterContent);
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="flex flex-col items-center space-y-4">
          <FaSpinner className="animate-spin text-4xl text-primary" />
          <p className="text-gray-600 font-medium">Loading your course...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="md:w-80 h-screen hidden md:flex md:flex-col border-r bg-white shadow-lg">
        {/* Course Header */}
        <div className="p-6 bg-gradient-to-r from-primary to-primary/90">
          <h2 className="font-bold text-xl text-white mb-2">
            {course?.courseOutput?.courseName || "Course Name"}
          </h2>
          <p className="text-blue-100 text-sm">
            {course?.courseOutput?.chapters?.length || 0} Chapters
          </p>
        </div>

        {/* Chapters List */}
        <div className="flex-1 overflow-y-auto">
          {course?.courseOutput?.chapters?.length > 0 ? (
            <div className="space-y-1 p-4">
              {course.courseOutput.chapters.map((chapter, index) => (
                <div
                  key={index}
                  className={`rounded-xl transition-all duration-200 ${
                    selectedChapter?.chapterName === chapter.chapterName
                      ? "bg-blue-50 shadow-sm"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <button
                    className="w-full text-left p-4"
                    onClick={() => {
                      setSelectedChapter(chapter);
                      setShowQuizzes(false);
                      GetSelectedChapterContent(chapter.chapterId || index + 1);
                    }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            selectedChapter?.chapterName === chapter.chapterName
                              ? "bg-primary text-white"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          <FaBook className="text-sm" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <ChapterListCard chapter={chapter} index={index} />
                      </div>
                    </div>
                  </button>
                </div>
              ))}

              {/* Quiz Button */}
              <button
                className={`w-full rounded-xl transition-all duration-200 ${
                  showQuizzes ? "bg-blue-50 shadow-sm" : "hover:bg-gray-50"
                }`}
                onClick={() => setShowQuizzes(true)}
              >
                <div className="flex items-center space-x-3 p-4">
                  <div className="flex-shrink-0">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        showQuizzes
                          ? "bg-primary text-white"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      <FaQuestionCircle className="text-sm" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="font-semibold text-gray-800">
                      Course Quizzes
                    </h2>
                    <p className="text-sm text-gray-500">Test your knowledge</p>
                  </div>
                </div>
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500">No chapters available</p>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 h-screen overflow-y-auto">
        <div className="max-w-4xl mx-auto p-8">
          <div className="bg-white rounded-2xl shadow-sm border p-8">
            {showQuizzes ? (
              <AddQuizzes quizzes={course?.courseOutput?.quizzes} />
            ) : selectedChapter ? (
              <ChapterContent
                chapter={selectedChapter}
                content={chapterContent?.content}
                videoId={chapterContent?.videoID}
              />
            ) : (
              <div className="text-center py-12">
                <FaBook className="text-6xl text-gray-300 mx-auto mb-4" />
                <p className="text-gray-600 text-lg">
                  Select a chapter to view content
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseStart;
