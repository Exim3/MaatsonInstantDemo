import React from "react";
import { StarOulineIcon, WhatsAppIcon } from "../icons";

const ModelCard: React.FC<{
  image: string;
  modelNumber: string;
  usages: string;
}> = ({ image, modelNumber, usages }) => {
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
              As per customer Requirement
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
          <div className="btn-primary w-full sm:flex-1"> Book Now</div>
          <div className="btn-primary-outline flex items-center gap-2 w-full justify-center sm:flex-1">
            <WhatsAppIcon />
            <p> WhatsApp Now</p>
          </div>
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
