import React from "react";
import Slider from "react-slick";

export const ContainerCarousel: React.FC<{
  data: string[];
}> = ({ data }) => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000, // For tablet-sized screens (<=900px)
        settings: {
          slidesToShow: 2, // Show 2 slides on tablet
          slidesToScroll: 1, // Scroll 2 slides at a time
        },
      },
      {
        breakpoint: 770, // For mobile-sized screens (<=480px)
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile
          slidesToScroll: 1, // Scroll 1 slide at a time
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {data.map((item, index) => (
        <div className="flex items-center justify-center rounded-xl w-80 h-80">
          <img
            src={item}
            alt={`container${index}`}
            className="w-80 h-80 object-fill rounded-xl mx-auto text-center"
          />
        </div>
      ))}
    </Slider>
  );
};
