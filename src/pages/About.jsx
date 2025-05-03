import React from 'react';

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto  p-5 mt-5 text-center">
        <h2 className="text-4xl mt-10 font-bold text-indigo-700 mb-8">About Me</h2>
        <p className="text-xl  mb-6">
          Hi! I'm <span className="font-semibold">Nikita Pandit</span>, a passionate and ambitious
          full-stack developer from Nepal. I am currently pursuing my B.Sc. in Microbiology while developing my web
          development skills. I love working on challenging projects that require creative solutions, and I’m always
          striving to grow and improve in the field of technology.
        </p>
        <p className="text-xl  mb-6">
          I’m driven by a desire to help others and make an impact. Through my projects, I aim to empower people and
          make technology more accessible. When I'm not coding, you can find me volunteering, reading, or working on
          ways to improve myself and the world around me.
        </p>
        <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Skills & Technologies</h3>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="card px-6 py-3 rounded-lg shadow-lg text-indigo-700 text-lg font-medium">
            HTML & CSS
          </div>
          <div className="card px-6 py-3 rounded-lg shadow-lg text-indigo-700 text-lg font-medium">
            JavaScript
          </div>
          <div className="card px-6 py-3 rounded-lg shadow-lg text-indigo-700 text-lg font-medium">
            React & Redux
          </div>
          <div className="card px-6 py-3 rounded-lg shadow-lg text-indigo-700 text-lg font-medium">
            Node.js & Express
          </div>
          <div className="bg-indigo-100 px-6 py-3 rounded-lg shadow-lg text-indigo-700 text-lg font-medium">
            MongoDB
          </div>
          <div className=" card px-6 py-3 rounded-lg shadow-lg text-indigo-700 text-lg font-medium">
            Git & GitHub
          </div>
        </div>
      </div>
    </section>
  );
}

