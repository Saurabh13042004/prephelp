
import './App.css'
import Navbar from './components/Navbar'
import Admin from './pages/Admin'
import Form from './pages/Form'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Submitted from './pages/Submitted'
function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/formSubmitted" element={<Submitted/>}/>
      </Routes>
    </Router>
  )
}

export default App
