
import './App.css'

import Admin from './pages/Admin'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Submitted from './pages/Submitted'
import Login from './pages/Login'
import Home from './pages/Home'
import Form from './pages/Form'
import BlogPost from './components/BlogPost'
import Questions from './pages/Questions'
import InterviewForm from './pages/InterviewForm'
function App() {

  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        
        <Route path="/admin" element={<Admin/>} />
        <Route path="/formSubmitted" element={<Submitted/>}/>
        <Route path = "/Login" element={<Login/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path='/questions' element={<Questions/>}/>
        <Route path='/post/:id' element={<BlogPost/>}/>
      </Routes>
    </Router>
  )
}

export default App
