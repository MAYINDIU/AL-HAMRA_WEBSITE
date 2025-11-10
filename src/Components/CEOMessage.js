import React from "react";
import { motion } from "framer-motion";
import ceoBanner from "../Assets/Icons/ceo.jpg"; // Full-width banner
import ceoPhoto from "../Assets/Icons/ceoo.png"; // CEO photo

const CEOMessage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen  mt-12 px-0 sm:px-0 lg:px-0 py-0"
    >
      {/* Banner Section */}
   <div className="relative w-full mb-12">
  <img
    src={ceoBanner}
    alt="CEO Banner"
    className="w-full h-64 object-cover"
  />
  <div className="absolute inset-0 flex items-center justify-center bg-black/50">
    <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
      {/* Optional Title */}
    </h1>
  </div>
</div>


      {/* CEO Message Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 py-12 lg:grid-cols-3 gap-8 items-start">
        {/* Left - CEO Photo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="col-span-1 flex flex-col items-center lg:items-start"
        >
          <img
            src={ceoPhoto}
            alt="CEO"
            className="w-72 h-72 object-cover rounded-lg shadow-lg mb-4 transform transition-transform duration-300 hover:scale-105"
          />
        <div className="text-center space-y-1">
  <h3 className="text-xl font-bold drop-shadow-lg text-gray-800">
    SAYED MASKURUL HAQUE
  </h3>
  <h6 className="text-gray-600">(CEO)</h6>
  <h6 className="text-[#0097A7]">AL-HAMRA HOMES LTD.</h6>
</div>

        </motion.div>

        {/* Right - Message */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="col-span-2 space-y-6"
        >
          <h2 className="text-2xl md:text-3xl text-left font-semibold text-[#0097A7]">
            Dear Customers and Partners,
          </h2>
          <p className="text-gray-700 text-justify text-base lg:text-lg leading-relaxed">
            At AL-HAMRA HOMES LTD., we are committed to delivering innovative
            health card solutions that provide your family with easy access to
            quality healthcare services. Our goal is to make every household benefit
            from affordable and reliable health coverage.
          </p>
          <p className="text-gray-700 text-justify text-base lg:text-lg leading-relaxed">
            Our health cards are designed to offer maximum value, including priority
            medical services, exclusive discounts, and seamless support for every
            member. We believe in creating convenience, security, and trust for all
            our customers.
          </p>
          <p className="text-gray-700 text-justify text-base lg:text-lg leading-relaxed">
            By choosing our health cards, you join a growing community of satisfied
            families who enjoy peace of mind knowing their health is a priority.
            AL-HAMRA HOMES LTD. continues to innovate, ensuring our services
            remain accessible and beneficial for everyone.
          </p>
          <p className="text-gray-700 text-justify text-base lg:text-lg leading-relaxed">
            We are constantly exploring new ways to enhance our offerings, expand
            our reach, and provide unparalleled support to our clients. Your
            satisfaction and well-being remain at the core of everything we do.
          </p>
        </motion.div>
      </div>

     
    </motion.div>
  );
};

export default CEOMessage;
