import React from "react";
// import Projects from "../Projects/Projects";
import Resume from "../../pages/Resume/resume";
import { Route, Routes, Link } from 'react-router-dom'


function Sidebar () {
    return (
        <nav className="side-bar">
            <Link to="/projects">PROJECTS </Link>
            <Link to="/resume">RESUME </Link> 
            <Link to="/contact"> CONTACT ME </Link>
         </nav>
    )
}

export default Sidebar;

