import React from 'react'
import VideoSrc from '../assets/video.mp4'
function Sidebar() {
  return (
    <div className='bg-slate-300 '>
      <video src={VideoSrc} 
      className='w-full h-auto object-cover object-center'
      autoPlay loop muted
      ></video>
    </div>
  )
}

export default Sidebar