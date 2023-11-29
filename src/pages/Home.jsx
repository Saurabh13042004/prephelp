import React from 'react'
import Navbar from '../components/Navbar';
import Top from '../components/Top';
import BlogItem from '../components/BlogItem';
import { Link } from 'react-router-dom';


function Home() {
  return (
   
   <div className="bg-[#FDE5D4]">
      <Navbar/>
      <Top/>
      
      <BlogItem/>
      
    </div>
  )
}

export default Home;