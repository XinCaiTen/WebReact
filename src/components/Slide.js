import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      <div>
        <img
          src="https://via.placeholder.com/1600x400?text=Slide+1"
          alt="Slide 1"
        />
      </div>
      <div>
        <img
          src="https://via.placeholder.com/1600x400?text=Slide+2"
          alt="Slide 2"
        />
      </div>
      <div>
        <img
          src="https://via.placeholder.com/1600x400?text=Slide+3"
          alt="Slide 3"
        />
      </div>
    </Slider>
  );
};

export default Slide;
