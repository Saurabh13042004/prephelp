import React from 'react'
import Form from './Form'
import Sidebar from './Sidebar'
function MainForm() {
  return (
    <div className="container grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
        <Sidebar/>
        <Form/>


    </div>
  )
}

export default MainForm