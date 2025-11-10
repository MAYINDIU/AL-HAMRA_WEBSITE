import React, { useState } from "react";
import { AiOutlineMail, AiOutlinePhone, AiOutlineEnvironment, AiOutlineHome } from "react-icons/ai";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-[#E0F7FA]" // Full page same background color
    >
      {/* Breadcrumb */}
      <div className=" py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20 text-white flex items-center gap-2">
          <AiOutlineHome />
          <Link to="/" className="hover:underline">Home</Link>
          <span>/</span>
          <span>Contact Us</span>
        </div>
      </div>

      {/* Heading */}
      <div className="px-4 sm:px-6 lg:px-20 py-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl lg:text-5xl font-extrabold text-gray-800 drop-shadow-lg"
        >
          Contact Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-gray-700 text-base lg:text-lg mt-4 max-w-3xl mx-auto leading-relaxed"
        >
          Have a question or need assistance? Fill out the form or use our contact details, and our team will respond promptly.
        </motion.p>
      </div>

      {/* Info Cards */}
      <div className="px-4 sm:px-6 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 p-6 rounded-3xl shadow-xl bg-white"
        >
          <AiOutlineEnvironment className="text-[#00838F] text-3xl" />
          <div>
            <p className="font-bold text-[#00838F]">Address</p>
            <p className="text-gray-600 text-sm">123 Health Street, Wellness City, Country</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex items-center gap-4 p-6 rounded-3xl shadow-xl bg-white"
        >
          <AiOutlinePhone className="text-[#00838F] text-3xl" />
          <div>
            <p className="font-bold text-[#00838F]">Phone</p>
            <p className="text-gray-600 text-sm">+880 1806-022333</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-4 p-6 rounded-3xl shadow-xl bg-white"
        >
          <AiOutlineMail className="text-[#00838F] text-3xl" />
          <div>
            <p className="font-bold text-[#00838F]">Email</p>
            <p className="text-gray-600 text-sm">pleasurebangladesh25@gmail.com</p>
          </div>
        </motion.div>
      </div>

      {/* Contact Section */}
      <div className="px-4 sm:px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-2xl p-8 h-full"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4 h-full flex flex-col justify-between">
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#00838F] outline-none text-gray-700"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#00838F] outline-none text-gray-700"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#00838F] outline-none text-gray-700"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#00838F] outline-none text-gray-700"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#00838F] text-white font-bold py-4 rounded-xl hover:scale-105 transition-transform duration-300 mt-4"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl overflow-hidden shadow-2xl h-full"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.908995544835!2d90.3917!3d23.7509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7b4f6f3127d%3A0x8a0a0de1c41d3bb2!2sDhaka!5e0!3m2!1sen!2sbd!4v1696112500000!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="border-0"
            title="Our Location"
          ></iframe>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactUsPage;
