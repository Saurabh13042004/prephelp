import React from 'react'
import { useState } from 'react'
function Form() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState('')
  const [company, setCompany] = useState('')
  const [position, setPosition] = useState('')
  const [experience, setExperience] = useState('')
  const [salary, setSalary] = useState('')
  const [location, setLocation] = useState('')
  const [interview, setInterview] = useState('')

  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleContact = (e) => {
    setContact(e.target.value)
  }
  const handleCompany = (e) => {
    setCompany(e.target.value)
  }
  const handlePosition = (e) => {
    setPosition(e.target.value)
  }
  const handleExperience = (e) => {
    setExperience(e.target.value)
  }
  const handleSalary = (e) => {
    setSalary(e.target.value)
  }
  const handleLocation = (e) => {
    setLocation(e.target.value)
  }
  const handleInterview = (e) => {
    setInterview(e.target.value)
  }


  return (
    <div className='container py-5'>
      <h1 className='text-4xl font-bold text-center'>Welcome to uPrep</h1>
      <p className='text-lg text-center text-slate-500'>Come on share your experince and help others to crack interviews</p>
      <form action="">
        <div>
      <label>Name</label>
      <div className="form-control w-full max-w-xs">
      <input type="text"  value ={name} onChange={handleName} className='input input-bordered w-full' placeholder='Enter Your Name'/>
      </div>
      </div>

      <div>
      <label>Email</label>
      <div className="form-control w-full max-w-xs">
        <input type="email" value ={email} onChange={handleEmail} className='input input-bordered w-full' placeholder='Enter Your Email'/>


      </div>
      </div>
       <div>
      <label>Contact</label>
      <div className="form-control w-full max-w-xs">
        <input type="number" value ={contact} onChange={handleContact} className='input input-bordered w-full' placeholder='Enter Your Contact'/>
       </div>
</div>  

<div>
      <label>Company</label>
      <div className="form-control w-full max-w-xs">
        <input type="text" value ={company} onChange={handleCompany} className='input input-bordered w-full' placeholder='Enter Your Company'/>
       </div>

</div>
<div>
    
      <label>Position</label>
      <div className="form-control w-full max-w-xs">
        <input type="text" value ={position} onChange={handlePosition} className='input input-bordered w-full' placeholder='Enter Your Position'/>
       </div>
</div>
<div>
      <label>Experience</label>
      <div className="form-control w-full max-w-xs">
        <input type="text" value ={experience} onChange={handleExperience} className='input input-bordered w-full' placeholder='Enter Your Experience'/>
       </div>

</div>
<div>
      <label>Salary</label>
      <div className="form-control w-full max-w-xs">
        <input type="text" value ={salary} onChange={handleSalary} className='input input-bordered w-full' placeholder='Enter Your Salary'/>
       </div>

</div>
<div>
      <label>Location</label>
      <div className="form-control w-full max-w-xs">
        <input type="text" value ={location} onChange={handleLocation} className='input input-bordered w-full' placeholder='Enter Your Location'/>
       </div>
</div>
<div>
      <label>Interview</label>
      <div className="form-control w-full max-w-xs">
        <input type="text" value ={interview} onChange={handleInterview} className='input input-bordered w-full' placeholder='Enter Your Interview'/>
       </div>

</div>
<div className="form-control w-full max-w-xs">
        <button className='btn btn-primary'>Submit</button>
       </div>
       



      </form>
    </div>
  )
}

export default Form