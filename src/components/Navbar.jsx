// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function Navbar() {
//   return (
//     <header className="shadow-md fixed w-full top-0 left-0 z-50">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//         <div className="text-2xl font-bold navbar-hover ">
//           nikita.
//         </div>
//         <nav>
//           <ul className="flex space-x-6 text-lg">
//             <li>
//               <Link
//                 to="/"
//                 smooth={true}
//                 duration={500}
//                 // className="cursor-pointer hover:text-indigo-600"
//                 className="cursor-pointer navbar-hover"
//               >
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="about"
//                 smooth={true}
//                 duration={500}
//                 className="cursor-pointer navbar-hover"
//               >
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="skill"
//                 smooth={true}
//                 duration={500}
//                 className="cursor-pointer navbar-hover"
//               >
//                 Skills
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="project"
//                 // smooth={true}
//                 // duration={500}
//                 className="cursor-pointer navbar-hover"
//               >
//                 Projects
//               </Link>
//             </li>
           
//             <li>
//               <Link
//                 to="contact"
//                 smooth={true}
//                 duration={500}
//                 className="cursor-pointer navbar-hover"
//               >
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// }


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="shadow-md fixed w-full top-0 left-0 z-50 bg-[#1E2332]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">nikita.</div>

        {/* Hamburger Icon - visible on small screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-lg text-white">
            {['/', 'about', 'skill', 'project', 'contact'].map((path, idx) => (
              <li key={idx}>
                <Link
                  to={path}
                  className="cursor-pointer navbar-hover"
                  onClick={closeMenu}
                >
                  {path === '/' ? 'Home' : path.charAt(0).toUpperCase() + path.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-[#1E2332] px-6 pb-4">
          <ul className="flex flex-col space-y-4 text-lg text-white">
            {['/', 'about', 'skill', 'project', 'contact'].map((path, idx) => (
              <li key={idx}>
                <Link
                  to={path}
                  className="block navbar-hover"
                  onClick={closeMenu}
                >
                  {path === '/' ? 'Home' : path.charAt(0).toUpperCase() + path.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
