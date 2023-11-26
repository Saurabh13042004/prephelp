import React from 'react'
import '../index.css'

function Top() {
  return (
    <div className='justify-center'>
      <div className='text-center justify-center'>
        <div className=' lg:w-[45%] lg:mx-[28%]  my-[72px] rounded-3xl font-semibold px-10 py-3 hover_change'>An Exclusive Platform For Chitkara University!! </div>
        </div>
        <p className=' text-[56px] text-center font-bold p-6 '>ACE YOUR INTERVIEWS WITH <br/><span className='Text-change'>PREPHELP</span></p>
         <div className="flex justify-center">
        <button className="bg-black text-white px-8 py-3 my-4 rounded-full hover:bg-gray-800">
          Solve Questions
        </button>

       
      </div>
      <h4 className='lg:mx-[10%] top-[50px] text-xl font-medium'>Interview Expieriences.</h4>
    </div>
  )
}

export default Top