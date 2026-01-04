import React, { useState, useEffect } from 'react';
import { 
    FaImage, 
    FaTimes,
    FaHome, 
    FaExpand, 
    FaChevronLeft, 
    FaChevronRight, 
    FaMapPin // Added for the banner title
} from 'react-icons/fa'; 
import { motion } from "framer-motion";

// --- LOCAL IMAGE IMPORTS ---
import image1 from '../../Assets/Projects/1.jpg';
import image2 from '../../Assets/Projects/2.jpg';
import image3 from '../../Assets/Projects/3.jpg';
import image4 from '../../Assets/Projects/4.jpg';
import image5 from '../../Assets/Projects/5.jpg'; 
import image6 from '../../Assets/Projects/6.jpg'; // Assuming the path is correct

// Define project data and the full image list
const project = {
    name: "Eco-Vista Residential Tower",
    images: [
        { src: image1, alt: 'Premium Residential Plot View' },
        { src: image2, alt: 'Project Site Development Work' },
        { src: image3, alt: 'Main Road Access to Project' },
        { src: image4, alt: 'Aerial View of the Tower' },
        { src: image5, alt: 'Landscaping Design' },
        { src: image6, alt: 'Gate and Security Entrance Mockup' },
    ],
};
    
const primaryNavy = "#172554"; // ডিপ নেভি ব্লু

// =====================================================================
// 1. Breadcrumb Component (Unchanged)
// =====================================================================

const Breadcrumbs = ({ crumbs }) => (
    <nav className="flex mb-8 text-sm p-3 rounded-lg shadow-md 
                    bg-gradient-to-r from-red-50 to-red-100" 
         aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
            {crumbs.map((crumb, index) => (
                <li key={index} className="inline-flex items-center">
                    {index > 0 && (
                        <svg className="w-3 h-3 text-red-300 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                        </svg>
                    )}
                    
                    {index === crumbs.length - 1 ? (
                        <span className="text-red-700 font-semibold md:ml-2">
                            {crumb.icon && <crumb.icon className="w-4 h-4 mr-1 inline-block" />}
                            {crumb.label}
                        </span>
                    ) : (
                        <a href={crumb.href} className="inline-flex items-center text-gray-700 hover:text-red-600 transition-colors">
                            {crumb.icon && <crumb.icon className="w-4 h-4 mr-1 inline-block" />}
                            {crumb.label}
                        </a>
                    )}
                </li>
            ))}
        </ol>
    </nav>
);

// =====================================================================
// 2. Image Modal Component (Unchanged)
// =====================================================================

const ImageModal = ({ images, currentIndex, onClose, onPrev, onNext }) => {
    if (!images || images.length === 0) return null;

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={onClose} 
        >
            <div 
                className="relative max-w-6xl w-full h-full max-h-[90vh]"
                onClick={e => e.stopPropagation()} 
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white bg-red-600 hover:bg-red-700 p-2 rounded-full z-20 transition-colors opacity-80"
                    aria-label="Close image gallery"
                >
                    <FaTimes size={24} />
                </button>

                {/* Main Image Display */}
                <img
                    src={images[currentIndex].src} 
                    alt={images[currentIndex].alt}
                    className="object-contain w-full h-full rounded-lg shadow-2xl"
                />

                {/* Navigation Arrows */}
                <button
                    onClick={onPrev}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 hover:bg-opacity-75 p-3 rounded-full transition-colors z-10"
                    aria-label="Previous image"
                >
                    <FaChevronLeft size={30} />
                </button>
                <button
                    onClick={onNext}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 hover:bg-opacity-75 p-3 rounded-full transition-colors z-10"
                    aria-label="Next image"
                >
                    <FaChevronRight size={30} />
                </button>

                {/* Image Counter (Optional) */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-3 py-1 rounded-full text-lg z-10">
                    {currentIndex + 1} / {images.length}
                </div>
            </div>
        </div>
    );
};


// =====================================================================
// 3. Main Project Location Component 
// =====================================================================

const ProjectLocationMap = () => {
    
    const breadcrumbs = [
        { label: 'Home', href: '/', icon: FaHome },
        { label: 'Projects', href: '/projects' },
        { label: project.name, href: '/projects/eco-vista' },
        { label: 'Gallery', href: '#' } 
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false); 

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => 
            (prevIndex + 1) % project.images.length
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => 
            (prevIndex - 1 + project.images.length) % project.images.length
        );
    };

    const openModal = (index) => {
        setCurrentImageIndex(index);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden'; 
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'auto';
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (isModalOpen) {
                if (event.key === 'Escape') {
                    closeModal();
                } else if (event.key === 'ArrowRight') {
                    nextImage();
                } else if (event.key === 'ArrowLeft') {
                    prevImage();
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isModalOpen, nextImage, prevImage]); 

    return (
        <section className="bg-white font-sans">
            
            {/* ---------------------------------------------------------------------------------- */}
            {/* 1. Full-Width Banner Section (Top) - Custom Gradient BG and Title */}
            {/* Note: Moved outside the main max-width container for full width */}
            {/* ---------------------------------------------------------------------------------- */}
            <div className="relative w-full h-72 md:h-72 shadow-2xl">
                {/* Full-width gradient using the primaryNavy color and a complementary blue */}
                <div 
                    // Using primaryNavy via inline style for safety since it's a variable outside Tailwind config
                    style={{ background: `linear-gradient(to right, ${primaryNavy}, #3B82F6)` }} 
                    className={`absolute inset-0 flex flex-col items-center justify-center p-4`} 
                >
                    <FaMapPin className="text-white text-5xl mb-4 drop-shadow-lg" /> 
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-white text-4xl md:text-5xl font-extrabold text-center tracking-wider drop-shadow-2xl" 
                    >
                        Project Locations
                    </motion.h2>
                </div>
            </div>
            
            {/* Main Content Container (Pads the rest of the content) */}
            <div className="py-12 md:py-16 max-w-full mx-auto px-4 sm:px-6 lg:px-48">
     
                
                {/* ---------------------------------------------------------------------------------- */}
                {/* --- Part 2: Grid with Zoom Effect, NO Dark Overlay --- */}
                {/* ---------------------------------------------------------------------------------- */}
                <div className="lg:col-span-3">
                    <div className="bg-gray-100 rounded-2xl shadow-xl p-6">
                        <h2 className="flex items-center text-2xl font-bold mb-6 text-red-700">
                            <FaImage className="text-red-700 mr-3" /> All Property Views ({project.images.length} Photos)
                        </h2>
                        
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            {project.images.map((image, index) => (
                                <div 
                                    key={index}
                                    className="relative overflow-hidden cursor-pointer aspect-video group rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl"
                                    onClick={() => openModal(index)} 
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                                    />

                                    {/* Caption and Expand Icon appear on hover, without darkening the image */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center transition duration-300 bg-transparent group-hover:bg-black group-hover:bg-opacity-20 opacity-0 group-hover:opacity-100">
                                        <FaExpand className="text-white text-4xl p-2 rounded-full border-2 border-white mb-2"/>
                                        <p className="text-white text-sm font-medium px-4 text-center">{image.alt}</p>
                                    </div>
                                    
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            {/* --- Image Popup Modal --- */}
            {isModalOpen && (
                <ImageModal
                    images={project.images}
                    currentIndex={currentImageIndex}
                    onClose={closeModal}
                    onPrev={prevImage}
                    onNext={nextImage}
                />
            )}
        </section>
    );
};

export default ProjectLocationMap;