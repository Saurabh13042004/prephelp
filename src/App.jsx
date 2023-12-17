
import './App.css'

import Admin from './pages/Admin'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Submitted from './pages/Submitted'
import Login from './pages/Login'
import Home from './pages/Home'
import Form from './pages/Form'
import BlogPost from './components/BlogPost'
import Questions from './pages/Questions'
import Error404 from './pages/Error404'
import LandingPage from './pages/LandingPage'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
function App() {

  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        
        <Route path="/admin" element={<Admin/>} />
        <Route path="/formSubmitted" element={<Submitted/>}/>
        <Route path = "/login" element={<Login/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path="/" element={<LandingPage/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='*' element={<Error404/>}/>
        <Route path='/questions' element={<Questions/>}/>
        <Route path='/post/:id' element={<BlogPost/>}/>
        
      </Routes>
    </Router>
  )
}

export default App
