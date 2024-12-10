import React from "react";
import { CancelIcon } from "../../components/icons";
import EnquiryForm from "../../components/enquiryForm";
import { useNavigate } from "react-router";

const Enquiry: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      {" "}
      <div className=" container mx-auto   h-full  gap-20 grid grid-cols-1  lg:grid-cols-2 py-8">
        <div className="flex flex-col gap-2">
          <span
            className="rounded-md w-10 h-10 flex items-center p-3 text-center shadow-primary-sd cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <CancelIcon color="#0F1432" />
          </span>
          <div className="flex flex-col gap-10">
            <h1 className="text-primary font-semibold textx-5xl lg:text-6xl">
              Secure Your Container Home Today!
            </h1>
            <p className="text-xl text-baseBlack">
              Fill out the form below to take the next step toward your dream
              container home/office. We’re here to assist you!
            </p>
          </div>
        </div>
        <EnquiryForm />
      </div>
    </>
  );
};

export default Enquiry;
