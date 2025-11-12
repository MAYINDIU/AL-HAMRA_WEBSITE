import React, { useState } from 'react';
// Imports remain the same
// এখানে ধরে নেওয়া হচ্ছে আপনার ইমেজ ইমপোর্টগুলো সঠিক আছে।
import Image1 from '../../Assets/Galary/1.jpg';
import Image2 from '../../Assets/Galary/2.jpg';
import Image3 from '../../Assets/Galary/3.jpg';
import Image4 from '../../Assets/Galary/4.jpg';
import Image5 from '../../Assets/Galary/5.jpg';
import Image6 from '../../Assets/Galary/6.jpg';
import Image7 from '../../Assets/Galary/5.jpg'; // ডুপ্লিকেট ইমেজ রিপ্লেস করা উচিত
import Image8 from '../../Assets/Galary/6.jpg'; // ডুপ্লিকেট ইমেজ রিপ্লেস করা উচিত
import { FaExpand, FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa'; // নতুন আইকন ইমপোর্ট

const galleryImages = [
    { id: 1, src: Image1, alt: 'Premium Residential Plot View' },
    { id: 2, src: Image2, alt: 'Project Site Development Work' },
    { id: 3, src: Image3, alt: 'Main Road Access to Project' },
    { id: 4, src: Image4, alt: 'Aerial View of Al Hamra Homes' },
    { id: 5, src: Image5, alt: 'Proposed Commercial Zone' },
    { id: 6, src: Image6, alt: 'Ichamati River Side View' },
    { id: 7, src: Image7, alt: 'Project Landscaping Design' },
    { id: 8, src: Image8, alt: 'Gate and Security Entrance Mockup' },
];

const ImageGallery = () => {
    // Lightbox open করবে index দিয়ে, তাই null এর পরিবর্তে -1 ব্যবহার সুবিধাজনক
    const [lightboxOpen, setLightboxOpen] = useState(-1);

    const openLightbox = (index) => {
        setLightboxOpen(index);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setLightboxOpen(-1);
        document.body.style.overflow = 'auto';
    };

    const nextImage = (e) => {
        e.stopPropagation();
        setLightboxOpen((prevIndex) => (prevIndex + 1) % galleryImages.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setLightboxOpen((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length);
    };

    return (
        <section className="py-16 md:py-24 bg-white"> {/* ব্যাকগ্রাউন্ড সাদা ও প্যাডিং বাড়ানো হলো */}
            <div className="container mx-auto px-6 max-w-7xl">
                
                {/* --- Updated Heading --- */}
                <div className="text-center mb-16">
                    <h2 className="text-xl font-semibold uppercase tracking-widest text-amber-600 mb-3">
                        PROJECT VISUALS
                    </h2>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#172554] mb-4">
                        আমাদের স্বপ্নের গ্যালারি
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        দেখুন আমাদের প্রকল্পের বাস্তব চিত্র, ডেভেলপমেন্টের অগ্রগতি এবং ভবিষ্যতের নকশা।
                    </p>
                </div>
                {/* ----------------------- */}

                {/* --- Image Grid (Refined Design) --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> {/* গ্যাপ বাড়ানো হলো */}
                    {galleryImages.map((image, index) => (
                        <div
                            key={image.id}
                            className="relative overflow-hidden cursor-pointer aspect-square group rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300" // শ্যাডো এবং কর্নার যুক্ত করা হলো
                            onClick={() => openLightbox(index)}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110" // ট্রানজিশন স্মুথ করা হলো
                            />
                            {/* Pro Overlay Effect */}
                            <div className="absolute inset-0 bg-[#172554] bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                                <FaExpand className="text-white text-3xl p-2 rounded-full border-2 border-white opacity-80 group-hover:opacity-100 transition-opacity"/>
                                <span className="sr-only">View Image</span> {/* স্ক্রিন রিডার এর জন্য */}
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- Lightbox/Modal (Professional UI) --- */}
                {lightboxOpen !== -1 && (
                    <div
                        className="fixed inset-0 z-[100] bg-black bg-opacity-90 flex items-center justify-center backdrop-blur-sm"
                        onClick={closeLightbox}
                    >
                        {/* Close Button (Icon style) */}
                        <button
                            className="absolute top-6 right-6 text-white text-3xl p-3 z-[101] hover:text-amber-500 transition-colors bg-black bg-opacity-30 rounded-full"
                            onClick={closeLightbox}
                            aria-label="Close Lightbox"
                        >
                             <FaTimes />
                        </button>

                        {/* Previous Button */}
                        <button
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl p-4 bg-black bg-opacity-40 rounded-full hover:bg-opacity-70 transition-opacity z-[101] shadow-lg"
                            onClick={prevImage}
                            aria-label="Previous Image"
                        >
                            <FaArrowLeft />
                        </button>

                        {/* Image Container */}
                        <div className="max-w-6xl max-h-screen p-4" onClick={(e) => e.stopPropagation()}>
                            <img
                                src={galleryImages[lightboxOpen].src}
                                alt={galleryImages[lightboxOpen].alt}
                                className="max-h-[85vh] max-w-full object-contain rounded-lg shadow-2xl transition-transform duration-500"
                            />
                            {/* Caption */}
                            <div className='mt-5 px-4'>
                                <p className="text-center text-white text-xl font-medium tracking-wide">
                                    {galleryImages[lightboxOpen].alt}
                                </p>
                                <p className="text-center text-gray-400 text-sm mt-1">
                                    {lightboxOpen + 1} of {galleryImages.length}
                                </p>
                            </div>
                        </div>

                        {/* Next Button */}
                        <button
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl p-4 bg-black bg-opacity-40 rounded-full hover:bg-opacity-70 transition-opacity z-[101] shadow-lg"
                            onClick={nextImage}
                            aria-label="Next Image"
                        >
                            <FaArrowRight />
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ImageGallery;