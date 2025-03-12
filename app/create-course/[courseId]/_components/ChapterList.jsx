// import React from "react";
// import { IoIosTimer } from "react-icons/io";
// import EditChapters from "./EditChapters";

// function ChapterList({ course }) {
//   return (
//     <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
//       <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
//         <div className="flex items-center justify-between mb-6">
//           <h2 className="font-bold text-xl sm:text-2xl text-gray-800">
//             Course Chapters
//           </h2>
//         </div>

//         <div className="space-y-4">
//           {course?.courseOutput?.chapters.map((chapter, index) => (
//             <div
//               key={index}
//               className="group relative flex flex-col sm:flex-row items-start gap-4 p-4 rounded-xl border border-gray-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all duration-300"
//             >
//               {/* Chapter Number */}
//               <div className="flex-shrink-0 mb-3 sm:mb-0">
//                 <div className="bg-blue-600 h-10 w-10 sm:h-12 sm:w-12 text-white rounded-xl font-semibold text-base sm:text-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
//                   {index + 1}
//                 </div>
//               </div>

//               {/* Chapter Content */}
//               <div className="flex-1 min-w-0 space-y-2">
//                 <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
//                   <h3 className="font-semibold text-lg sm:text-xl text-gray-800 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
//                     {chapter?.chapterName}
//                   </h3>
//                   <div className="sm:hidden">
//                     <EditChapters course={course} />
//                   </div>
//                 </div>

//                 <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 sm:line-clamp-none">
//                   {chapter?.about}
//                 </p>

//                 <div className="flex flex-wrap items-center gap-4">
//                   <div className="flex items-center gap-2 text-blue-600">
//                     <IoIosTimer className="text-lg" />
//                     <span className="text-sm font-medium">
//                       {chapter?.duration}
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* Edit Button - Hidden on mobile, shown on larger screens */}
//               <div className="hidden sm:block">
//                 <EditChapters course={course} />
//               </div>

//               {/* Hover Indicator */}
//               <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 rounded-r-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//             </div>
//           ))}
//         </div>

//         {/* Summary */}
//         <div className="mt-8 pt-6 border-t border-gray-100">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-600">
//             <div className="flex items-center justify-center sm:justify-start gap-2 p-3 rounded-lg bg-gray-50">
//               <span className="font-medium">Total Chapters:</span>
//               <span>{course?.courseOutput?.chapters?.length || 0}</span>
//             </div>

//             <div className="flex items-center justify-center sm:justify-start gap-2 p-3 rounded-lg bg-gray-50">
//               <span className="font-medium">Total Duration:</span>
//               <span>{course?.courseOutput?.courseDuration}</span>
//             </div>

//             <div className="flex items-center justify-center sm:justify-start gap-2 p-3 rounded-lg bg-gray-50">
//               <span className="font-medium">Created By:</span>
//               <span>{course?.userName}</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ChapterList;

import React from "react";
import { IoIosTimer } from "react-icons/io";
import { FaBook, FaUserGraduate, FaClock } from "react-icons/fa";
import EditChapters from "./EditChapters";

function ChapterList({ course }) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-primary/5 to-blue-50 border-b">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-2xl text-gray-800 flex items-center gap-3">
              <FaBook className="text-primary" />
              Course Chapters
            </h2>
          </div>
        </div>

        {/* Chapters List */}
        <div className="p-6">
          <div className="space-y-6">
            {course?.courseOutput?.chapters.map((chapter, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative p-6 flex gap-6">
                  {/* Chapter Number - Updated hover effect */}
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r  to-blue-600 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
                    <div className="relative bg-primary h-14 w-14 text-white rounded-xl font-bold text-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {index + 1}
                    </div>
                  </div>

                  {/* Chapter Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-semibold text-xl text-gray-800 group-hover:text-primary transition-colors duration-300 mb-2">
                          {chapter?.chapterName}
                        </h3>
                        <p className="text-gray-600 text-base leading-relaxed">
                          {chapter?.about}
                        </p>
                      </div>
                      <EditChapters course={course} />
                    </div>

                    {/* Chapter Meta */}
                    <div className="mt-4 flex items-center gap-4">
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-full text-primary">
                        <IoIosTimer className="text-lg" />
                        <span className="text-sm font-medium">
                          {chapter?.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Section */}
        <div className="border-t border-gray-100">
          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <SummaryCard
                icon={<FaBook />}
                label="Total Chapters"
                value={course?.courseOutput?.chapters?.length || 0}
              />
              <SummaryCard
                icon={<FaClock />}
                label="Total Duration"
                value={course?.courseOutput?.courseDuration}
              />
              <SummaryCard
                icon={<FaUserGraduate />}
                label="Created By"
                value={course?.userName}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Summary Card Component
const SummaryCard = ({ icon, label, value }) => (
  <div className="group bg-white rounded-xl p-4 border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all duration-300">
    <div className="flex items-center gap-4">
      <div className="p-3 bg-primary/10 text-primary rounded-lg group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="font-semibold text-gray-800 mt-1">{value}</p>
      </div>
    </div>
  </div>
);

export default ChapterList;
