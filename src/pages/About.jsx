// import React from 'react';

// export default function About() {
//   return (
//     <section id="about" className="min-h-screen bg-gray-50 py-16 px-6">
//       <div className="max-w-4xl mx-auto  p-5 mt-5 text-center">
//         <h2 
//         // className="text-4xl mt-10 font-bold text-indigo-700 mb-8"
//         className="text-4xl font-bold mb-8 bg-clip-text"
//         >About    <span className='about-me'>Me</span>
      
//          </h2>

//         <p className="text-xl mb-6">
//   Hi! I'm <span className="font-semibold">Nikita Pandit</span>, a passionate and ambitious full-stack developer from Nepal. I am currently pursuing my B.Tech in Computer Science and Engineering from the Kalinga Institute of Industrial Technology. I love working on challenging projects that require creative solutions, and I’m always striving to grow and improve in the field of technology.
// </p>
// <p className="text-xl mb-6">
//   I’m driven by a desire to help others and make an impact. Through my projects, I aim to empower people and make technology more accessible. When I'm not coding, you can find me volunteering, reading, or working on ways to improve myself and the world around me.
// </p>

//         <h3 
        
//         // className="text-2xl font-semibold text-indigo-700 mb-4"
//          className="about-me text-2xl font-semibold text-transparent mb-4 bg-clip-text"
//         >Skills & Technologies</h3>
//         <div className="flex flex-wrap justify-center gap-6">
//           <div className="card px-6 py-3 rounded-lg shadow-lg  text-lg font-medium">
//             HTML & CSS
//           </div>
//           <div className="card px-6 py-3 rounded-lg shadow-lg  text-lg font-medium">
//             JavaScript
//           </div>
//           <div className="card px-6 py-3 rounded-lg shadow-lg  text-lg font-medium">
//             React & Redux
//           </div>
//           <div className="card px-6 py-3 rounded-lg shadow-lg  text-lg font-medium">
//             Node.js & Express
//           </div>
//           {/* <div className="bg-indigo-100 px-6 py-3 rounded-lg shadow-lg text-indigo-700 text-lg font-medium">
//             MongoDB
//           </div>
//           <div className=" card px-6 py-3 rounded-lg shadow-lg text-indigo-700 text-lg font-medium">
//             Git & GitHub
//           </div> */}
//             <div className="card px-6 py-3 rounded-lg shadow-lg  text-lg font-medium">
//             MongoDB
//           </div>
//           <div className=" card px-6 py-3 rounded-lg shadow-lg text-lg font-medium">
//             Git & GitHub
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from 'react';

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto p-5 mt-5 text-center">
        <h2 className="text-4xl font-bold mb-8">
          About <span className="about-me">Me</span>
        </h2>

        <p className="text-xl mb-6 leading-relaxed">
          Hi! I'm <span className="font-semibold text-white">Nikita Pandit</span>, a passionate and ambitious full-stack developer from Nepal. I’m currently pursuing my B.Tech in Computer Science and Engineering from the Kalinga Institute of Industrial Technology. I love building scalable solutions and tackling challenging problems in web development.
        </p>
        <p className="text-xl mb-10 leading-relaxed">
          My mission is to empower others through tech and make a meaningful impact. Outside of coding, I enjoy volunteering, reading, and working on personal growth to contribute positively to the world.
        </p>

        <h3 className="text-2xl font-semibold mb-6 about-me">Skills & Technologies</h3>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {[
            'HTML & CSS',
            'JavaScript',
            'React & Redux',
            'Node.js & Express',
            'MongoDB',
            'Git & GitHub',
          ].map((skill, idx) => (
            <div
              key={idx}
              className="card px-6 py-3 rounded-lg shadow-lg text-lg font-medium transition duration-300 hover:scale-105 hover:border hover:border-blue-400"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
