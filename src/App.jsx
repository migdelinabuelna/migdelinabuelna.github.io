// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'


import { Route, Routes } from 'react-router-dom';
import './App.css'

import About from './pages/About/About'
import Resume from './pages/Resume/resume';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';

import Sidebar from './components/Sidebar/Sidebar';

function App() {

  return (
    <>
     
     <Sidebar />
    <Routes>
      <Route path="/" element={<About />}/>
      <Route path="/resume" element={<Resume />}/>
      <Route path="/projects" element={<Projects />}/>
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  );
}


export default App;
