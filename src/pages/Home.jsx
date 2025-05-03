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


import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
 // make sure this path matches your setup

export default function Home() {
  return (
   
    <section 
    // className="min-h-screen flex items-center justify-center container p-6"
    className="min-h-screen flex items-center justify-center py-10 text-gray-80"
    >
      <div className="max-w-4xl  w-full text-center space-y-6">
        <motion.h1 
          className="text-4xl md:text-5xl font-extrabold text-white"
          // initial={{ opacity: 0, y: -30 }}
          // animate={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.6 }}
        >
          Hi, I'm Nikita Pandit 👋
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-white"
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          // transition={{ delay: 0.4, duration: 0.6 }}
        >
          Full Stack Developer | Building Scalable & User-Centric Web Applications
        </motion.p>

        <motion.p 
          className="text-md text-white max-w-2xl mx-auto"
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          // transition={{ delay: 0.6, duration: 0.6 }}
        >
          I’m passionate about creating solutions that empower people. From building intuitive interfaces to solving real-world problems through code, I love bringing ideas to life. Currently working on ConnectED and looking forward to more collaborations.
        </motion.p>

        {/* <div className="flex justify-center gap-4 pt-4">
          <a 
            href="https://github.com/Nikita-Pandit" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-btn"
          >
            <FaGithub className="icon" /> GitHub
          </a>
          <a 
            href="https://linkedin.com/in/nikita-pandit" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-btn"
          >
            <FaLinkedin className="icon" /> LinkedIn
          </a>
          <a 
            href="https://twitter.com/yourhandle" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-btn"
          >
            <FaTwitter className="icon" /> Twitter
          </a>
          <a 
            href="https://instagram.com/yourhandle" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-btn"
          >
            <FaInstagram className="icon" /> Instagram
          </a>
          <a 
            href="/project" 
            className="bg-violet-600 text-white px-4 py-2 rounded-full hover:bg-violet-500 transition"
          >
            View Projects
          </a>
        </div> */}

{/* <div className="flex justify-center gap-6 pt-6 flex-wrap">
  <a 
    href="https://github.com/Nikita-Pandit" 
    target="_blank" 
    rel="noopener noreferrer"
    className="social-circle"
    aria-label="GitHub"
  >
    <FaGithub />
  </a>
  <a 
    href="https://linkedin.com/in/nikita-pandit" 
    target="_blank" 
    rel="noopener noreferrer"
    className="social-circle"
    aria-label="LinkedIn"
  >
    <FaLinkedin />
  </a>
  <a 
    href="https://twitter.com/yourhandle" 
    target="_blank" 
    rel="noopener noreferrer"
    className="social-circle"
    aria-label="Twitter"
  >
    <FaTwitter />
  </a>
  <a 
    href="https://instagram.com/yourhandle" 
    target="_blank" 
    rel="noopener noreferrer"
    className="social-circle"
    aria-label="Instagram"
  >
    <FaInstagram />
  </a>
  <a 
    href="/project" 
    className="bg-violet-600 text-white px-4 py-2 rounded-full hover:bg-violet-500 transition"
  >
    View Projects
  </a>
</div> */}
  

  <div className="flex justify-center gap-6 pt-6 flex-wrap">
  <a 
  href="https://github.com/Nikita-Pandit" 
  target="_blank"
   rel="noopener noreferrer" 
   className="social-circle" 
   aria-label="GitHub">
    <FaGithub />
  </a>
  <a 
  href="https://linkedin.com/in/nikita-pandit" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="social-circle" 
  aria-label="LinkedIn">
    <FaLinkedin />
  </a>
  <a 
  href="https://twitter.com/yourhandle"
   target="_blank" 
   rel="noopener noreferrer"
    className="social-circle" 
    aria-label="Twitter">
    <FaTwitter />
  </a>
  <a 
  href="https://instagram.com/yourhandle" 
  target="_blank"
   rel="noopener noreferrer"
    className="social-circle"
     aria-label="Instagram">
    <FaInstagram />
  </a>
  <a 
  href="/project"
  className="bg-violet-600 text-white text-center px-4 py-2 rounded-full hover:bg-violet-500 transition"
   >
    View Projects
  </a>
</div>

      </div>
    </section>
  );
}
