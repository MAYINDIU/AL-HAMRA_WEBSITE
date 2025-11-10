import React from "react";
import { motion } from "framer-motion";
import chairmanBanner from "../Assets/Icons/chairman_banner.png"; // Banner image
import chairmanPhoto from "../Assets/Icons/chairman.png"; // Chairman photo

const ChairmanMessage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen mt-12 px-0 py-0"
    >
      {/* Banner Section */}
      <div className="relative w-full mb-12">
        <img
          src={chairmanBanner}
          alt="Chairman Banner"
          className="w-full h-auto object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
          
          </h1>
        </div>
      </div>

      {/* Chairman Message Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left - Chairman Photo with Name and Title */}
   {/* Left - Chairman Photo with Name, Title, Company */}
            <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="col-span-1 flex flex-col items-center text-center"
            >
        <img
  src={chairmanPhoto}
  alt="Chairman"
  className="w-72 h-72 object-cover rounded-lg shadow-lg mb-4 
             transform transition-transform duration-300 hover:scale-105"
/>

  <h3 className="text-xl font-bold drop-shadow-lg text-gray-800">
  GM IMAM HOSSAIN EMON
</h3>


            <h6 className="text-gray-600">(Chairman)</h6>
            <h6 className="text-[#0097A7]">AL-HAMRA HOMES LTD.</h6>
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
  At AL-HAMRA HOMES LTD., we are committed to delivering innovative health card solutions that provide your family with easy access to quality healthcare services. Our goal is to make every household benefit from affordable and reliable health coverage.
</p>
<p className="text-gray-700 text-justify text-base lg:text-lg leading-relaxed">
  Our health cards are designed to offer maximum value, including priority medical services, exclusive discounts, and seamless support for every member. We believe in creating convenience, security, and trust for all our customers.
</p>
<p className="text-gray-700 text-justify text-base lg:text-lg leading-relaxed">
  By choosing our health cards, you join a growing community of satisfied families who enjoy peace of mind knowing their health is a priority. AL-HAMRA HOMES LTD. continues to innovate, ensuring our services remain accessible and beneficial for everyone.
</p>
<p className="text-gray-700 text-justify text-base lg:text-lg leading-relaxed">
  Our commitment extends beyond providing health coverage. We continuously seek to educate our members on preventive care, wellness tips, and the latest developments in healthcare. This empowers our customers to make informed decisions about their health and lifestyle.
</p>
<p className="text-gray-700 text-justify text-base lg:text-lg leading-relaxed">
  We are proud to collaborate with leading hospitals, clinics, and service providers to bring you the best possible healthcare experience. Our partnerships ensure that our members receive priority attention, high-quality service, and exceptional value with every interaction.
</p>
<p className="text-gray-700 text-justify text-base lg:text-lg leading-relaxed">
  At AL-HAMRA HOMES LTD., we also take pride in our customer support network. Our dedicated team is always ready to assist, guide, and resolve any queries, making sure every member feels valued and supported throughout their journey with us.
</p>
<p className="text-gray-700 text-justify text-base lg:text-lg leading-relaxed">
  We invite you to experience the benefits of our health card services and become a part of our ever-growing family. Together, we can prioritize health, promote wellness, and create a brighter, healthier future for all.
</p>


        </motion.div>
      </div>

   
    </motion.div>
  );
};

export default ChairmanMessage;
