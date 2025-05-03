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


import React, { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "ConnectED",
    description: "A MERN-based collaboration platform for college students and teachers. Features include domain-based filtering, real-time messaging, teacher ratings, and student CGPA filtering.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    link: "#",
    details: "ConnectED helps college students and teachers collaborate more effectively. It provides user filtering, ratings, and messaging to enhance academic connections.",
  },
  {
    title: "Shopshere",
    description: "An e-commerce website built with the MERN stack, featuring product browsing, secure authentication, email verification (Nodemailer), and MongoDB Atlas for data storage.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Nodemailer"],
    link: "#",
    details: "Shopshere is a modern online retail website offering a seamless shopping experience with authentication and dynamic product management.",
  },
  {
    title: "Instagram Story Feature",
    description: "A frontend clone of Instagram's story feature implemented with HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "#",
    details: "This project mimics the story behavior seen on Instagram, demonstrating dynamic display and styling using vanilla frontend tools.",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="min-h-screen py-10 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6  container">
        <h2 className="text-4xl font-bold mb-6 text-center mt-10">Projects</h2>
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
              <p className="mb-3">{project.description}</p>
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
              <button
                onClick={() => setSelectedProject(project)}
                className="inline-block bg-violet-600 text-white px-4 py-2 rounded-full hover:bg-violet-500 transition"
              >
                View Project
              </button>
            </motion.div>
          ))}
        </div>

        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl max-w-lg p-6 shadow-xl relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-2 right-4 text-gray-600 hover:text-black"
              >
                ✕
              </button>
              <h3 className="text-3xl font-bold mb-3">{selectedProject.title}</h3>
              <p className="text-gray-700 mb-4">{selectedProject.details}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-violet-200 text-violet-800 px-2 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-violet-600 text-white px-4 py-2 rounded-full hover:bg-violet-500 transition"
              >
                Visit Project
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
