// "use client";
// import React, { useEffect, useState } from "react";
// import { db } from "/configs/db";
// import { CourseList, Chapters } from "/configs/schema";
// import getVideos from "/configs/service.jsx";
// import { and, eq } from "drizzle-orm";
// import { useUser } from "@clerk/nextjs";
// import CourseBasicInfo from "./_components/CourseBasicInfo";
// import CourseDetail from "./_components/CourseDetail";
// import ChapterList from "./_components/ChapterList";
// import LoadingDialog from "../_components/LoadingDialog.jsx";
// import { generateChapterContent_AI } from "/configs/AiModel.jsx";
// import { useRouter } from "next/navigation";
// import { FaBookOpen } from "react-icons/fa";

// const videoCache = new Map();

// function CourseLayout({ params }) {
//   const { user } = useUser();
//   const [course, setCourse] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [statusMessage, setStatusMessage] = useState("");
//   const [initialLoading, setInitialLoading] = useState(true);
//   const router = useRouter();
//   const [unwrappedParams, setUnwrappedParams] = useState(null);

//   useEffect(() => {
//     params.then((p) => setUnwrappedParams(p));
//   }, [params]);

//   useEffect(() => {
//     if (unwrappedParams?.courseId && user) {
//       getCourse();
//     }
//   }, [unwrappedParams, user]);

//   const getCourse = async () => {
//     try {
//       const result = await db
//         .select()
//         .from(CourseList)
//         .where(
//           and(
//             eq(CourseList.courseId, unwrappedParams.courseId),
//             eq(CourseList.createdBy, user.primaryEmailAddress.emailAddress)
//           )
//         );
//       setCourse(result[0]);
//     } catch (error) {
//       console.error("Error fetching course:", error);
//     } finally {
//       setInitialLoading(false);
//     }
//   };

//   // جلب الفيديو مع استخدام التخزين المؤقت
//   const fetchVideoWithCache = async (query) => {
//     if (videoCache.has(query)) {
//       return videoCache.get(query);
//     }
//     try {
//       const resp = await getVideos(query);
//       const videoId = resp[0]?.id?.videoId || "";
//       videoCache.set(query, videoId);
//       return videoId;
//     } catch (error) {
//       console.error(`Error fetching video for ${query}:`, error);
//       return "";
//     }
//   };
//   const generateChapterContent = async () => {
//     setLoading(true);
//     try {
//       const chapters = course.courseOutput.chapters;
//       setProgress(0);
//       setStatusMessage("Starting chapter generation...");

//       // 1️⃣ تنفيذ استعلامات الفيديو لكل الشباتر بالتوازي
//       const videoQueries = chapters.map((chapter) =>
//         fetchVideoWithCache(course.name + ":" + chapter.chapterName)
//       );
//       const videoResults = await Promise.allSettled(videoQueries);

//       // 2️⃣ تجهيز جميع طلبات الذكاء الاصطناعي وتنفيذها بالتوازي
//       const prompts = chapters.map(
//         (chapter) =>
//           `Explain the concept in detail on Topic: ${course?.name}, Chapter: ${chapter.chapterName}, in JSON Format with fields as Title, description in detail, Code Example (Html Code Format) if applicable`
//       );

//       const aiResults = await Promise.allSettled(
//         prompts.map((prompt) => generateChapterContent_AI.sendMessage(prompt))
//       );

//       const aiResponses = await Promise.allSettled(
//         aiResults.map(async (res) =>
//           res.status === "fulfilled" ? await res.value.response.text() : "{}"
//         )
//       );

//       // 3️⃣ تجهيز البيانات للإدراج في قاعدة البيانات
//       const chapterDataToInsert = chapters.map((chapter, index) => {
//         const videoId =
//           videoResults[index]?.status === "fulfilled"
//             ? videoResults[index].value
//             : "";
//         const contentText =
//           aiResponses[index]?.status === "fulfilled"
//             ? aiResponses[index].value
//             : "{}";
//         const content = JSON.parse(contentText);

//         return {
//           chapterId: index + 1,
//           courseId: course?.courseId,
//           content: content,
//           videoID: videoId,
//         };
//       });

//       // 4️⃣ إدراج جميع البيانات دفعة واحدة في قاعدة البيانات
//       setStatusMessage("Saving chapters to database...");
//       if (chapterDataToInsert.length > 0) {
//         await db.insert(Chapters).values(chapterDataToInsert);
//       }

//       // 5️⃣ تحديث حالة الكورس
//       setStatusMessage("Publishing course...");
//       await db
//         .update(CourseList)
//         .set({ publish: true })
//         .where(eq(CourseList.courseId, course.courseId));

//       setStatusMessage("Course generation completed!");
//       router.replace(`/create-course/${course.courseId}/finish`);
//     } catch (error) {
//       console.error("Error generating course content:", error);
//       setStatusMessage("Error occurred during generation.");
//     } finally {
//       setLoading(false);
//       setProgress(0);
//     }
//   };

//   if (initialLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto mb-4"></div>
//           <p className="text-gray-600">Loading course details...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="bg-white border-b">
//         <div className="container mx-auto px-4 py-6">
//           <h2 className="text-3xl font-bold text-gray-800 flex items-center justify-center gap-3">
//             <FaBookOpen className="text-primary" />
//             Course Layout
//           </h2>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-8">
//         <LoadingDialog
//           loading={loading}
//           progress={progress}
//           message={statusMessage}
//         />

//         <div className="space-y-8">
//           <CourseBasicInfo course={course} />
//           <CourseDetail course={course} />
//           <ChapterList course={course} />

//           <div className="flex justify-center">
//             <button
//               className="px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-white rounded-xl font-semibold
//                          hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200
//                          disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
//               onClick={generateChapterContent}
//               disabled={loading}
//             >
//               {loading ? (
//                 <span className="flex items-center gap-2">
//                   <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
//                   Generating Content... ({Math.round(progress)}%)
//                 </span>
//               ) : (
//                 "Generate Course Content"
//               )}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CourseLayout;

"use client";
import React, { useEffect, useState } from "react";
import { db } from "/configs/db";
import { CourseList, Chapters } from "/configs/schema";
import getVideos from "/configs/service.jsx";
import { and, eq } from "drizzle-orm";
import { useUser } from "@clerk/nextjs";
import CourseBasicInfo from "./_components/CourseBasicInfo";
import CourseDetail from "./_components/CourseDetail";
import ChapterList from "./_components/ChapterList";
import LoadingDialog from "../_components/LoadingDialog.jsx";
import { generateChapterContent_AI } from "/configs/AiModel.jsx";
import { useRouter } from "next/navigation";
import { FaBookOpen } from "react-icons/fa";

function CourseLayout({ params }) {
  const { user } = useUser();
  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const router = useRouter();
  const [unwrappedParams, setUnwrappedParams] = useState(null);

  // Unwrap params
  useEffect(() => {
    params.then((p) => setUnwrappedParams(p));
  }, [params]);

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
      setCourse(result[0]);
      console.log(result);
    } catch (error) {
      console.error("Error fetching course:", error);
    } finally {
      setInitialLoading(false);
    }
  };

  const generateChapterContent = async () => {
    setLoading(true);
    try {
      const chapters = course.courseOutput.chapters;
      for (let index = 0; index < chapters.length; index++) {
        const chapter = chapters[index];
        const PROMPT = `Explain the concept in detail on Topic: ${course?.name}, Chapter: ${chapter.chapterName}, in JSON Format with fields as Title, description in detail, Code Example (Html Code Format) if applicable`;

        try {
          // Generate Video URL
          const resp = await getVideos(course.name + ":" + chapter.chapterName);
          const videoId = resp[0]?.id?.videoId || "";

          // Generate Chapter Content
          const result = await generateChapterContent_AI.sendMessage(PROMPT);
          const contentText = await result?.response?.text();
          const content = JSON.parse(contentText);

          // Save Chapter Content + Video URL
          await db.insert(Chapters).values({
            chapterId: index + 1,
            courseId: course?.courseId,
            content: content,
            videoID: videoId,
          });
        } catch (error) {
          console.error(`Error processing chapter ${index + 1}:`, error);
        }
      }

      // Update course as published
      await db
        .update(CourseList)
        .set({
          publish: true,
        })
        .where(eq(CourseList.courseId, course.courseId));

      router.replace(`/create-course/${course.courseId}/finish`);
    } catch (error) {
      console.error("Error generating course content:", error);
    } finally {
      setLoading(false);
    }
  };

  if (initialLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading course details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center justify-center gap-3">
            <FaBookOpen className="text-primary" />
            Course Layout
          </h2>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <LoadingDialog loading={loading} />

        <div className="space-y-8">
          <CourseBasicInfo course={course} />
          <CourseDetail course={course} />
          <ChapterList course={course} />

          {/* Generate Content Button */}
          <div className="flex justify-center">
            <button
              className="px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-white rounded-xl font-semibold
                         hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200
                         disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              onClick={generateChapterContent}
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Generating Content...
                </span>
              ) : (
                "Generate Course Content"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseLayout;
