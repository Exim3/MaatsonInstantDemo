import React from "react";
import { PhoneIcon } from "../icons";

const LocationCard: React.FC<{
  title: string;
  content: string;
  isBgPrimary: boolean;
}> = ({ title, content, isBgPrimary }) => {
  return (
    <div
      className={` max-w-xs  md:w-[360px] lg:w-full  px-6 py-4 rounded-2xl border-2 h-auto border-primary flex flex-col justify-between break-after-all gap-6 ${
        isBgPrimary ? "bg-primary" : "bg-white"
      }`}
    >
      <div className="flex flex-col gap-6 text-start">
        <div className="flex items-center gap-4 justify-start">
          <span>
            <PhoneIcon />
          </span>
          <h4
            className={`${
              isBgPrimary ? "text-white" : "text-primary"
            } font-semibold`}
          >
            {title}
          </h4>
        </div>
        <p
          className={`text-2xl ${
            isBgPrimary ? "text-white" : "text-primary-400"
          } `}
        >
          {content}
        </p>
      </div>
      <button className="btn-secondary border-2 border-primary bg-white">
        Get Directions
      </button>
    </div>
  );
};

export default LocationCard;