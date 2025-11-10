import React from 'react';
import bannerImage from '../../Assets/Slider/client.jpg';

const ContributingSection = () => {
  return (
    // Section background remains light blue
    <section className="bg-blue-100 py-0"> 
      
      {/* Outer wrapper: w-full and px-0 to remove all horizontal padding */}
      <div className="w-full mx-auto px-0"> 
        
        {/* Grid Container: Clean 50/50 split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch overflow-hidden"> 
          
          {/* Left Side — Banner Image Container */}
          <div className="w-full relative bg-gray-300"> 
            <img
              src={bannerImage}
              alt="People actively contributing to a cause"
              // Enforcing fixed height h-72 and ensuring the image covers the area
              className="w-full h-72 object-cover" 
            />
          </div>

          {/* Right Side — Text Content Block (UPDATED) */}
          <div 
            // **CHANGE:** Background is now Red 600
            className="bg-red-600 p-0 flex flex-col justify-center h-72" 
          >
            {/* Inner padding for the text content itself (pl-8/lg:pl-12) */}
            <div className="p-8 lg:p-12"> 
                {/* **CHANGE:** Text color to White */}
                <h2 className="text-xl font-semibold text-white uppercase tracking-wider mb-1">
                  We Are Contributing
                </h2>
                
                {/* **CHANGE:** Text color to White */}
                <p className="text-4xl font-black text-white mb-1 leading-tight">
                  10 Million+ People
                </p>
                
                {/* **CHANGE:** Text color to White (or a light gray, here I used white) */}
                <p className="text-lg text-white mb-4">
                  and the number is growing rapidly.
                </p>

                <a
                  href="#explore"
                  // Button color remains indigo for contrast and action
                  className="inline-block px-6 py-2 text-md font-bold text-white 
                             bg-indigo-700 rounded shadow-md 
                             hover:bg-indigo-800 transition duration-300 self-start"
                >
                  Explore Our Impact
                </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ContributingSection;