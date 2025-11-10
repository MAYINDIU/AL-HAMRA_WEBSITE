import React from "react";
import { FaBullseye, FaLightbulb } from "react-icons/fa";
import visionBanner from "../Assets/Icons/vission.png"; // Your banner image

const VisionMission = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-20 mt-10">
      <div className="bg-white overflow-hidden  flex flex-col md:flex-row items-center md:items-center transition-all duration-700">
        {/* Left Banner Image */}
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src={visionBanner}
            alt="Vision Banner"
            className="object-cover w-full max-w-full"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 w-full p-8 flex flex-col justify-center gap-6">
          <h2 className="text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-[#00838F] via-[#00ACC1] to-[#26C6DA] bg-clip-text text-transparent drop-shadow-lg">
            Our Vision & Mission
          </h2>
          <p className="text-gray-700 text-sm lg:text-base leading-relaxed drop-shadow-sm">
            We are committed to serving people with long-term health and economic 
            protection, empowering communities through superior services, sustainable 
            growth, and positive contributions to the national economy.
          </p>

          <div className="flex flex-col md:flex-row gap-6 mt-4">
            {/* Vision */}
            <div className="flex-1 bg-gradient-to-r from-[#00838F] to-[#26C6DA] text-white rounded-2xl p-6 shadow-lg flex flex-col items-center text-center transition-all duration-700">
              <FaBullseye className="text-4xl mb-3" />
              <h3 className="text-xl font-bold mb-2">Our Vision</h3>
              <p className="text-sm leading-relaxed">
                Ensure long-term health and economic protection, build high-quality 
                distribution partners, understand the needs of our people, and offer 
                superior services while promoting sustainable growth.
              </p>
            </div>

            {/* Mission */}
            <div className="flex-1 bg-gradient-to-r from-[#26C6DA] to-[#00ACC1] text-white rounded-2xl p-6 shadow-lg flex flex-col items-center text-center transition-all duration-700">
              <FaLightbulb className="text-4xl mb-3" />
              <h3 className="text-xl font-bold mb-2">Our Mission</h3>
              <p className="text-sm leading-relaxed">
                Achieve sustainable business growth with transparency, provide accessible 
                healthcare, financial security, and employment opportunities, 
                while contributing positively to the national economy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
