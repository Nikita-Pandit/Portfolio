// import React from 'react';
// import { motion } from 'framer-motion';

// const projects = [
//   {
//     title: 'ConnectED (MERN Stack)',
//     description:
//       'A full-stack platform connecting students and teachers for collaboration, project discovery, and mentorship. Includes chat, filters, and authentication.',
//     link: 'https://github.com/nikita000pandit/ConnectED',
//   },
//   {
//     title: 'Tic-Tac-Toe Web App',
//     description:
//       'A JavaScript-based game created during a Prodigy InfoTech internship. Clean UI and responsive gameplay.',
//     link: 'https://github.com/nikita000pandit/PRODIGY_WD_03',
//   },
//   {
//     title: 'Connect Four (Java)',
//     description:
//       'A Java-based console game where two players take turns. Built as part of InternPe internship tasks.',
//     link: 'https://github.com/nikita000pandit', // Replace with actual repo if you have one
//   },
//   {
//     title: 'Personal Portfolio (React)',
//     description:
//       'Your own portfolio site showcasing your skills, journey, and projects. Designed to be clean, interactive, and responsive.',
//     link: 'https://github.com/nikita000pandit', // Replace with actual repo if deployed
//   },
// ];

// export default function Projects() {
//   return (
//     <section id="projects" className="py-16 bg-white px-6">
//       <div className="max-w-5xl mx-auto text-center">
//         <h2 className="text-4xl font-bold text-gray-800 mb-10">Projects</h2>

//         <div className="grid gap-8 md:grid-cols-2">
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               className="p-6 rounded-2xl shadow-xl bg-gradient-to-br from-indigo-50 to-white hover:shadow-2xl transition"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.4, delay: index * 0.2 }}
//             >
//               <h3 className="text-2xl font-semibold text-indigo-700 mb-2">{project.title}</h3>
//               <p className="text-gray-600 mb-4">{project.description}</p>
//               <a
//                 href={project.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block text-indigo-600 font-medium hover:underline"
//               >
//                 View Project →
//               </a>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// import React from 'react';
// import { motion } from 'framer-motion';

// const projects = [
//   {
//     title: 'ConnectED (MERN Stack)',
//     description:
//       'A full-stack platform connecting students and teachers for collaboration, project discovery, and mentorship. Includes chat, filters, and authentication.',
//     link: 'https://github.com/nikita000pandit/ConnectED',
//   },
//   {
//     title: 'Hotel Booking System',
//     description:
//       'A full-stack hotel booking platform with JWT authentication, dynamic pricing, admin panel, and REST APIs. Designed in Figma and built with a structured deployment plan.',
//     link: 'https://github.com/nikita000pandit', // Replace with actual link if available
//   },
//   {
//     title: 'Tic-Tac-Toe Web App',
//     description:
//       'A JavaScript-based game created during a Prodigy InfoTech internship. Clean UI and responsive gameplay.',
//     link: 'https://github.com/nikita000pandit/PRODIGY_WD_03',
//   },
//   {
//     title: 'Connect Four (Java)',
//     description:
//       'A Java-based console game where two players take turns. Built as part of InternPe internship tasks.',
//     link: 'https://github.com/nikita000pandit', // Replace with actual repo if available
//   },
//   {
//     title: 'Personal Portfolio (React)',
//     description:
//       'Your own portfolio site showcasing your skills, journey, and projects. Designed to be clean, interactive, and responsive.',
//     link: 'https://github.com/nikita000pandit', // Replace with actual repo if deployed
//   },
// ];

// export default function Projects() {
//   return (
//     <section id="projects" className="py-16 bg-white px-6">
//       <div className="max-w-5xl mx-auto text-center">
//         <h2 className="text-4xl font-bold text-gray-800 mb-10">Projects</h2>

//         <div className="grid gap-8 md:grid-cols-2">
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               className="p-6 rounded-2xl shadow-xl bg-gradient-to-br from-indigo-50 to-white hover:shadow-2xl transition"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.4, delay: index * 0.2 }}
//             >
//               <h3 className="text-2xl font-semibold text-indigo-700 mb-2">{project.title}</h3>
//               <p className="text-gray-600 mb-4">{project.description}</p>
//               <a
//                 href={project.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block text-indigo-600 font-medium hover:underline"
//               >
//                 View Project →
//               </a>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }











// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// const projects = [
//   {
//     title: "ConnectED",
//     description: "A MERN-based collaboration platform for college students and teachers. Features include domain-based filtering, real-time messaging, teacher ratings, and student CGPA filtering.",
//     tech: ["MongoDB", "Express", "React", "Node.js"],
//     link: "#",
//     details: "ConnectED helps college students and teachers collaborate more effectively. It provides user filtering, ratings, and messaging to enhance academic connections.",
//   },
//   {
//     title: "Shopshere",
//     description: "An e-commerce website built with the MERN stack, featuring product browsing, secure authentication, email verification (Nodemailer), and MongoDB Atlas for data storage.",
//     tech: ["MongoDB", "Express", "React", "Node.js", "Nodemailer"],
//     link: "#",
//     details: "Shopshere is a modern online retail website offering a seamless shopping experience with authentication and dynamic product management.",
//   },
//   {
//     title: "Grand Horizon",
//     description: "A full-stack hotel booking system featuring login with JWT authentication, dynamic room pricing, and an admin dashboard to manage bookings.",
//     tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
//     link: "https://github.com/Nikita-Pandit/Hotel_Booking_System",
//     details: "Grand Horizon is a hotel booking system that includes UI designs in Figma, frontend & backend architecture, RESTful APIs, and dynamic pricing logic implemented using DSA concepts. It supports secure user authentication, room booking, and admin-side management.",
//   },
//   {
//     title: "Instagram Story Feature",
//     description: "A frontend clone of Instagram's story feature implemented with HTML, CSS, and JavaScript.",
//     tech: ["HTML", "CSS", "JavaScript"],
//     link: "#",
//     details: "This project mimics the story behavior seen on Instagram, demonstrating dynamic display and styling using vanilla frontend tools.",
//   },
// ];

// export default function Projects() {
//   const [selectedProject, setSelectedProject] = useState(null);

//   return (
//     <section id="projects" className="min-h-screen py-10 bg-white text-gray-800">
//       <div className="max-w-6xl mx-auto px-6  container">
//         <h2 className="text-4xl font-bold mb-6 text-center mt-10">Projects</h2>
//         <div className="grid card-container p-5 md:grid-cols-2 gap-8">
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               className="rounded-2xl shadow-lg p-6 card"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//             >
//               <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
//               <p className="mb-3">{project.description}</p>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {project.tech.map((tech, i) => (
//                   <span
//                     key={i}
//                     className="bg-violet-200 text-violet-800 px-2 py-1 rounded-full text-sm"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//               <button
//                 onClick={() => setSelectedProject(project)}
//                 className="inline-block bg-violet-600 text-white px-4 py-2 rounded-full hover:bg-violet-500 transition"
//               >
//                 View Project
//               </button>
//             </motion.div>
//           ))}
//         </div>

//         {selectedProject && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//             <div className="card rounded-2xl max-w-lg p-6 shadow-xl relative">
//               <button
//                 onClick={() => setSelectedProject(null)}
//                 className="absolute top-2 right-4 text-gray-600 hover:text-black"
//               >
//                 ✕
//               </button>
//               <h3 className="text-3xl font-bold mb-3">{selectedProject.title}</h3>
//               <p className=" mb-4">{selectedProject.details}</p>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {selectedProject.tech.map((tech, i) => (
//                   <span
//                     key={i}
//                     className="bg-violet-200 text-violet-800 px-2 py-1 rounded-full text-sm"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//               <a
//                 href={selectedProject.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block bg-violet-600 text-white px-4 py-2 rounded-full hover:bg-violet-500 transition"
//               >
//                 Visit Project
//               </a>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }


/*
import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "EduConnect",
    description: "A MERN-based collaboration platform for college students and teachers. Features include domain-based filtering, real-time messaging, teacher ratings, and student CGPA filtering.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    link: "https://github.com/Nikita-Pandit/EduConnect",
    details: "ConnectED helps college students and teachers collaborate more effectively. It provides user filtering, ratings, and messaging to enhance academic connections.",
  },
  // {
  //   title: "Shopshere",
  //   description: "An e-commerce website built with the MERN stack, featuring product browsing, secure authentication, email verification (Nodemailer), and MongoDB Atlas for data storage.",
  //   tech: ["MongoDB", "Express", "React", "Node.js", "Nodemailer"],
  //   link: "https://github.com/Nikita-Pandit/MINI_PROJECT",
  //   details: "Shopshere is a modern online retail website offering a seamless shopping experience with authentication and dynamic product management.",
  // },
  {
    title: "Shopshere",
    description:
      // "Developed the frontend using React.js and Tailwind CSS, creating an intuitive interface for product browsing and recommendations. Implemented JWT authentication for secure user access and built an admin dashboard to manage products, orders, and business insights. Integrated frontend with backend APIs using Axios to display association rules generated by the FP-Growth algorithm (handled by data team), ensuring responsive design and efficient data flow."
      // "Developed frontend using React.js & Tailwind CSS with JWT authentication and admin dashboard for managing products and orders. Integrated APIs via Axios to display FP-Growth-based recommendations. Ensured responsive UI and smooth data flow."
      "An e-commerce site with product recommendations using FP-Growth algorithm, secure JWT login, and admin-side management. Built with React, Tailwind CSS, and Axios for backend API integration.",

  
    tech: ["React.js", "Tailwind CSS", "JWT", "Axios"],
    link: "https://github.com/Nikita-Pandit/MINI_PROJECT",
    details:
      "Shopshere is a modern e-commerce web application combining user-friendly design with smart backend integration. It supports dynamic recommendations and admin-side management for smooth retail operations.",
  }
  ,
  {
    title: "Grand Horizon",
    description: "A full-stack hotel booking system featuring login with JWT authentication, dynamic room pricing, and an admin dashboard to manage bookings.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    link: "https://github.com/Nikita-Pandit/Hotel_Booking_System",
    details: "Grand Horizon is a hotel booking system that includes UI designs in Figma, frontend & backend architecture, RESTful APIs, and dynamic pricing logic implemented using DSA concepts. It supports secure user authentication, room booking, and admin-side management.",
  },
  {
    title: "Instagram Story Feature",
    description: "A frontend clone of Instagram's story feature implemented with HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/Nikita-Pandit/Instagram_story_Feature",
    details: "This project mimics the story behavior seen on Instagram, demonstrating dynamic display and styling using vanilla frontend tools.",
  },
 
  // {
    
  //     title: "Instagram love button",
  //     description: " This feature allows a red heart animation to appear momentarily when someone clicks on your photo, mimicking the Instagram double-tap like functionality. The heart is visible for a few seconds before disappearing, adding an interactive and visually appealing effect.",
  //     tech: ["HTML", "CSS", "JavaScript"],
  //     link: "https://github.com/Nikita-Pandit/Instagram_love_button",
   
  
  // }
  {
    title: "Instagram love button",
    description: "This feature allows a red heart animation to appear momentarily when someone clicks on your photo, mimicking the Instagram double-tap like functionality...",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/Nikita-Pandit/Instagram_love_button",
    details: "It adds an interactive animation that enriches the user interface, inspired by Instagram's UX."
  }
  
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-10 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6 container">
        <h2 className="text-4xl font-bold mb-6 text-center about-me mt-10">Projects</h2>
        <div className="grid card-container p-5 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="rounded-2xl shadow-lg p-6 card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-3 description">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-violet-200 text-violet-800 px-2 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-violet-600 text-white px-4 py-2 rounded-full hover:bg-violet-500 transition"
              >
                View Project
              </a>
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
*/


import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "EduConnect",
    description: "A MERN-based collaboration platform for college students and teachers. Features include domain-based filtering, real-time messaging, teacher ratings, and student CGPA filtering.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    link: "https://github.com/Nikita-Pandit/EduConnect",
  },
  {
    title: "Shopshere",
    description: "Frontend with React.js & Tailwind CSS, JWT-based authentication, admin dashboard, and dynamic product recommendations using FP-Growth algorithm. Responsive UI & efficient data flow with Axios.",
    tech: ["React.js", "Tailwind CSS", "JWT", "Axios"],
    link: "https://github.com/Nikita-Pandit/MINI_PROJECT",
  },
  {
    title: "Grand Horizon",
    description: "A hotel booking system with login/signup using JWT, admin dashboard, dynamic pricing, and room management built using MERN stack.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    link: "https://github.com/Nikita-Pandit/Hotel_Booking_System",
  },
  {
    title: "Instagram Story Feature",
    description: "Frontend clone of Instagram's story UI using HTML, CSS, and JS to mimic story-swiping interaction.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/Nikita-Pandit/Instagram_story_Feature",
  },
  {
    title: "Instagram Love Button",
    description: "Interactive heart animation on photo click, mimicking Instagram’s like feature using only HTML, CSS, and JS.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/Nikita-Pandit/Instagram_love_button",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-16 px-6 bg-[#262B40] text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 mt-10 about-me text-center">Projects</h2>
        <div className="grid card-container p-5 gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              // className="bg-[#2f3650] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white/10"
                className="rounded-2xl shadow-lg p-6 card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-violet-500/20 text-violet-300 px-2 py-1 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-sm text-violet-400 hover:underline"
              >
                🔗 View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
