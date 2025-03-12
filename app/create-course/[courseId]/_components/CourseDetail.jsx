// import React from "react";
// import { BsBarChart } from "react-icons/bs";
// import { IoIosTimer } from "react-icons/io";
// import { IoBookOutline } from "react-icons/io5";
// import { LiaPaintBrushSolid } from "react-icons/lia";

// function CourseDetail({ course }) {
//   const details = [
//     {
//       icon: (
//         <BsBarChart className="text-2xl sm:text-3xl lg:text-4xl text-blue-600 group-hover:scale-110 transition-transform duration-300" />
//       ),
//       label: "Skill Level",
//       value: course?.courseOutput?.level,
//     },
//     {
//       icon: (
//         <IoBookOutline className="text-2xl sm:text-3xl lg:text-4xl text-blue-600 group-hover:scale-110 transition-transform duration-300" />
//       ),
//       label: "Chapters",
//       value: course?.courseOutput?.numberOfChapters,
//     },
//     {
//       icon: (
//         <IoIosTimer className="text-2xl sm:text-3xl lg:text-4xl text-blue-600 group-hover:scale-110 transition-transform duration-300" />
//       ),
//       label: "Duration",
//       value: course?.courseOutput?.courseDuration,
//     },
//     {
//       icon: (
//         <LiaPaintBrushSolid className="text-2xl sm:text-3xl lg:text-4xl text-blue-600 group-hover:scale-110 transition-transform duration-300" />
//       ),
//       label: "Quizzes",
//       value: course?.courseOutput?.addQuizzes,
//     },
//   ];

//   return (
//     <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
//       <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
//         <div className="p-4 sm:p-6 lg:p-8">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
//             {details.map((item, index) => (
//               <div
//                 key={index}
//                 className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg hover:bg-blue-50/50 transition-all duration-300 cursor-pointer"
//               >
//                 <div className="p-2 sm:p-3 bg-blue-50 rounded-xl group-hover:bg-white transition-colors duration-300 flex items-center justify-center">
//                   {item.icon}
//                 </div>

//                 <div className="space-y-0.5 sm:space-y-1">
//                   <h3 className="text-xs sm:text-sm text-gray-500 group-hover:text-blue-600 transition-colors duration-300 font-medium">
//                     {item.label}
//                   </h3>
//                   <p className="font-semibold text-base sm:text-lg text-gray-800">
//                     {item.value || "-"}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CourseDetail;

import React from "react";
import { BsBarChart } from "react-icons/bs";
import { IoIosTimer } from "react-icons/io";
import { IoBookOutline } from "react-icons/io5";
import { LiaPaintBrushSolid } from "react-icons/lia";

function CourseDetail({ course }) {
  const details = [
    {
      icon: <BsBarChart className="text-2xl text-primary" />,
      label: "Skill Level",
      value: course?.courseOutput?.level,
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      icon: <IoBookOutline className="text-2xl text-primary" />,
      label: "Chapters",
      value: course?.courseOutput?.numberOfChapters,
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: <IoIosTimer className="text-2xl text-primary" />,
      label: "Duration",
      value: course?.courseOutput?.courseDuration,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <LiaPaintBrushSolid className="text-2xl text-primary" />,
      label: "Quizzes",
      value: course?.courseOutput?.addQuizzes,
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {details.map((item, index) => (
              <div key={index} className="group relative">
                {/* Gradient Background Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 rounded-xl transition-all duration-500`}
                />

                <div className="relative bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 group-hover:border-transparent">
                  {/* Icon Container */}
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                      {item.label}
                    </h3>
                    <p className="font-bold text-2xl text-gray-800 group-hover:text-primary transition-colors duration-300">
                      {item.value || "-"}
                    </p>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-5 transition-opacity duration-500">
                    {item.icon}
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

export default CourseDetail;
