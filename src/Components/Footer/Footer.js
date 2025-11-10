import React, { useState, useEffect } from 'react';
import { 
    FaHeart, FaUser, FaStar, FaCertificate, FaLink, FaPhone, FaHome, FaEnvelope, 
    FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGooglePlay, FaArrowUp, 
    // New Real Estate-Relevant Icons
    FaBuilding, FaKey, FaHandshake, FaMoneyBillAlt 
} from 'react-icons/fa';
import Logo from "../../Assets/Icons/logo.png";

const Footer = () => {
    const [showScroll, setShowScroll] = useState(false);

    // Track scroll position
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) { // show after 300px scroll
                setShowScroll(true);
            } else {
                setShowScroll(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // --- Color Palette (Maroon/Deep Red - Unchanged) ---
    // Main Background: #A51C30 (Maroon)
    // Secondary Background / Button Base: #C0392B (Indian Red)
    // Hover / Darker Accent: #800000 (Crimson/Dark Red)

    return (
        <footer className="bg-[#A51C30] mt-12 text-white font-[Poppins] relative"> 

            {/* Middle Section: Links */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                
                {/* About (Content updated for Real Estate) */}
                <div>
                    <div className="flex items-center mb-4">
                        <img src={Logo} alt="Logo" className="w-10 h-10 rounded shadow-lg mr-2" />
                        <h6 className="uppercase font-extrabold text-md tracking-wider">AL-HAMRA HOMES LTD.</h6>
                    </div>
                    <p className="text-sm text-justify leading-relaxed mb-4 text-gray-100">
                        Specializing in premium property development and trusted brokerage services across Dhaka. We build homes, not just houses.
                    </p>

                    {/* Social + App Icons (Unchanged) */}
                    <div className="flex space-x-3 mt-2">
                        <a href="#!" className="w-8 h-8 flex items-center justify-center bg-[#C0392B] rounded-full shadow hover:bg-[#800000] hover:scale-110 transition duration-300">
                            <FaFacebookF className="text-white text-lg" />
                        </a>
                        <a href="#!" className="w-8 h-8 flex items-center justify-center bg-[#C0392B] rounded-full shadow hover:bg-[#800000] hover:scale-110 transition duration-300">
                            <FaTwitter className="text-white text-lg" />
                        </a>
                        <a href="#!" className="w-8 h-8 flex items-center justify-center bg-[#C0392B] rounded-full shadow hover:bg-[#800000] hover:scale-110 transition duration-300">
                            <FaInstagram className="text-white text-lg" />
                        </a>
                        <a href="#!" className="w-8 h-8 flex items-center justify-center bg-[#C0392B] rounded-full shadow hover:bg-[#800000] hover:scale-110 transition duration-300">
                            <FaLinkedinIn className="text-white text-lg" />
                        </a>
                        <a href="#!" className="w-8 h-8 flex items-center justify-center bg-[#C0392B] rounded-full shadow hover:bg-[#800000] hover:scale-110 transition duration-300">
                            <FaGooglePlay className="text-white text-lg" />
                        </a>
                    </div>
                </div>

                {/* Services/Properties (Updated for Real Estate) */}
                <div>
                    <h6 className="uppercase font-extrabold text-left mb-4 text-lg border-b border-white pb-1">Our Offerings</h6>
                    <ul className="space-y-2 text-sm">
                        <li className="flex items-center">
                            <FaBuilding className="mr-2 text-[#C0392B]" /> <a href="#!" className="hover:underline">Apartment Sales</a>
                        </li>
                        <li className="flex items-center">
                            <FaKey className="mr-2 text-[#C0392B]" /> <a href="#!" className="hover:underline">Property Management</a>
                        </li>
                        <li className="flex items-center">
                            <FaHandshake className="mr-2 text-[#C0392B]" /> <a href="#!" className="hover:underline">Land Development</a>
                        </li>
                        <li className="flex items-center">
                            <FaMoneyBillAlt className="mr-2 text-[#C0392B]" /> <a href="#!" className="hover:underline">Financing Support</a>
                        </li>
                    </ul>
                </div>

                {/* Useful Links (Updated for Real Estate) */}
                <div>
                    <h6 className="uppercase font-extrabold text-left mb-4 text-lg border-b border-white pb-1">Quick Access</h6>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-start">
                            <FaLink className="mt-1 mr-2 text-[#C0392B]" /> 
                            <a href="#!" className="hover:underline">Current Projects</a>
                        </li>
                        <li className="flex items-start">
                            <FaLink className="mt-1 mr-2 text-[#C0392B]" /> 
                            <a href="#!" className="hover:underline">Careers</a>
                        </li>
                        <li className="flex items-start">
                            <FaLink className="mt-1 mr-2 text-[#C0392B]" /> 
                            <a href="#!" className="hover:underline">Client Testimonials</a>
                        </li>
                        <li className="flex items-start">
                            <FaLink className="mt-1 mr-2 text-[#C0392B]" /> 
                            <a href="#!" className="hover:underline">Terms & Privacy</a>
                        </li>
                    </ul>
                </div>

                {/* Contact (Details updated, icons changed) */}
                <div>
                    <h6 className="uppercase font-extrabold text-left mb-4 text-lg border-b border-white pb-1">Get In Touch</h6>
                    <ul className="space-y-2 text-sm mb-4">
                        <li className="flex items-center"><FaHome className="mr-2 text-[#C0392B]" /> 78/A Gulshan Avenue, Dhaka</li>
                        <li className="flex items-center"><FaEnvelope className="mr-2 text-[#C0392B]" /> info@alhamrahomes.com</li>
                        <li className="flex items-center"><FaPhone className="mr-2 text-[#C0392B]" /> +880 9600-123456</li>
                    </ul>
                </div>

            </div>

            {/* Bottom Section (Copyright updated) */}
            <div className="bg-[#C0392B] text-center py-6 px-6 lg:px-12 text-sm">
                <span>©2025 AL-HAMRA HOMES LTD. All Rights Reserved.</span>
            </div>

            {/* Floating Scroll-to-top Button (Unchanged) */}
            {showScroll && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 w-12 h-12 flex items-center justify-center bg-[#C0392B] rounded shadow hover:bg-[#800000] hover:scale-110 transition transform duration-300 z-50"
                >
                    <FaArrowUp className="text-white text-lg" />
                </button>
            )}

        </footer>
    );
};

export default Footer;