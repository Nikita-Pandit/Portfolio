// import React from 'react';

// export default function Skills() {
//   return (
//     <section id="skills" className="min-h-screen bg-gray-50 py-16 px-6">
//       <div className="max-w-4xl mx-auto text-center">
//         <h2 className="text-4xl font-bold text-indigo-700 mb-8">Skills</h2>
//         <p className="text-xl text-gray-700 mb-6">
//           I believe in continuously learning and adapting to new technologies. Over time, I’ve developed a strong set of
//           technical and soft skills that help me tackle challenges and work efficiently in both solo and collaborative environments.
//         </p>

//         {/* Technical Skills */}
//         <div className="mb-10">
//           <h3 className="text-2xl font-semibold text-indigo-700 mb-6">Technical Skills</h3>
//           <div className="flex flex-wrap justify-center gap-8">
//             <div className="bg-indigo-100 px-6 py-3 rounded-lg shadow-lg text-indigo-700 text-lg font-medium">
//               HTML & CSS
//             </div>
//             <div className="bg-indigo-100 px-6 py-3 rounded-lg shadow-lg text-indigo-700 text-lg font-medium">
//               JavaScript
//             </div>
//             <div className="bg-indigo-100 px-6 py-3 rounded-lg shadow-lg text-indigo-700 text-lg font-medium">
//               React & Redux
//             </div>
//             <div className="bg-indigo-100 px-6 py-3 rounded-lg shadow-lg text-indigo-700 text-lg font-medium">
//               Node.js & Express
//             </div>
//             <div className="bg-indigo-100 px-6 py-3 rounded-lg shadow-lg text-indigo-700 text-lg font-medium">
//               MongoDB
//             </div>
//             <div className="bg-indigo-100 px-6 py-3 rounded-lg shadow-lg text-indigo-700 text-lg font-medium">
//               Git & GitHub
//             </div>
//             <div className="bg-indigo-100 px-6 py-3 rounded-lg shadow-lg text-indigo-700 text-lg font-medium">
//               RESTful APIs
//             </div>
//             <div className="bg-indigo-100 px-6 py-3 rounded-lg shadow-lg text-indigo-700 text-lg font-medium">
//               Tailwind CSS
//             </div>
//           </div>
//         </div>

//         {/* Soft Skills */}
//         <div>
//           <h3 className="text-2xl font-semibold text-indigo-700 mb-6">Soft Skills</h3>
//           <div className="flex flex-wrap justify-center gap-8">
//             <div className="bg-indigo-100 px-6 py-3 rounded-lg shadow-lg text-indigo-700 text-lg font-medium">
//               Communication
//             </div>
//             <div className="bg-indigo-100 px-6 py-3 rounded-lg shadow-lg text-indigo-700 text-lg font-medium">
//               Problem Solving
//             </div>
//             <div className="bg-indigo-100 px-6 py-3 rounded-lg shadow-lg text-indigo-700 text-lg font-medium">
//               Time Management
//             </div>
//             <div className="bg-indigo-100 px-6 py-3 rounded-lg shadow-lg text-indigo-700 text-lg font-medium">
//               Teamwork
//             </div>
//             <div className="bg-indigo-100 px-6 py-3 rounded-lg shadow-lg text-indigo-700 text-lg font-medium">
//               Adaptability
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



import React from 'react';

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen mt-10 bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-semibold text-center  mb-8">Skills & Expertise</h2>

        <p className="text-lg  text-center mb-12">
          I am constantly honing my technical and soft skills, and here are a few areas where I specialize. From building
          full-stack web applications to solving complex problems with JavaScript and React, I strive to improve each day.
        </p>

        {/* Technical Skills */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-indigo-700 mb-6">Technical Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className=" p-4 card rounded-lg shadow-sm hover:shadow-md transition">
              <h4 className="text-xl font-semibold ">HTML & CSS</h4>
              <p className=" mt-2">Building responsive and elegant websites with clean code.</p>
            </div>
            <div className="card p-4 rounded-lg shadow-sm hover:shadow-md transition">
              <h4 className="text-xl font-semibold">JavaScript</h4>
              <p className=" mt-2">Building dynamic and interactive web features with vanilla JS.</p>
            </div>
            <div className=" card p-4 rounded-lg shadow-sm hover:shadow-md transition">
              <h4 className="text-xl font-semibold">React & Redux</h4>
              <p className="mt-2">Building modern single-page applications (SPAs) with React and state management with Redux.</p>
            </div>
            <div className=" card p-4 rounded-lg shadow-sm hover:shadow-md transition">
              <h4 className="text-xl font-semibold">Node.js & Express</h4>
              <p className="mt-2">Creating back-end servers and APIs to power web applications.</p>
            </div>
            <div className="card p-4 rounded-lg shadow-sm hover:shadow-md transition">
              <h4 className="text-xl font-semibold text-indigo-600">MongoDB</h4>
              <p className="mt-2">Designing and managing databases to support complex data structures.</p>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              <h4 className="text-xl font-semibold text-indigo-600">Git & GitHub</h4>
              <p className="text-gray-600 mt-2">Version control and collaboration with Git and GitHub for better project management.</p>
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-semibold text-indigo-700 mb-6">Soft Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="card p-4 rounded-lg shadow-sm hover:shadow-md transition">
              <h4 className="text-xl font-semibold">Communication</h4>
              <p className=" mt-2">Clear and concise communication to articulate ideas effectively.</p>
            </div>
            <div className=" card p-4 rounded-lg shadow-sm hover:shadow-md transition">
              <h4 className="text-xl font-semibold">Problem Solving</h4>
              <p className=" mt-2">Creative solutions to technical and non-technical challenges.</p>
            </div>
            <div className=" card p-4 rounded-lg shadow-sm hover:shadow-md transition">
              <h4 className="text-xl font-semibold">Time Management</h4>
              <p className=" mt-2">Balancing multiple tasks and projects to meet deadlines efficiently.</p>
            </div>
            <div className=" card p-4 rounded-lg shadow-sm hover:shadow-md transition">
              <h4 className="text-xl font-semibold">Teamwork</h4>
              <p className=" mt-2">Collaborating and learning with others to achieve common goals.</p>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              <h4 className="text-xl font-semibold text-indigo-600">Adaptability</h4>
              <p className="text-gray-600 mt-2">Quickly adjusting to new tools, workflows, and environments.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
