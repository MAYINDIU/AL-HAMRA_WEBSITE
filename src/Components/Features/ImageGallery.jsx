import React, { useState } from 'react';
// Imports remain the same
import Image1 from '../../Assets/Galary/1.jpg';
import Image2 from '../../Assets/Galary/2.jpg';
import Image3 from '../../Assets/Galary/3.jpg';
import Image4 from '../../Assets/Galary/4.jpg';
import Image5 from '../../Assets/Galary/5.jpg';
import Image6 from '../../Assets/Galary/6.jpg';
import Image7 from '../../Assets/Galary/5.jpg';
import Image8 from '../../Assets/Galary/6.jpg';

const galleryImages = [
    { id: 1, src: Image1, alt: 'A beautiful landscape' },
    { id: 2, src: Image2, alt: 'A modern architecture design' },
    { id: 3, src: Image3, alt: 'Abstract art piece' },
    { id: 4, src: Image4, alt: 'People collaborating in an office' },
    { id: 5, src: Image5, alt: 'City skyline at night' },
    { id: 6, src: Image6, alt: 'Nature scene with trees' },
    { id: 7, src: Image7, alt: 'Close up of technological device' },
    { id: 8, src: Image8, alt: 'Aerial view of a town' },
];

const ImageGallery = () => {
    const [lightboxOpen, setLightboxOpen] = useState(null);

    const openLightbox = (index) => {
        setLightboxOpen(index);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setLightboxOpen(null);
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
        <section className="py-12 md:py-20 bg-gray-50">
            <div className="container mx-auto px-6 max-w-7xl">
                <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
                    Visual Showcase
                </h1>

                {/* --- Image Grid (No Card, Zoom & Overlay Hover) --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> 
                    {galleryImages.map((image, index) => (
                        <div
                            key={image.id}
                            // REMOVED: Card styling classes. Kept only structure and hover group.
                            className="relative overflow-hidden cursor-pointer aspect-square group" 
                            onClick={() => openLightbox(index)}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                // KEEP: Zoom effect (zoom in/out)
                                className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                            />
                            {/* KEEP: Hover overlay/indicator */}
                            <div className="absolute inset-0 bg-indigo-600 bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                                <span className="text-white text-lg font-bold p-2 rounded bg-black bg-opacity-40">VIEW</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- Lightbox/Modal (remains the same) --- */}
                {lightboxOpen !== null && (
                    <div
                        className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center backdrop-blur-sm"
                        onClick={closeLightbox}
                    >
                        <button
                            className="absolute top-6 right-6 text-white text-4xl p-2 z-50 hover:text-red-500 font-light transition-colors"
                            onClick={closeLightbox}
                            aria-label="Close Lightbox"
                        >
                            &times;
                        </button>

                        <button
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-5xl p-4 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition-opacity z-40"
                            onClick={prevImage}
                            aria-label="Previous Image"
                        >
                            &#8249;
                        </button>

                        <div className="max-w-5xl max-h-screen p-4" onClick={(e) => e.stopPropagation()}>
                            <img
                                src={galleryImages[lightboxOpen].src}
                                alt={galleryImages[lightboxOpen].alt}
                                className="max-h-[85vh] max-w-full object-contain rounded-xl shadow-2xl"
                            />
                            <p className="text-center text-white mt-4 text-xl font-medium">
                                {galleryImages[lightboxOpen].alt}
                                <span className="text-gray-400 text-base ml-2">
                                    ({lightboxOpen + 1} of {galleryImages.length})
                                </span>
                            </p>
                        </div>

                        <button
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-5xl p-4 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition-opacity z-40"
                            onClick={nextImage}
                            aria-label="Next Image"
                        >
                            &#8250;
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ImageGallery;