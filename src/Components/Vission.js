import React from "react";
import { motion } from "framer-motion";
// আইকন ইমপোর্ট আপনার ফাইল পাথ অনুযায়ী একই আছে
import visionIcon from "../Assets/Icons/vsn.png"; 
import missionIcon from "../Assets/Icons/msn.png"; 
import { FaEye, FaFlag } from 'react-icons/fa'; 

// ব্রেডক্রাম্বস কম্পোনেন্ট - ডার্ক ব্যাকগ্রাউন্ডের জন্য অপটিমাইজড
const Breadcrumbs = ({ crumbs }) => (
    <nav className="text-sm font-medium mb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="list-none p-0 inline-flex">
            {crumbs.map((crumb, index) => {
                const isActive = index === crumbs.length - 1;
                
                // সক্রিয় আইটেমের জন্য গোল্ডেন কালার
                const activeClasses = 'font-bold text-amber-500'; 
                
                return (
                    <li key={index} className="flex items-center">
                        <a 
                            href={crumb.href} 
                            // টেক্সট কালার হালকা করা হয়েছে
                            className={`transition-colors ${
                                isActive 
                                    ? activeClasses 
                                    : 'text-gray-300 hover:text-white' 
                            }`}
                        >
                            {crumb.label}
                        </a>
                        {index < crumbs.length - 1 && (
                            <span className="mx-2 text-gray-400">/</span>
                        )}
                    </li>
                );
            })}
        </ol>
    </nav>
);


const VisionMissionBanglaCity = () => { // কম্পোনেন্টের নাম পরিবর্তন করা হয়েছে
    
    const primaryNavy = "#172554"; // ডিপ নেভি ব্লু
    const accentAmber = "#F59E0B"; 
    const secondaryGreen = "#10B981"; 

    // ব্রেডক্রাম্বস ডেটা
    const breadcrumbsData = [
        { label: "হোম", href: "/" },
        { label: "আমাদের সম্পর্কে", href: "/about" },
        { label: "মিশন ও ভিশন", href: "/about/vission" },
    ];

    return (
        <div className="bg-white">


        {/* 1. Banner Section (Top) - Gradient BG, No Image */}
        <div className="relative w-full h-72 md:h-72">
            {/* ডিপ ডার্ক গ্রেডিয়েন্ট ব্যাকগ্রাউন্ড - কালার সামান্য আপডেট করা হলো */}
            <div 
                className={`absolute inset-0 bg-gradient-to-r from-[${primaryNavy}] to-[#1E40AF] flex flex-col items-center justify-center p-4`} 
            >
                {/* ব্রেডক্রাম্বস */}
                <div className="absolute top-0 left-0 w-full pt-8">
                    <Breadcrumbs crumbs={breadcrumbsData} />
                </div>

                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    // টেক্সট শ্যাডো ধরে রাখা হলো 
                    className="text-white text-4xl md:text-5xl font-extrabold text-center tracking-wider drop-shadow-2xl mt-12" 
                >
                    আমাদের মিশন ও ভিশন
                </motion.h2>
            </div>
        </div>

            {/* 2. Content Section (Cards) */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 py-24 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                
                    {/* --- Vision Card (Blue/Amber Accent) --- */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-white rounded-2xl shadow-3xl p-10 lg:p-12 flex flex-col items-center text-center border-b-8 border-amber-500 transform hover:-translate-y-2 transition-all duration-500 ease-in-out" 
                    >
                        <div className="p-4 rounded-full bg-amber-500/10 mb-6 border-4 border-amber-500/30">
                            <FaEye size={40} className={`text-amber-600`} /> 
                        </div>
                        
                        <h2 className="text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#172554] to-amber-600">
                            আমাদের ভিশন
                        </h2>
                        
                        <p className="text-gray-700 text-justify text-lg leading-loose mb-4">
                            বাংলা সিটির ভিশন হলো বাংলাদেশের আবাসন খাতে **গ্রাহক সেবার মানদণ্ড** হিসেবে নিজেদের প্রতিষ্ঠা করা। আমরা স্বপ্ন দেখি পরিবেশবান্ধব আধুনিক নগরী গড়ে তোলার, যা বিনিয়োগকারীদের জন্য **নিরাপদ ও উচ্চ-লাভজনক** ভবিষ্যতের নিশ্চয়তা দেবে।
                        </p>
                        <p className="text-gray-600 text-justify text-base leading-loose italic border-l-4 border-amber-500 pl-4">
                            "কেবল জমি নয়, আমরা সরবরাহ করি **স্থায়ী ও শান্তিপূর্ণ জীবনযাত্রা** এবং উচ্চমানের সেবা।"
                        </p>
                    </motion.div>

                    {/* --- Mission Card (Blue/Green Accent) --- */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-white rounded-2xl shadow-3xl p-10 lg:p-12 flex flex-col items-center text-center border-b-8 border-[#10B981] transform hover:-translate-y-2 transition-all duration-500 ease-in-out" 
                    >
                        <div className="p-4 rounded-full bg-emerald-500/10 mb-6 border-4 border-emerald-500/30">
                            <FaFlag size={40} className={`text-[#10B981]`} /> 
                        </div>
                        
                        <h2 className="text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#172554] to-emerald-600">
                            আমাদের মিশন
                        </h2>
                        
                        <p className="text-gray-700 text-justify text-lg leading-loose mb-4">
                            আমাদের মিশন হলো **স্বচ্ছতা ও পেশাদারিত্বের** সাথে প্রতিটি গ্রাহককে সর্বোচ্চ মানের সেবা প্রদান করা। **বাংলা সিটি গ্রাহক সেবায় বদ্ধপরিকর**, তাই আমরা প্রতিশ্রুতিবদ্ধ যে প্রতিটি প্লট কেনা থেকে শুরু করে হস্তান্তর পর্যন্ত সম্পূর্ণ প্রক্রিয়াটিকে **সহজ, নিরাপদ এবং ঝামেলামুক্ত** করে তোলা।
                        </p>
                        <p className="text-gray-700 text-justify text-lg leading-loose">
                            আমরা প্রতিনিয়ত গ্রাহকের আস্থা ও সন্তুষ্টিকে সর্বোচ্চ অগ্রাধিকার দিই, এবং পরিবেশবান্ধব উন্নত নগরায়ন নিশ্চিত করার জন্য উদ্ভাবনী পদ্ধতি গ্রহণ করি।
                        </p>
                    </motion.div>
                </div>
            </div>
            
            {/* 3. Call to Action or Footer Info */}
            <div className="py-12 bg-[#172554] text-center shadow-inner">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-amber-500 text-2xl font-extrabold tracking-wider"
                >
                    বাংলা সিটি: Build Your Future with Trust and Quality.
                </motion.p>
            </div>
        </div>
    );
};

export default VisionMissionBanglaCity;