import React from 'react';
import { 
    FaMapMarkerAlt, 
    FaEnvelope, 
    FaPhone, 
    FaClock, 
    FaFileAlt, 
    FaDollarSign,
    FaCheckCircle 
} from 'react-icons/fa';
import { motion } from 'framer-motion';

// --- THEME CONSTANTS ---
const primaryRed = "#8B0000"; // Deep Red (Primary Color)
const accentGold = "#FFD700"; // Gold / Yellow (Accent Color)
const darkerRed = "#6A0000"; // Slightly darker red for gradient end

// Animation variants
const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const containerVariants = {
    visible: { transition: { staggerChildren: 0.1 } },
};

const ContactUs = () => {
    // Contact Info Data
    const contactInfo = [
        { icon: FaMapMarkerAlt, label: "ঠিকানা", text: "গাউছে-পাক ভবন, লিফট-৬, ২৮জি/১, টয়নবি সার্কুলার রোড, মতিঝিল বানিজ্যিক এলাকা, ঢাকা-১০০০" },
        { icon: FaPhone, label: "ফোন নম্বর", text: "+8802226639864", href: "tel:+8802226639864" },
        { icon: FaEnvelope, label: "ইমেইল", text: "alhamra@gmail.com", href: "mailto:alhamra@gmail.com" },
        { icon: FaClock, label: "অফিস সময়সূচি", text: "সকাল ১০:০০ - সন্ধ্যা ৭:০০ (শনি - বৃহস্পতি)" },
    ];
    
    // Project Action Links
    const actionLinks = [
        { href: "/project-layout", label: "PROJECT LAYOUT", icon: FaCheckCircle, color: primaryRed, border: accentGold, iconColor: accentGold },
        { href: "/price-list", label: "ASK FOR PRICE LIST", icon: FaDollarSign, color: accentGold, border: primaryRed, textColor: primaryRed },
        { href: "/brochure-download", label: "BROCHURE", icon: FaFileAlt, color: primaryRed, border: accentGold, iconColor: accentGold },
    ];


    return (
        <section className="py-24 md:py-36 bg-gray-100 font-sans"> {/* Lighter background for better material contrast */}
            <div className="max-w-7xl mx-auto px-6">
                
                {/* --- 1. Header Section (Gradient Background Strip) --- */}
                <motion.div 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, amount: 0.5 }}
                    variants={fadeIn} 
                    className="mb-16 text-left p-8 md:p-12 rounded-xl overflow-hidden relative"
                    style={{ 
                        background: `linear-gradient(to right, ${primaryRed}, ${darkerRed})`,
                        boxShadow: '0 10px 20px rgba(139, 0, 0, 0.4)' // Stronger shadow for the header
                    }}
                >
                    <h2 
                        className="text-xl font-semibold uppercase tracking-widest mb-3 text-white relative z-10"
                    >
                        আমাদের সাথে যোগাযোগ করুন
                    </h2>
                    <h1 
                        className="text-4xl md:text-5xl font-extrabold mb-4 text-white relative z-10"
                    >
                        আপনার প্রয়োজন জানান, আমরা প্রস্তুত!
                    </h1>
                    <p className="text-lg max-w-4xl text-gray-200 relative z-10">
                        আমাদের দক্ষ কাস্টমার কেয়ার খুব দ্রুত আপনার সাথে যোগাযোগ করবে, আপনি শুধুমাত্র আপনার সমস্যা মেসেজে উপস্থাপন করুন।
                    </p>
                </motion.div>

                {/* --- 2. Main Grid: Info | Map & Form --- */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-12"
                >
                    
                    {/* --- A. Contact Info Card (Left Side: 4/12) --- */}
                    <motion.div 
                        variants={fadeIn}
                        className="lg:col-span-4 bg-white p-8 rounded-xl shadow-2xl h-full border-t-8 text-left transition duration-300 hover:shadow-3xl" // Shadow and hover added
                        style={{ borderTopColor: primaryRed }}
                    >
                        <h2 
                            className="text-3xl font-extrabold mb-8 pb-3 border-b-2"
                            style={{ color: primaryRed, borderBottomColor: accentGold }}
                        >
                            প্রধান কার্যালয় (Head Office)
                        </h2>
                        
                        {/* Information List with Hover Effect */}
                        <div className="space-y-6">
                            {contactInfo.map((item, index) => (
                                <div 
                                    key={index} 
                                    className="flex items-start p-2 rounded-lg transition duration-200 hover:bg-gray-50 cursor-pointer" // Hover effect added to list items
                                >
                                    <item.icon size={24} style={{ color: primaryRed }} className="mt-1 flex-shrink-0" /> {/* Larger Icon */}
                                    <div className="ml-4 text-left">
                                        <p className="text-sm font-semibold text-gray-500 uppercase">{item.label}</p> {/* Label uppercase */}
                                        {item.href ? (
                                            <a href={item.href} className="text-md font-medium text-gray-800 hover:text-red-700 transition">
                                                {item.text}
                                            </a>
                                        ) : (
                                            <p className="text-md font-medium text-gray-800 text-left">{item.text}</p> 
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    
                    {/* --- B. Map & Form Container (Right Side: 8/12) --- */}
                    <motion.div 
                        variants={fadeIn} 
                        className="lg:col-span-8"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
                            
                            {/* B1. Google Location Map (Col 1) */}
                            <motion.div 
                                variants={fadeIn} 
                                className="md:col-span-1 h-80 md:h-full rounded-xl shadow-2xl overflow-hidden border-4"
                                style={{borderColor: primaryRed}}
                            >
                                {/* --- ACTUAL GOOGLE MAP EMBED --- */}
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116834.0094406249!2d90.35414603681403!3d23.78077771746973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4e13!3m3!1m2!1s0x3755b8801f11a4ed%3A0xc3af34c1143a4dfc!2sMotijheel%2C%20Dhaka%201203!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd" 
                                    width="100%" 
                                    height="100%" 
                                    style={{ border: 0 }} 
                                    allowFullScreen="" 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Office Location Map"
                                ></iframe>
                            </motion.div>
                            
                            {/* B2. Contact Form (Col 2) */}
                            <motion.div 
                                variants={fadeIn}
                                className="md:col-span-1 bg-white p-8 rounded-xl shadow-2xl border-t-4" // Increased padding
                                style={{ borderTopColor: accentGold }}
                            >
                                <h2 
                                    className="text-3xl font-extrabold mb-8 pb-3 text-left"
                                    style={{ color: primaryRed }}
                                >
                                    বার্তা পাঠান
                                </h2>
                                
                                {/* Dummy Contact Form */}
                                <form className="space-y-6"> {/* Increased spacing */}
                                    {['Your Name', 'Email Address', 'Phone Number'].map((label, index) => (
                                        <div key={index}>
                                            <label htmlFor={label.toLowerCase().replace(' ', '-')} className="block text-sm font-medium text-gray-700 text-left">{label}</label>
                                            <input 
                                                type={label.includes('Email') ? 'email' : label.includes('Phone') ? 'tel' : 'text'} 
                                                id={label.toLowerCase().replace(' ', '-')} 
                                                name={label.toLowerCase().replace(' ', '-')} 
                                                placeholder={label.includes('Name') ? 'আপনার পুরো নাম' : label.includes('Email') ? 'আপনার ইমেইল ঠিকানা' : 'ফোন নম্বর'} 
                                                required 
                                                className="mt-1 block w-full px-4 py-3 border-b-2 border-gray-300 focus:border-red-500 transition focus:ring-0 text-left" // Increased py
                                            />
                                        </div>
                                    ))}
                                    
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 text-left">Your Message</label>
                                        <textarea id="message" name="message" rows="3" placeholder="আপনার বার্তা বা প্রশ্ন" required className="mt-1 block w-full px-4 py-3 border-b-2 border-gray-300 focus:border-red-500 transition focus:ring-0 text-left"></textarea>
                                    </div>
                                    
                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="w-full flex items-center justify-center py-3 px-4 rounded-lg shadow-lg text-xl font-bold text-white transition duration-300 transform hover:scale-[1.01] hover:shadow-2xl"
                                        style={{ backgroundColor: primaryRed }}
                                    >
                                        Submit Message
                                    </button>
                                </form>
                            </motion.div>
                        </div>
                    </motion.div>
                    
                </motion.div>
                
                {/* --- 3. Project Action Buttons (Bottom Section) --- */}
               {/* --- 3. Project Action Buttons (Bottom Section - Centralized and Enhanced) --- */}
<motion.div 
    variants={fadeIn} 
    initial="hidden" 
    whileInView="visible" 
    viewport={{ once: true, amount: 0.5 }}
    className="mt-24 pt-12 border-t text-center" 
    style={{ borderColor: primaryRed }}
>
    <h3 className="text-3xl font-extrabold mb-10" style={{ color: primaryRed }}>
        প্রকল্প সংক্রান্ত দ্রুত পদক্ষেপ
    </h3>
    <div className="flex flex-col sm:flex-row justify-center gap-8"> {/* Increased gap to 8 */}
        {actionLinks.map((link, index) => {
            const Icon = link.icon;
            // Determine primary color button for stronger styling (e.g., PROJECT LAYOUT)
            const isPrimary = link.color === primaryRed; 

            return (
                <a 
                    key={index}
                    href={link.href} 
                    className={`
                        flex items-center justify-center px-10 py-4 rounded-full 
                        text-lg font-extrabold shadow-xl transition duration-300 
                        transform hover:scale-[1.02] hover:shadow-2xl 
                        relative group
                    `}
                    style={{ 
                        backgroundColor: link.color, 
                        border: `3px solid ${link.border}`, // Thicker border
                        color: link.textColor || 'white'
                    }}
                >
                    {/* Icon and Text */}
                    <Icon className="mr-3" style={{ color: link.iconColor || 'white' }} /> {link.label}
                    
                    {/* Subtle Divider (Optional: Adds an extra nice touch) */}
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                        style={{ backgroundColor: isPrimary ? accentGold : primaryRed }}
                    ></div>
                </a>
            );
        })}
    </div>
</motion.div>
                
            </div>
        </section>
    );
};

export default ContactUs;