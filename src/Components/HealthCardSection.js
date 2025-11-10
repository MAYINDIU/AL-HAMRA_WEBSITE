import React from "react";
import { FaHeartbeat, FaUserFriends, FaDollarSign, FaHospital } from "react-icons/fa";

const HealthCardSection = () => {
  const benefits = [
    {
      icon: <FaHeartbeat className="text-white text-3xl mb-3" />,
      title: "Comprehensive Coverage",
      description: "Medical consultations, lab tests, and treatments covered for you.",
      gradient: "bg-gradient-to-r from-green-400 to-green-600",
    },
    {
      icon: <FaHospital className="text-white text-3xl mb-3" />,
      title: "Priority Access",
      description: "Skip long queues and get faster appointments at top hospitals.",
      gradient: "bg-gradient-to-r from-blue-400 to-blue-600",
    },
    {
      icon: <FaUserFriends className="text-white text-3xl mb-3" />,
      title: "Family Protection",
      description: "Cards available for individuals, couples, and entire families.",
      gradient: "bg-gradient-to-r from-pink-400 to-pink-600",
    },
    {
      icon: <FaDollarSign className="text-white text-3xl mb-3" />,
      title: "Affordable & Flexible",
      description: "Plans tailored to your needs and budget for peace of mind.",
      gradient: "bg-gradient-to-r from-yellow-400 to-yellow-600",
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-20 py-6 lg:mt-16 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-[#00838F] via-[#00ACC1] to-[#26C6DA] bg-clip-text text-transparent drop-shadow-lg">
          Your Health, Our Priority
        </h2>
        <p className="text-gray-700 text-sm lg:text-base mt-4 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
          Explore our exclusive health cards and enjoy access to top hospitals, priority appointments,
          discounts on treatments, and peace of mind for you and your family.
        </p>
      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((item, index) => (
          <div
            key={index}
            className={`${item.gradient} rounded-3xl p-6 shadow-2xl flex flex-col items-center text-center transition-transform duration-300 hover:scale-105`}
          >
            {item.icon}
            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
            <p className="text-white text-sm leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <button className="px-6 py-3 bg-gradient-to-r from-[#00838F] to-[#26C6DA] text-white rounded-full font-semibold text-lg shadow-lg hover:scale-105 transition-transform duration-300">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default HealthCardSection;
