import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl mt-10 font-semibold text-center  mb-10">Contact Me</h2>
        <p className="text-center mb-8">
          Got a project idea or just want to say hello? I’d love to hear from you! Fill out the form or reach me through the info below.
        </p>

        {/* Contact Info */}
        <div className="text-center mb-10">
          <p><strong>Email:</strong> nikita@example.com</p>
          {/* <p className="text-gray-700"><strong>Location:</strong> Janakpur, Nepal</p> */}
          <p><strong>Location:</strong> Janakpur, Nepal</p>
          <p ><strong>Phone: </strong>+91 8797296088</p>
        </div>

        {/* Contact Form */}
        <form className="max-w-xl mx-auto space-y-6">
          <div>
            <label htmlFor="name" className="block">Name</label>
            <input
              type="text"
              id="name"
              className="w-full card rounded-md p-2"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block ">Email</label>
            <input
              type="email"
              id="email"
              className="w-full card rounded-md p-2"
              placeholder="your@email.com"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700">Message</label>
            <textarea
              id="message"
              rows="5"
              className="w-full card rounded-md p-2"
              placeholder="Your message..."
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
