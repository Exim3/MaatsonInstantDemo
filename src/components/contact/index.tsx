import React from "react";
import { EmailIcon, PhoneIcon, TelephoneIcon } from "../icons";
import indicatorImage from "/images/indicatorImage.png";
import GroupField from "../groupField";

const ContactSection: React.FC = () => {
  return (
    <>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 lg:flex-row justify-between gap-16">
        <div className="flex flex-col gap-6 text-baseBlack ">
          <div className="flex flex-col gap-3">
            <p className="text-primary-700 font-semibold text-2xl   font-robotoSlab ">
              Contact Us
            </p>
            <h3 className="text-4xl md:text-5xl font-semibold ">
              Your Dream Container Home is Just a Message Away!
            </h3>
          </div>
          <p className="text-xl">
            Ready to take the next step towards your dream container home? Fill
            out the form below, and our team will assist you in turning your
            vision into reality!
          </p>{" "}
          <div className="flex-col flex gap-3">
            <div className="flex items-center gap-4">
              <div className="p-1 rounded-full bg-primary-100 w-14 h-14 flex items-center justify-center">
                <PhoneIcon />
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="font-semibold text-2xl">Mobile Number</h4>
                <p className="text-xl">+91 90030 52529</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-1 rounded-full bg-primary-100 w-14 h-14 flex items-center justify-center">
                <TelephoneIcon />
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="font-semibold text-2xl">Tel Number</h4>
                <p className="text-xl">+91 44 7965 5171</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-1 rounded-full bg-primary-100 w-14 h-14 flex items-center justify-center">
                <EmailIcon />
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="font-semibold text-2xl">Email</h4>
                <p className="text-xl">sales@maatson.com</p>
              </div>
            </div>
          </div>
          <div className="text-center mx-auto">
            <img src={indicatorImage} alt="" />
          </div>
        </div>
        <form
          action=""
          className="p-4 rounded-xl shadow-primary-sd flex flex-col gap-6"
        >
          <h2 className="text-3xl font-semibold text-center">Contact Form</h2>
          <div className="flex flex-col gap-4">
            <GroupField
              label={"Full Name"}
              name={"fullName"}
              value={""}
              placeholder={"Enter Your Name"}
              type={"text"}
            />
            <GroupField
              label={"Email"}
              name={"email"}
              value={""}
              placeholder={"Enter Your Email"}
              type={"email"}
            />
            <GroupField
              label={"Mobile Number"}
              name={"mobile"}
              value={""}
              placeholder={"Enter Your Mobile Number"}
              type={"phone"}
            />
            <GroupField
              label={"Location"}
              name={"location"}
              value={""}
              placeholder={"Enter Your Location"}
              type={"text"}
            />
            <GroupField
              label={"Preferred for Contact "}
              name={"preferredContact"}
              value={""}
              placeholder={""}
              type={"dropdown"}
              options={[{ label: "", value: "" }]}
              selectValue={"Choose Preferred contact method"}
            />
            <GroupField
              label={"Query"}
              name={"query"}
              value={""}
              placeholder={"Enter Your Query"}
              type={"textArea"}
              optionalTag
            />
          </div>
          <input
            type="submit"
            value="Submit Query"
            className="btn-primary mt-auto"
          />
        </form>
      </div>
    </>
  );
};

export default ContactSection;
