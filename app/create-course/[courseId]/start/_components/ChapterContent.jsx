// import React from "react";
// import YouTube from "react-youtube";
// import AddQuizzes from "./AddQuizzes";

// const opts = {
//   height: "390",
//   width: "640",
//   playerVars: {
//     // https://developers.google.com/youtube/player_parameters
//     autoplay: 0,
//   },
// };

// function ChapterContent({ chapter, content }) {
//   // Handle case of no content
//   if (!content) {
//     return <p className="text-gray-600 text-center">Loading content...</p>;
//   }

//   // Function to handle video ready state
//   const onReady = (event) => {
//     console.log("YouTube Player is ready:", event.target);
//   };

//   // Function to handle video errors
//   const onError = (event) => {
//     console.error("YouTube Player error:", event.data);
//   };

//   return (
//     <div className="p-10 bg-white shadow-md rounded-lg">
//       {/* Content Title */}
//       <h2 className="text-3xl font-bold text-gray-800 mb-4">
//         {content?.Title || chapter?.chapterName || "Untitled"}
//       </h2>
//       <p className="text-gray-700 mb-6">
//         {content?.description || chapter?.about || "No description available"}
//       </p>

//       {/* Video if available */}
//       {content?.videoId ? (
//         <div className="mb-6">
//           <YouTube
//             videoId={content?.videoId}
//             opts={opts}
//             onReady={onReady}
//             onError={onError}
//             className="youtube-video rounded-lg shadow-lg" // Added class for styling control
//           />
//         </div>
//       ) : (
//         <p className="text-gray-500 text-center mb-6">
//           No video available for this chapter
//         </p>
//       )}

//       {/* Chapter List */}
//       <div className="mt-6">
//         {content?.chapters?.length > 0 ? (
//           content.chapters.map((chapterItem, chapterIndex) => (
//             <div
//               key={chapterIndex}
//               className="mb-8 border-b pb-4 border-gray-300"
//             >
//               {/* Chapter Title */}
//               <h3 className="text-2xl font-semibold text-gray-800">
//                 {chapterItem.chapter_title}
//               </h3>
//               <p className="text-gray-600">{chapterItem.description}</p>

//               {/* Elements List */}
//               {chapterItem.elements?.length > 0 && (
//                 <div className="mt-4 space-y-4">
//                   {chapterItem.elements.map((element, elementIndex) => (
//                     <div
//                       key={elementIndex}
//                       className="mr-4 p-4 bg-gray-100 rounded-lg shadow-sm"
//                     >
//                       <h4 className="text-xl font-medium text-gray-800">
//                         {element.element_title}
//                       </h4>
//                       <p className="text-gray-600">{element.description}</p>

//                       {/* Code Example if available */}
//                       {element.code_example && (
//                         <pre className="bg-gray-900 text-white p-3 rounded mt-2 overflow-auto">
//                           <code
//                             dangerouslySetInnerHTML={{
//                               __html: element.code_example,
//                             }}
//                           />
//                         </pre>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-500">No chapters available</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ChapterContent;

import React from "react";
import YouTube, { YouTubePlayer } from "react-youtube";
import { FaCode, FaBook } from "react-icons/fa";

const opts = {
  height: "460",
  width: "100%",
  playerVars: {
    autoplay: 0,
  },
};
function ChapterContent({ chapter, content }) {
  if (!content) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-gray-200 mb-4"></div>
          <div className="text-gray-400">Loading content...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Header Section */}
        <div className="p-8 bg-gradient-to-r from-primary/5 to-blue-50">
          <h2 className="text-3xl font-bold text-gray-800 mb-3 leading-tight">
            {content?.Title || chapter?.chapterName || "Untitled"}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {content?.description ||
              chapter?.about ||
              "No description available"}
          </p>
        </div>

        {/* Video Section */}
        <div className="relative aspect-video">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${content.videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        {/* <YouTube videoId={content?.videoId} opts={opts} /> */}
        {/* Content Section */}
        <div className="p-8">
          {content?.chapters?.length > 0 ? (
            <div className="space-y-8">
              {content.chapters.map((chapterItem, chapterIndex) => (
                <div
                  key={chapterIndex}
                  className="group transition-all duration-200"
                >
                  {/* Chapter Header */}
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <FaBook className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 group-hover:text-primary transition-colors">
                        {chapterItem.chapter_title}
                      </h3>
                      <p className="text-gray-500 mt-1 text-sm leading-relaxed">
                        {chapterItem.description}
                      </p>
                    </div>
                  </div>

                  {/* Elements Grid */}
                  {chapterItem.elements?.length > 0 && (
                    <div className="grid gap-4 pl-14">
                      {chapterItem.elements.map((element, elementIndex) => (
                        <div
                          key={elementIndex}
                          className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-all duration-200"
                        >
                          <h4 className="text-lg font-medium text-gray-800 mb-2">
                            {element.element_title}
                          </h4>
                          <p className="text-gray-600 text-sm mb-4">
                            {element.description}
                          </p>

                          {/* Code Example */}
                          {element.code_example && (
                            <div className="relative group">
                              <div className="absolute -inset-px bg-gradient-to-r rounded-lg opacity-50 group-hover:opacity-100 blur transition duration-200"></div>
                              <div className="relative">
                                <div className="flex items-center justify-between bg-gray-800 text-gray-200 px-4 py-2 rounded-t-lg">
                                  <div className="flex items-center">
                                    <FaCode className="mr-2" />
                                    <span className="text-sm">
                                      Code Example
                                    </span>
                                  </div>
                                </div>
                                <pre className="bg-gray-900 text-gray-100 p-4 rounded-b-lg overflow-x-auto text-sm">
                                  <code
                                    dangerouslySetInnerHTML={{
                                      __html: element.code_example,
                                    }}
                                  />
                                </pre>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-400">
              <FaBook className="mx-auto text-4xl mb-4 opacity-50" />
              <p>No chapters available</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChapterContent;
