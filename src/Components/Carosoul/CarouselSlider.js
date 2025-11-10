import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import slider1 from '../../Assets/Slider/slider1.jpg';
import slider2 from '../../Assets/Slider/slider5.jpg';
import slider3 from '../../Assets/Slider/slider6.jpg';
import slider4 from '../../Assets/Slider/slider4.jpg';
import slider5 from '../../Assets/Slider/slider8.jpg';
import slider6 from '../../Assets/Slider/slider9.jpg';
import slider7 from '../../Assets/Slider/slider10.jpg';
const sliderImages = [
  { id: 1, image: slider1, title: "Slide 1" },
  { id: 2, image: slider2, title: "Slide 2" },
  { id: 3, image: slider3, title: "Slide 3" },
  { id: 4, image: slider4, title: "Slide 4" },
  { id: 6, image: slider5, title: "Slide 6" },
  { id: 7, image: slider6, title: "Slide 7" },
    { id: 8, image: slider7, title: "Slide 8" },
];

const CarouselSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="px-3 sm:px-6 lg:px-20 mt-16">
      <h2 className="text-lg mb-3 lg:text-3xl font-extrabold bg-gradient-to-r from-[#00838F] via-[#00ACC1] to-[#26C6DA] bg-clip-text text-transparent drop-shadow-md">
      OUR ACTIVITIES
      </h2>
      <Slider {...settings}>
        {sliderImages.map(({ id, image, title }) => (
          <div key={id} className="p-2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-72 object-cover rounded-2xl"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselSlider;
