import React from 'react';
import { FaEye } from "react-icons/fa";

function Content() {
  return (
    <div className='py-5 my-5 '>
      <div className="max-w-[85%] mx-auto bg-white rounded-lg overflow-hidden shadow-lg mt-8 p-2 ">
        {/* Title block */}
        <div className="p-4 flex items-center">
          <div className="bg-gray-300 w-16 h-16 rounded overflow-hidden">
            {/* Company logo */}
            <img
              className="w-full h-full object-cover "
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png"
              alt="Company Logo"
            />
          </div>
          <div className="ml-4">
            {/* Title with company name and position */}
            <p className="text-xl font-semibold">Microsoft | Software Developer | Fresher </p>
            {/* Subtitle with number of rounds */}
            <p className="text-gray-600 font-bold">3 Rounds | 6 Coding Problems</p>
          </div>
        </div>
        <div className="border-t border-gray-200 my-2"></div>
        {/* Profile block */}
        <div className="px-4 py-2 flex items-center">
          <div className="bg-gray-300 w-12 mx-2 h-12 rounded-full overflow-hidden">
            {/* Profile image */}
            <img
              className="w-full  h-full object-cover"
              src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
              alt="Profile"
            />
          </div>
          <div className="ml-4 px-1">
            {/* Name with surname */}
            <p className="text-">Saurabh Shukla</p>
            {/* Subtitle with university and batch */}
            <p className="text-gray-600 text-sm">2021 Batch | Chitkara University</p>
          </div>
          <div className="ml-auto flex">
            {/* Selected icon with green tick */}
            {/* <img
              className="w-6 h-6"
              src="https://img1.pnghut.com/20/24/13/AUYaPbGumU/brand-logo-text-green-leaf.jpg"
              alt="Selected"
            /> */}
            <p className='text-red-900 font-bold'>Selected</p>
          </div>
        </div>

        {/* Horizontal line */}
        {/* <div className="border-t border-gray-200 my-2"></div> */}

        {/* Number of views and comments */}
        {/* <div className="flex justify-between text-sm text-gray-600 px-4 py-2">
          <p className='flex gap-3'> <span><FaEye /></span>  10 views</p>
          <p>5 comments</p>
        </div> */}
      </div>
    </div>
  );
}

export default Content;
