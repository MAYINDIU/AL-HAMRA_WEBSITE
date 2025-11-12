import React from 'react';
import { 
    FaUserTie, FaBuilding, FaDollarSign, FaHandshake,
    FaChartLine, FaGavel, FaGlobe, FaCogs, FaHandsHelping, 
    FaLightbulb, FaBalanceScale, FaUsers, FaShieldAlt, 
    FaBullseye, FaBriefcase, FaCompass
} from 'react-icons/fa';
import { motion } from 'framer-motion';

// --- THEME COLORS ---
const primaryRed = "#8B0000";
const accentGold = "#FFD700";

// --- ICON MAPPER ---
const IconMap = {
    FaUserTie, FaBuilding, FaDollarSign, FaHandshake,
    FaChartLine, FaGavel, FaGlobe, FaCogs, FaHandsHelping, 
    FaLightbulb, FaBalanceScale, FaUsers, FaShieldAlt, 
    FaBullseye, FaBriefcase, FaCompass
};

// --- DUMMY JSON DATA (16 Directors) ---
const directorsData = [
    { id: 1, name: "Mr. Ahmad Firoz", title: "Chairman", description: "Visionary leader shaping the company’s strategic direction and culture.", imagePlaceholder: "https://randomuser.me/api/portraits/men/1.jpg", roleIconName: "FaUserTie" },
    { id: 2, name: "Mrs. Nabila Khan", title: "Managing Director & CEO", description: "Leads operations, ensures growth and long-term sustainability.", imagePlaceholder: "https://randomuser.me/api/portraits/women/2.jpg", roleIconName: "FaBuilding" },
    { id: 3, name: "Eng. Kamrul Hasan", title: "Director (Technical)", description: "Heads innovation and development in technical projects and infrastructure.", imagePlaceholder: "https://randomuser.me/api/portraits/men/3.jpg", roleIconName: "FaCogs" },
    { id: 4, name: "Mr. Omar Farooq", title: "Director (Finance)", description: "Expert in financial management, planning, and risk assessment.", imagePlaceholder: "https://randomuser.me/api/portraits/men/4.jpg", roleIconName: "FaDollarSign" },
    { id: 5, name: "Ms. Afsana Begum", title: "Independent Director", description: "Provides transparent oversight and governance accountability.", imagePlaceholder: "https://randomuser.me/api/portraits/women/5.jpg", roleIconName: "FaGavel" },
    { id: 6, name: "Dr. Laila Zaman", title: "Non-Executive Director", description: "Ensures corporate ethics and risk management frameworks.", imagePlaceholder: "https://randomuser.me/api/portraits/women/6.jpg", roleIconName: "FaChartLine" },
    { id: 7, name: "Mr. Tanvir Hossain", title: "Executive Director (Marketing)", description: "Drives branding, client acquisition, and market leadership strategies.", imagePlaceholder: "https://randomuser.me/api/portraits/men/7.jpg", roleIconName: "FaGlobe" },
    { id: 8, name: "Mr. Shafiqul Islam", title: "Director (Land Acquisition)", description: "Expert in property development, acquisition, and legal due diligence.", imagePlaceholder: "https://randomuser.me/api/portraits/men/8.jpg", roleIconName: "FaHandshake" },
    { id: 9, name: "Mrs. Sheema Haque", title: "Director (HR & Admin)", description: "Focuses on employee engagement, growth, and organizational efficiency.", imagePlaceholder: "https://randomuser.me/api/portraits/women/9.jpg", roleIconName: "FaHandsHelping" },
    { id: 10, name: "Mr. Emon Chowdhury", title: "Director (Innovation)", description: "Guides the adoption of emerging technologies and digital solutions.", imagePlaceholder: "https://randomuser.me/api/portraits/men/10.jpg", roleIconName: "FaLightbulb" },
    { id: 11, name: "Mr. Rafiq Ahmed", title: "Director (Legal Affairs)", description: "Ensures compliance with corporate and regional legal frameworks.", imagePlaceholder: "https://randomuser.me/api/portraits/men/11.jpg", roleIconName: "FaBalanceScale" },
    { id: 12, name: "Mrs. Rukhsana Rahman", title: "Director (Corporate Relations)", description: "Strengthens strategic partnerships and external corporate liaisons.", imagePlaceholder: "https://randomuser.me/api/portraits/women/12.jpg", roleIconName: "FaUsers" },
    { id: 13, name: "Mr. Farhan Siddiq", title: "Director (Security & Compliance)", description: "Maintains high compliance standards and company-wide safety protocols.", imagePlaceholder: "https://randomuser.me/api/portraits/men/13.jpg", roleIconName: "FaShieldAlt" },
    { id: 14, name: "Dr. Nasim Chowdhury", title: "Director (Strategy & Growth)", description: "Develops future growth plans and corporate transformation initiatives.", imagePlaceholder: "https://randomuser.me/api/portraits/men/14.jpg", roleIconName: "FaBullseye" },
    { id: 15, name: "Mrs. Tahmina Akter", title: "Director (Public Relations)", description: "Leads communication, CSR programs, and corporate reputation building.", imagePlaceholder: "https://randomuser.me/api/portraits/women/15.jpg", roleIconName: "FaBriefcase" },
    { id: 16, name: "Mr. Arif Rahman", title: "Director (Overseas Affairs)", description: "Handles international collaborations and foreign stakeholder relations.", imagePlaceholder: "https://randomuser.me/api/portraits/men/16.jpg", roleIconName: "FaCompass" }
];

// --- FRAMER MOTION VARIANTS ---
const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// --- MAIN COMPONENT ---
const BoardOfDirectors = () => {
    return (
        <section className="py-20 md:py-28 bg-gray-50 font-sans">
            <div className="max-w-7xl mx-auto px-6">

                {/* --- Header --- */}
                <div className="text-center mb-16">
                    <h2 className="text-xl font-semibold uppercase tracking-widest mb-3 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-yellow-300">
                        OUR CORE LEADERSHIP
                    </h2>
                    <h1 
                        className="text-4xl md:text-5xl font-extrabold mb-4"
                        style={{ color: primaryRed }} 
                    >
                        পরিচালনা পর্ষদ (Board of Directors)
                    </h1>
                    <p className="text-lg text-gray-600 max-w-4xl mx-auto pt-4">
                        আমাদের অভিজ্ঞ পরিচালনা পর্ষদের সদস্যরা — কোম্পানির উন্নয়ন, নীতি, ও স্বচ্ছতার প্রতীক।
                    </p>
                </div>

                {/* --- Directors Grid (All 16 Members) --- */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8"
                >
                    {directorsData.map((director) => {
                        const RoleIcon = IconMap[director.roleIconName] || FaUserTie;
                        return (
                            <motion.div
                                key={director.id}
                                variants={cardVariants}
                                className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center text-center transition-all duration-300 transform hover:scale-[1.03] hover:shadow-2xl border-t-4"
                                style={{ borderTopColor: primaryRed }}
                            >
                                {/* --- Image Section --- */}
                                <div className="w-full bg-gray-50 p-3 pt-4 relative">
                                    <img
                                        src={director.imagePlaceholder}
                                        alt={director.name}
                                        className="w-24 h-24 mx-auto rounded-full object-cover shadow-md border-4"
                                        style={{ borderColor: accentGold }}
                                    />
                                    <div 
                                        className="absolute bottom-3 right-1/2 translate-x-1/2 p-2 rounded-full shadow-lg"
                                        style={{ backgroundColor: primaryRed }}
                                    >
                                        <RoleIcon size={14} style={{ color: accentGold }} />
                                    </div>
                                </div>

                                {/* --- Content --- */}
                                <div className="p-4 pt-4 flex flex-col items-center flex-grow">
                                    <h3 className="text-base font-extrabold mb-0 leading-snug" style={{ color: primaryRed }}>
                                        {director.name}
                                    </h3>
                                    <p className="text-xs font-semibold uppercase text-gray-600 mb-2">
                                        {director.title}
                                    </p>
                                    <p className="text-xs text-gray-500 italic px-1 flex-grow">
                                        "{director.description.substring(0, 60)}..."
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default BoardOfDirectors;
