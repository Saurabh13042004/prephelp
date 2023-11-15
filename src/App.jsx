
import './App.css'
import Navbar from './components/Navbar'
import Admin from './pages/Admin'
import Form from './pages/Form'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Submitted from './pages/Submitted'
import Login from './pages/Login'
import Home from './pages/Home'
function App() {

  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/Form" element={<Form />} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/formSubmitted" element={<Submitted/>}/>
        <Route path = "/login" element={<Login/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
  )
}

export default App
