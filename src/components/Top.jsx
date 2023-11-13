import React from 'react'
import '../index.css'

function Top() {
  return (
    <div>
        <p className='text-center my-[72px]'> <span className='rounded-3xl font-semibold px-10 py-3 hover_change'>An Exclusive Platform For Chitkara University!! </span> </p>
        <p className=' text-[56px] text-center font-bold font-sans p-6 Font-heading'>ACE YOUR INTERVIEWS WITH <br/>PREP-<span className='Text-change'>HELP</span>..</p>
         <div className="flex justify-center">
        <button className="bg-black text-white px-8 py-3 my-4 rounded-full hover:bg-gray-800">
          Solve Questions
        </button>
      </div>
      
    </div>
  )
}

export default Top