// import React from 'react';
// import { motion } from 'framer-motion';

// export default function Home() {
//   return (
//     <section className="min-h-screen flex items-center justify-center container p-6">
//       <div className="max-w-4xl w-full text-center space-y-6">
//         <motion.h1 
//           className="text-4xl md:text-5xl font-extrabold text-white"
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           Hi, I'm Nikita Pandit 👋
//         </motion.h1>

//         <motion.p 
//           className="text-lg md:text-xl text-white"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4, duration: 0.6 }}
//         >
//           Full Stack Developer | Building Scalable & User-Centric Web Applications
//         </motion.p>

//         <motion.p 
//           className="text-md text-white max-w-2xl mx-auto"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6, duration: 0.6 }}
//         >
//           I’m passionate about creating solutions that empower people. From building intuitive interfaces to solving real-world problems through code, I love bringing ideas to life. Currently working on ConnectED and looking forward to more collaborations.
//         </motion.p>

//         <div className="flex justify-center gap-4 pt-4">
//           <a 
//             href="https://github.com/Nikita-Pandit" 
//             target="_blank" 
//             rel="noopener noreferrer"
//             className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition"
//           >
//             GitHub
//           </a>
//           <a 
//             href="/project" 
//             className="bg-violet-600 text-white px-4 py-2 rounded-full hover:bg-violet-500 transition"
//           >
//             View Projects
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }


// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
//  // make sure this path matches your setup

// export default function Home() {
//   return (
   
//     <section 
//     // className="min-h-screen flex items-center justify-center container p-6"
//     className="min-h-screen flex items-center justify-center py-10 text-gray-80"
//     >
//       <div className="max-w-4xl  w-full text-center space-y-6">
//         <motion.h1 
//           className="text-4xl md:text-5xl font-extrabold text-white"
//           // initial={{ opacity: 0, y: -30 }}
//           // animate={{ opacity: 1, y: 0 }}
//           // transition={{ duration: 0.6 }}
//         >
//           Hi, I'm Nikita Pandit 👋
//         </motion.h1>

//         <motion.p 
//           className="text-lg md:text-xl text-white"
//           // initial={{ opacity: 0 }}
//           // animate={{ opacity: 1 }}
//           // transition={{ delay: 0.4, duration: 0.6 }}
//         >
//           Full Stack Developer | Building Scalable & User-Centric Web Applications
//         </motion.p>

//         <motion.p 
//           className="text-md text-white max-w-2xl mx-auto"
//           // initial={{ opacity: 0 }}
//           // animate={{ opacity: 1 }}
//           // transition={{ delay: 0.6, duration: 0.6 }}
//         >
//           I’m passionate about creating solutions that empower people. From building intuitive interfaces to solving real-world problems through code, I love bringing ideas to life. Currently working on ConnectED and looking forward to more collaborations.
//         </motion.p>

//         {/* <div className="flex justify-center gap-4 pt-4">
//           <a 
//             href="https://github.com/Nikita-Pandit" 
//             target="_blank" 
//             rel="noopener noreferrer"
//             className="social-btn"
//           >
//             <FaGithub className="icon" /> GitHub
//           </a>
//           <a 
//             href="https://linkedin.com/in/nikita-pandit" 
//             target="_blank" 
//             rel="noopener noreferrer"
//             className="social-btn"
//           >
//             <FaLinkedin className="icon" /> LinkedIn
//           </a>
//           <a 
//             href="https://twitter.com/yourhandle" 
//             target="_blank" 
//             rel="noopener noreferrer"
//             className="social-btn"
//           >
//             <FaTwitter className="icon" /> Twitter
//           </a>
//           <a 
//             href="https://instagram.com/yourhandle" 
//             target="_blank" 
//             rel="noopener noreferrer"
//             className="social-btn"
//           >
//             <FaInstagram className="icon" /> Instagram
//           </a>
//           <a 
//             href="/project" 
//             className="bg-violet-600 text-white px-4 py-2 rounded-full hover:bg-violet-500 transition"
//           >
//             View Projects
//           </a>
//         </div> */}

// {/* <div className="flex justify-center gap-6 pt-6 flex-wrap">
//   <a 
//     href="https://github.com/Nikita-Pandit" 
//     target="_blank" 
//     rel="noopener noreferrer"
//     className="social-circle"
//     aria-label="GitHub"
//   >
//     <FaGithub />
//   </a>
//   <a 
//     href="https://linkedin.com/in/nikita-pandit" 
//     target="_blank" 
//     rel="noopener noreferrer"
//     className="social-circle"
//     aria-label="LinkedIn"
//   >
//     <FaLinkedin />
//   </a>
//   <a 
//     href="https://twitter.com/yourhandle" 
//     target="_blank" 
//     rel="noopener noreferrer"
//     className="social-circle"
//     aria-label="Twitter"
//   >
//     <FaTwitter />
//   </a>
//   <a 
//     href="https://instagram.com/yourhandle" 
//     target="_blank" 
//     rel="noopener noreferrer"
//     className="social-circle"
//     aria-label="Instagram"
//   >
//     <FaInstagram />
//   </a>
//   <a 
//     href="/project" 
//     className="bg-violet-600 text-white px-4 py-2 rounded-full hover:bg-violet-500 transition"
//   >
//     View Projects
//   </a>
// </div> */}
  

//   <div className="flex justify-center gap-6 pt-6 flex-wrap">
//   <a 
//   href="https://github.com/Nikita-Pandit" 
//   target="_blank"
//    rel="noopener noreferrer" 
//    className="social-circle" 
//    aria-label="GitHub">
//     <FaGithub />
//   </a>
//   <a 
//   href="https://linkedin.com/in/nikita-pandit" 
//   target="_blank" 
//   rel="noopener noreferrer" 
//   className="social-circle" 
//   aria-label="LinkedIn">
//     <FaLinkedin />
//   </a>
//   <a 
//   href="https://twitter.com/yourhandle"
//    target="_blank" 
//    rel="noopener noreferrer"
//     className="social-circle" 
//     aria-label="Twitter">
//     <FaTwitter />
//   </a>
//   <a 
//   href="https://instagram.com/yourhandle" 
//   target="_blank"
//    rel="noopener noreferrer"
//     className="social-circle"
//      aria-label="Instagram">
//     <FaInstagram />
//   </a>
//   <a 
//   href="/project"
//   className="bg-violet-600 text-white text-center px-4 py-2 rounded-full hover:bg-violet-500 transition"
//    >
//     View Projects
//   </a>
// </div>

//       </div>
//     </section>
//   );
// }


import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
// import profileImg from '../assets/nobita.jpg';


export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center py-10 px-4 bg-[#0a192f] text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* LEFT SIDE: TEXT CONTENT */}
        <div className="w-full md:w-1/2 space-y-6 text-left">
          <motion.h1 className="text-4xl md:text-5xl font-extrabold">
            {/* Hi, I'm 
            Nikita Pandit 👋 */}
            {/* <h1 className="text-4xl md:text-5xl font-bold"> */}
            <span className="block mb-2">Hi, I'm</span>
            <span className="bg-gradient-to-r from-pink-400 to-pink-600 text-transparent bg-clip-text">
              Nikita Pandit
            </span>
            <span>👋</span>
          {/* </h1> */}
          </motion.h1>

          <motion.p className="text-lg md:text-xl">
            Full Stack Developer | Building Scalable & User-Centric Web Applications
          </motion.p>

          <motion.p className="text-md max-w-lg">
            {/* I’m passionate about creating solutions that empower people. From building intuitive interfaces to solving real-world problems through code, I love bringing ideas to life. Currently working on ConnectED and looking forward to more collaborations. */}
            {/* I'm passionate about creating solutions that empower people. From building intuitive interfaces to solving real-world problems through code, I love turning ideas into reality. Always excited for new challenges and collaborations to make an impact. */}

            I'm all about creating solutions that make a difference. Whether it’s designing user-friendly interfaces or solving real-world problems with code, I’m passionate about bringing ideas to life. Always eager for new opportunities to collaborate and learn along the way.
          </motion.p>

          <div className="flex gap-6 pt-4 flex-wrap">
            <a href="https://github.com/Nikita-Pandit" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/nikita-pandit-120274262/" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="/project" className="bg-violet-600 text-white text-center px-4 py-3 rounded-full hover:bg-violet-500 transition">
              View Projects
            </a>
          </div>
        </div>

        {/* RIGHT SIDE: IMAGE */}
        <div className="w-full  md:w-1/2 flex justify-center">
          <img
            // src={profileImg}
            src="/images.jpeg"
            alt="Nikita Pandit"
            // className="w-64 h-64 rounded-full object-cover shadow-lg border-4 border-white"
            className="rounded-full image w-100 h-100 object-cover hover-pop"

          />
        </div>
      </div>
    </section>
  );
}
