import React from "react";
import { motion } from "framer-motion";
import { FaHeartbeat, FaHandsHelping, FaShieldAlt } from "react-icons/fa";
import aboutUs from "../Assets/Icons/aboutus.png"; // Banner image

const AboutUsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen mt-12 px-4 sm:px-6 lg:px-20 py-12 "
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl lg:text-5xl font-extrabold text-gray-800 drop-shadow-md"
        >
          About Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-gray-700 text-justify text-base lg:text-lg mt-4 max-w-3xl mx-auto leading-relaxed"
        >
          We are dedicated to providing innovative health card solutions that empower families to take control of their well-being. Our mission is to make healthcare accessible, affordable, and reliable for everyone.
        </motion.p>
      </div>

      {/* Story Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={aboutUs}
            alt="Our Story"
            className=" w-full h-auto object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-gray-800">Our Journey</h2>
          <p className="text-gray-700 text-justify text-base lg:text-lg leading-relaxed">
            Since our inception, we have focused on bridging the gap between quality healthcare and affordability. By integrating technology with personalized care, we ensure that every family can enjoy health benefits easily.
          </p>
          <p className="text-gray-700 text-justify text-base lg:text-lg leading-relaxed">
            Our health cards offer a range of benefits, including priority access to medical services, exclusive discounts, and seamless healthcare management. We strive to empower every individual to prioritize their health confidently.
          </p>
        </motion.div>
      </div>

      {/* Features Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-[#00838F] to-[#26C6DA] rounded-3xl p-8 text-white shadow-xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
        >
          <FaHeartbeat size={50} className="mb-4" />
          <h3 className="text-xl font-bold mb-2">Premium Healthcare</h3>
          <p>Access top-tier healthcare services and benefits with our health cards designed for your family’s well-being.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="bg-gradient-to-r from-[#26C6DA] to-[#00ACC1] rounded-3xl p-8 text-white shadow-xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
        >
          <FaHandsHelping size={50} className="mb-4" />
          <h3 className="text-xl font-bold mb-2">Support & Guidance</h3>
          <p>Our team is always ready to assist you in accessing healthcare services efficiently and conveniently.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-r from-[#00ACC1] to-[#00838F] rounded-3xl p-8 text-white shadow-xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
        >
          <FaShieldAlt size={50} className="mb-4" />
          <h3 className="text-xl font-bold mb-2">Trusted & Secure</h3>
          <p>Your health and data are safe with us. Our services are reliable, transparent, and secure for every member.</p>
        </motion.div>
      </div>

      {/* Mission Section */}
      <div className="bg-white rounded-3xl shadow-2xl p-12 text-center mb-16">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-[#00838F] mb-4"
        >
          Our Mission
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-700 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          To make healthcare affordable, accessible, and reliable for every family. We empower individuals through innovative solutions, priority services, and dedicated support.
        </motion.p>
      </div>

      {/* CTA Section */}
      <div className="text-center mb-16">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-gray-800 mb-6"
        >
          Get Your Health Card Today
        </motion.h3>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-[#00838F] to-[#26C6DA] text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-transform duration-300"
        >
          Join Now
        </motion.button>
      </div>
    </motion.div>
  );
};

export default AboutUsPage;
