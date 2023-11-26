
import './App.css'
import Navbar from './components/Navbar'
import Admin from './pages/Admin'
import Form from './pages/Form'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Submitted from './pages/Submitted'
import Login from './pages/Login'
import Home from './pages/Home'
import MainContent from './components/MainContent'
import Form1 from './ExpForm.jsx/Form1'
function App() {

  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        
        <Route path="/admin" element={<Admin/>} />
        <Route path="/formSubmitted" element={<Submitted/>}/>
        <Route path = "/Login" element={<Login/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/form" element={<Form1/>}/>
        <Route path='/MainContent' element={<MainContent/>}/>
      </Routes>
    </Router>
  )
}

export default App
