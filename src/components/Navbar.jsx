import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold ">
          nikita.
        </div>
        <nav>
          <ul className="flex space-x-6 text-lg">
            <li>
              <Link
                to="/"
                smooth={true}
                duration={500}
                // className="cursor-pointer hover:text-indigo-600"
                className="cursor-pointer navbar-hover"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="cursor-pointer navbar-hover"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="skill"
                smooth={true}
                duration={500}
                className="cursor-pointer navbar-hover"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="project"
                // smooth={true}
                // duration={500}
                className="cursor-pointer navbar-hover"
              >
                Projects
              </Link>
            </li>
            {/* <li>
              <Link
                to="resume"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-indigo-600"
              >
                Resume
              </Link> 
              <a href="https://drive.google.com/drive/u/0/folders/1iRwv_8Pr3rdM4XzuXtLeZIJPtFQjSaZd">Resume</a>
            </li> */}
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer navbar-hover"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
