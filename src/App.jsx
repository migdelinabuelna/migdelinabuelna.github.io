import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css'
import PageSidebar from './components/Sidebar/Sidebar';
import About from './pages/About/About'
import Resume from './pages/Resume/Resume';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';


export default function App() {

  return (
    <>
    <PageSidebar />

    <Routes>
      <Route path="/" element={<About />}/>
      <Route path="/resume" element={<Resume />}/>
      <Route path="/projects" element={<Projects />}/>
      <Route path="/contact" element={<Contact />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
    </>
  );
}
