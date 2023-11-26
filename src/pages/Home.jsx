import React from 'react'
import Navbar from '../components/Navbar';
import Top from '../components/Top';
import Content from '../components/Content';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <>
      <Navbar/>
      <Top/>
      <Link to= '/MainContent' className=' hover:cursor-pointer'>
      <Content/>
      </Link>
    </>
  )
}

export default Home;