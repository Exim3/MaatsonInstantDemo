import React from "react";
import Slider from "react-slick";
import { QuoteEndIcon, QuoteStartIcon, RattingIcon } from "../icons";

export const TestimonalSlider: React.FC<{
  data: { rating: number; content: string; author: string }[];
}> = ({ data }) => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {data.map((item, index) => (
        <div className="p-5 " key={index}>
          <div className="flex flex-col gap-2 px-4 py-3 border border-neutral-800 text-neutral-800 font-semibold rounded-[8px_56px_8px_56px] text-center shadow-[16px_16px_0px_0px_rgba(55,71,178)] h-full w-full justify-center break-after-all">
            <div className="content">
              <span>
                <QuoteStartIcon />
              </span>
              <p>{item.content}</p>
              <p className="flex items-center justify-end">
                <QuoteEndIcon />
              </p>
            </div>
            <div className="rating flex items-center justify-center gap-2">
              <span>
                {" "}
                <RattingIcon size={24} />{" "}
              </span>
              <span>{item.rating}/5.0</span>
            </div>
            <div className="author text-baseBlack text-2xl italic">
              <p>{item.author}</p>
            </div>{" "}
          </div>
        </div>
      ))}
    </Slider>
  );
};
