import React from "react";
import { FaCode, FaBook } from "react-icons/fa";

const opts = {
  height: "460",
  width: "100%",
  playerVars: {
    autoplay: 0,
  },
};
function ChapterContent({ chapter, content, videoId }) {
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

  console.log(content);
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
            src={`https://www.youtube.com/embed/${videoId}`}
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
