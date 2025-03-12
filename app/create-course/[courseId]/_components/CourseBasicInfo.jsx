// import Image from "next/image";
// import React, { useState } from "react";
// import { IoExtensionPuzzleOutline } from "react-icons/io5";
// import EditCourseBasic from "./EditCourseBasic";
// import { stronge } from "/configs/firebaseConfig";
// import Link from "next/link";
// function CourseBasicInfo({ course }) {
//   const [selectedFile, setSelectedFile] = useState();
//   const onFileSelected = (e) => {
//     const file = e.target.files[0];
//     console.log(file);
//     setSelectedFile(URL.createObjectURL(file));
//     const fileName = Date.now() + ".jpg";
//     const storageRef = stronge.ref(stronge, fileName);
//   };
//   return (
//     <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
//       <div className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
//         <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
//           {/* Content Section */}
//           <div className="space-y-6 order-2 lg:order-1">
//             <div className="flex justify-end">
//               <EditCourseBasic course={course} />
//             </div>

//             {/* Course Title */}
//             <h1 className="font-bold text-2xl sm:text-3xl text-gray-900 leading-tight">
//               {course?.courseOutput?.courseName}
//             </h1>

//             {/* Course Description */}
//             <p className="text-gray-600 leading-relaxed text-base">
//               {course?.courseOutput?.description}
//             </p>

//             {/* Category */}
//             <div className="inline-flex items-center px-3 py-1.5 bg-blue-50 rounded-full">
//               <IoExtensionPuzzleOutline className="text-lg text-blue-600 mr-2" />
//               <span className="font-medium text-blue-600 text-sm">
//                 {course?.category}
//               </span>
//             </div>

//             {/* Button */}
//             <div className="pt-4 ">
//               <Link href={`/create-course/${course?.courseId}/start`}>
//                 <button className="w-full sm:w-auto px-8 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transform hover:translate-y-[-1px] transition-all duration-200 text-base shadow-sm hover:shadow">
//                   Start Learning
//                 </button>
//               </Link>
//             </div>
//           </div>

//           {/* Image Section */}
//           <div className="relative group order-1 lg:order-2">
//             <label
//               htmlFor="upload-image"
//               className="block cursor-pointer overflow-hidden rounded-xl aspect-[4/3]"
//             >
//               <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
//               <Image
//                 src={selectedFile ? selectedFile : "/image/placeholder.webp"}
//                 width={800}
//                 height={600}
//                 alt={course?.courseOutput?.courseName || "Course Image"}
//                 className="w-full h-full object-cover rounded-xl transform group-hover:scale-[1.02] transition-transform duration-500"
//                 priority
//               />
//             </label>
//             <input
//               type="file"
//               id="upload-image"
//               className="hidden"
//               onChange={onFileSelected}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CourseBasicInfo;

// Explain the concept in Detali on Topic:<>, Chapter:<>,in JSON Format with fild as Title, description in detail, Code Example(Html Code Format) if applicable
// Explain the concept in Detali on Topic:python, Chapter:OOP Fundamentals Review,in JSON Format with fild as Title, description in detail, Code Example(Html Code Format) if applicable

import Image from "next/image";
import React, { useState } from "react";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { FaClock, FaGraduationCap, FaLanguage } from "react-icons/fa";
import EditCourseBasic from "./EditCourseBasic";
import { stronge } from "/configs/firebaseConfig";
import Link from "next/link";

function CourseBasicInfo({ course }) {
  const [selectedFile, setSelectedFile] = useState();

  const onFileSelected = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setSelectedFile(URL.createObjectURL(file));
    const fileName = Date.now() + ".jpg";
    const storageRef = stronge.ref(stronge, fileName);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50/30 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Content Section */}
            <div className="space-y-8 order-2 lg:order-1">
              <div className="flex justify-end">
                <EditCourseBasic course={course} />
              </div>

              {/* Course Title */}
              <div>
                <h1 className="font-bold text-3xl sm:text-4xl text-gray-900 leading-tight mb-4">
                  {course?.courseOutput?.courseName}
                </h1>
              </div>

              {/* Course Description */}
              <p className="text-gray-600 leading-relaxed text-lg">
                {course?.courseOutput?.description}
              </p>

              {/* Categories */}
              <div className="flex flex-wrap gap-3">
                <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-xl">
                  <IoExtensionPuzzleOutline className="text-xl text-primary mr-2" />
                  <span className="font-medium text-primary">
                    {course?.category}
                  </span>
                </div>
                {/* Add more categories if needed */}
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <Link href={`/create-course/${course?.courseId}/start`}>
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-white rounded-xl font-semibold text-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                    <span className="relative z-10">Start Learning Now</span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-200"></div>
                  </button>
                </Link>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative group order-1 lg:order-2">
              <label
                htmlFor="upload-image"
                className="block cursor-pointer overflow-hidden rounded-2xl aspect-[4/3]"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-blue-600/30 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-white/90 text-primary px-4 py-2 rounded-lg font-medium transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      Change Image
                    </span>
                  </div>
                </div>
                <Image
                  src={selectedFile ? selectedFile : "/image/placeholder.webp"}
                  width={1200}
                  height={900}
                  alt={course?.courseOutput?.courseName || "Course Image"}
                  className="w-full h-full object-cover rounded-2xl transform group-hover:scale-105 transition-all duration-700 ease-out"
                  priority
                />
              </label>
              <input
                type="file"
                id="upload-image"
                className="hidden"
                onChange={onFileSelected}
              />
            </div>
          </div>

          {/* Additional Info Section - Optional */}
        </div>
      </div>
    </div>
  );
}

export default CourseBasicInfo;
