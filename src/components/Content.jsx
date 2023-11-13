import React from 'react'

function Content() {
  return (
    <div className=' py-5 my-5'>
      <div className="max-w-[85%] mx-auto bg-white rounded-lg overflow-hidden shadow-lg mt-8">
        <div className="p-4 flex items-center">
          <div className="bg-gray-300 w-16 h-16 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="path_to_your_profile_pic.jpg"
              alt="Profile"
            />
          </div>
          <div className="ml-4">
            <p className="text-xl font-semibold">Saurabh shukla</p>
            <p className="text-gray-600">
              mai Madarchod hu....Mai hi to hu Madarchod ...Mere se Bara Madarchod koi nii h
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content