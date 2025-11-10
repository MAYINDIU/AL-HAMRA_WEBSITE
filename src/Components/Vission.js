import React from "react";
import { motion } from "framer-motion";
import visionIcon from "../Assets/Icons/vsn.png";
import missionIcon from "../Assets/Icons/msn.png";
import bannerImage from "../Assets/Icons/vission.png"; // Banner image

const VisionMission = () => {
  return (
    <div className="bg-gray-50">
      {/* Banner */}
<div className="relative w-full h-72 md:h-72 lg:h-72">
  <img
    src={bannerImage}
    alt="Vision & Mission Banner"
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-white text-3xl md:text-5xl font-bold text-center"
    >
     
    </motion.h1>
  </div>
</div>


      {/* Content Section */}
      <div className="max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded shadow-2xl p-10 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
        >
          <img src={visionIcon} alt="Vision" className="w-full h-48 mb-1" />
     
          <p className="text-gray-700 text-justify text-lg leading-relaxed mb-4">
            At AL-HAMRA HOMES LTD., our vision is to become the most trusted
            provider of health cards in the region. We aim to make quality healthcare
            accessible and affordable for every family, empowering households with
            reliable solutions for all their medical needs.
          </p>
          <p className="text-gray-700 text-justify text-lg leading-relaxed">
            By integrating technology, personalized service, and innovative programs,
            we strive to create a healthcare ecosystem that benefits not only our
            customers but also the wider community.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded shadow-2xl p-10 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
        >
          <img src={missionIcon} alt="Mission" className="w-full h-48 mb-1" />
   
          <p className="text-gray-700 text-justify text-lg leading-relaxed mb-4">
            Our mission is to empower every family with innovative health card solutions
            that provide priority access to medical services, exclusive discounts,
            and seamless healthcare management. We focus on convenience, trust, and
            transparency in all our operations.
          </p>
          <p className="text-gray-700 text-lg  text-justify  leading-relaxed mb-4">
            By choosing AL-HAMRA HOMES LTD., households join a growing community
            of satisfied clients who enjoy peace of mind knowing their health is a priority.
          </p>
          <p className="text-gray-700 text-lg  text-justify  leading-relaxed">
            We continually innovate to ensure that our services remain accessible, effective,
            and beneficial for all, creating a lasting impact on families’ well-being.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default VisionMission;
