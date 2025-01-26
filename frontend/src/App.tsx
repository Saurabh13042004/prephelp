import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/StudentDashboard';
import Profile from './pages/Profile';
import InterviewExperience from './pages/InterviewExperience';
import ExperienceDetails from './pages/ExperienceDetails';
import ShareExperience from './pages/ShareExperience';
import CodeEditorPage from './pages/CodeEditorPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/student/dashboard" element={<Dashboard/>} />
        <Route path='/student/profile' element={<Profile/>}/>
        <Route path='/student/experiences' element={<InterviewExperience/>}/>
        <Route path='/experiences/:id' element={<ExperienceDetails/>}/>
        <Route path='/student/experience/share' element={<ShareExperience/>}/>
        <Route path='/code-editor' element={<CodeEditorPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;