// import React from "react";
// import { CiTimer } from "react-icons/ci";
// import AddQuizzes from "./AddQuizzes";
// function ChapterListCard({ chapter, index }) {
//   return (
//     <>
//       <div className="grid grid-cols-5 p-4 items-center border-b hover:bg-gray-100 transition ease-in-out duration-150">
//         <div>
//           <h2 className="p-1 bg-primary text-white text-center rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
//             {index + 1}
//           </h2>
//         </div>
//         <div className="col-span-4 ml-4">
//           <h2 className="font-semibold text-lg text-gray-800">
//             {chapter?.chapterName}
//           </h2>
//           <h2 className="flex items-center gap-1 text-sm text-primary mt-1">
//             <CiTimer className="text-xl" />
//             {chapter?.duration}
//           </h2>
//         </div>
//       </div>
//     </>
//   );
// }

// export default ChapterListCard;

import React from "react";
import { CiTimer } from "react-icons/ci";

function ChapterListCard({ chapter, index }) {
  return (
    <div className="group">
      <div
        className="p-3 rounded-lg transition-all duration-200 
                    hover:bg-blue-50/60 hover:shadow-sm"
      >
        <div className="flex items-center gap-3">
          {/* Chapter Number with Glow Effect */}
          <div className="relative">
            <div
              className="absolute -inset-0.5 bg-gradient-to-r from-primary/60 to-blue-500/60 
                          rounded-full opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-200"
            ></div>
            <div
              className="relative w-8 h-8 flex items-center justify-center 
                          bg-primary text-white text-sm font-bold rounded-full 
                          group-hover:scale-105 transition-transform duration-200"
            >
              {index + 1}
            </div>
          </div>

          {/* Chapter Info */}
          <div className="flex-1 min-w-0">
            <h2
              className="font-medium text-base text-gray-700 truncate
                         group-hover:text-primary transition-colors duration-200"
            >
              {chapter?.chapterName}
            </h2>

            <div className="flex items-center mt-1">
              <div
                className="inline-flex items-center gap-1 px-2 py-0.5 
                            rounded-full bg-blue-50/80 text-primary/90 text-xs"
              >
                <CiTimer className="text-sm" />
                <span>{chapter?.duration}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Progress Bar */}
        <div className="mt-2 h-0.5 w-full bg-gray-100/80 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary/70 rounded-full w-0 
                        group-hover:w-full transition-all duration-500 ease-out"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default ChapterListCard;
