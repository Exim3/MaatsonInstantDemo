import React from "react";

interface BannerProps {
  title: string;
  content: string;
  imageLink: string;
}

const Banner: React.FC<BannerProps> = ({ imageLink, title, content }) => {
  return (
    <div className="relative bg-primary-100 ">
      <div className="py-[95px]  container mx-auto  flex flex-col gap-4 text-baseBlack text-center">
        <div
          className={`absolute inset-0  top-0 w-full left-0 opacity-20 bg-center`}
          style={{ backgroundImage: `url(${imageLink})` }}
        ></div>
        <div className="min-h-10"></div>
        <h1 className="text-5xl font-robotoSlab font-semibold ">{title}</h1>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Banner;
