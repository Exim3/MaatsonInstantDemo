import React from "react";
import { StarOulineIcon, WhatsAppIcon } from "../icons";
import { useNavigate } from "react-router";

const ModelCard: React.FC<{
  image: string;
  modelNumber: string;
  usages: string;
}> = ({ image, modelNumber, usages }) => {
  const navigate = useNavigate();
  return (
    <div className="p-4 gap-6 grid grid-cols-1  lg:grid-cols-2 items-center bg-neutral-100 shadow-primary-sd rounded-xl">
      <div className="w-full h-full ">
        <img
          src={image}
          alt={modelNumber}
          className="object-fill h-full w-full"
        />
      </div>
      <div className="flex flex-col justify-between gap-4 w-full">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <p className="text-neutral-700">Model Number</p>
            <h4 className="text-2xl text-baseBlack">{modelNumber}</h4>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-neutral-700">Size</p>
            <h4 className="text-xl text-baseBlack font-semibold">
              min. size 204 x 10b x 9 h approx.,
              <br />
              Can be extended as per customer requirements.{" "}
            </h4>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-neutral-700">Features</p>
            <div className="flex items-center flex-wrap gap-3">
              <BoxChips content="Rust-resistance" />
              <BoxChips content="Fire-resistance" />
              <BoxChips content="Heat-Resistance" />
              <BoxChips content="Weather-Resistance" />{" "}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-neutral-700">Usages</p>
            <h4 className="text-xl text-baseBlack font-semibold">{usages} </h4>
          </div>
        </div>
        <div className="flex gap-2 items-center w-full justify-center text-center flex-wrap lg:flex-nowrap">
          <button
            onClick={() => navigate(`/enquiryform?query=Modal-${modelNumber}`)}
            className="btn-primary w-full sm:flex-1"
          >
            {" "}
            Book Now
          </button>
          <a
            href={`https://wa.me/9003052529?text="requirement Modal-${modelNumber}"`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-outline  w-full sm:flex-1"
          >
            <button className="flex items-center gap-2 justify-center w-full">
              <WhatsAppIcon />
              <p> WhatsApp Now</p>
            </button>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;

// Corrected the type and component name
const BoxChips: React.FC<{ content: string }> = ({ content }) => {
  return (
    <>
      <div className="flex items-center gap-2">
        <StarOulineIcon />
        <p className="text-neutral-1000">{content}</p>
      </div>
    </>
  );
};
