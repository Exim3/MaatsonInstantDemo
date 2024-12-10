import React, { useState } from "react";
import { EmailIcon, PhoneIcon, TelephoneIcon } from "../icons";
import GroupField from "../groupField";

const DistributorShip: React.FC = () => {
  const [isOwnBusiness, setOwnBusiness] = useState<boolean>(true);
  return (
    <>
      <div
        id="distributorDetails"
        className=" container mx-auto grid grid-cols-1 lg:grid-cols-2 lg:flex-row justify-between gap-16"
      >
        <div className="flex flex-col gap-6 text-baseBlack ">
          <div className="flex flex-col gap-3">
            <p className="text-primary-700 font-semibold text-2xl   font-robotoSlab ">
              Contact Us
            </p>
            <h3 className="text-4xl md:text-5xl font-semibold ">
              Become a Distributor of Maatson Instant Homes and Offices{" "}
            </h3>
          </div>
          <p className="text-xl">
            Join us in delivering innovative and sustainable living and working
            solutions to your community.
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
        </div>
        <form
          action=""
          className="p-4 rounded-xl shadow-primary-sd flex flex-col gap-6"
        >
          <h2 className="text-3xl font-semibold text-center">
            Distributorship form
          </h2>
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
              label={"City, State"}
              name={"location"}
              value={""}
              placeholder={"Enter Your Location"}
              type={"text"}
            />
            <div className={`flex flex-col gap-4 `}>
              <label htmlFor="">Select Your Professional Status</label>
              <div className="flex items-center gap-4">
                <span
                  className={`px-3 py-2 rounded-md border-2 ${
                    isOwnBusiness
                      ? "text-primary border-primary"
                      : " border-neutral-200"
                  }`}
                  onClick={() => setOwnBusiness((prev) => !prev)}
                >
                  Business owner
                </span>
                <span
                  className={`px-3 py-2 rounded-md border-2  ${
                    isOwnBusiness
                      ? "border-neutral-200 "
                      : "text-primary border-primary"
                  }`}
                  onClick={() => setOwnBusiness((prev) => !prev)}
                >
                  Working Profession
                </span>
              </div>
            </div>
            {isOwnBusiness ? (
              <>
                <GroupField
                  label={
                    "Business type (Please select the kind of business you operate)"
                  }
                  name={"businessType"}
                  value={""}
                  placeholder={" Enter Your Business type "}
                  type={"text"}
                />
                <GroupField
                  label={"Company Name"}
                  name={"companyName"}
                  value={""}
                  placeholder={" Enter Your Company Name"}
                  type={"text"}
                />
              </>
            ) : (
              <GroupField
                label={"Tell Us About Your Profession"}
                name={"profession"}
                value={""}
                placeholder={" Enter Your Profession"}
                type={"text"}
              />
            )}
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

export default DistributorShip;
