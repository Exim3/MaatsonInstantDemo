import React from "react";
import Banner from "../../components/banner/Banner";
import bannerImage from "/images/contactBanner.png";
import ContactSection from "../../components/contact";
import LocationCard from "../../components/card/LocationCard";
import {
  EmailOutlineIcon,
  LocationIcon,
  PhoneOutlineIcon,
  ProfileOutlineIcon,
  SearchIcon,
} from "../../components/icons";

const Contact: React.FC = () => {
  const distributorData = [
    {
      name: "Dudás Nikolett",
      address: "B-502, Safal Pegasus, Prahlad Nagar, Ahmedabad, Gujarat 380015",
      phone: "(209) 555-0104",
      email: "info@upcontainerhub.com ",
    },
    {
      name: "Farkas Ágnes",
      address: "78, TTK Road, Alwarpet, Chennai, Tamil Nadu 600018",
      phone: "(207) 555-0119",
      email: "info@upcontainerhub.com ",
    },
    {
      name: "Vincze Nikolett",
      address:
        "Flat No. 5, Maple Apartments, Lane No. 7, Koregaon Park, Pune, Maharashtra 411001",
      phone: "(225) 555-0118",
      email: "info@upcontainerhub.com ",
    },
    {
      name: "Dudás Nikolett",
      address: "B-502, Safal Pegasus, Prahlad Nagar, Ahmedabad, Gujarat 380015",
      phone: "(209) 555-0104",
      email: "info@upcontainerhub.com ",
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-10">
        <Banner
          title={"Get in Touch!"}
          content={
            "We’re here to assist you with any questions or inquiries you may have. Don't hesitate to reach out—your perfect solution is just a message away!"
          }
          imageLink={bannerImage}
        />
        <ContactSection />
        {/* location */}
        <div className="location py-6 bg-neutral-100 text-center flex flex-col gap-8">
          <div className="flex flex-col gap-3  container mx-auto">
            <p className="text-primary-700 font-semibold text-2xl   font-robotoSlab ">
              Location{" "}
            </p>
            <h3 className="text-3xl md:text-4xl font-semibold text-baseBlack ">
              We provide all three locations for your convenience. Click below
              for directions.{" "}
            </h3>
          </div>
          <div className="flex flex-wrap lg:grid lg:grid-cols-3 mx-auto  justify-center h-full gap-8">
            <LocationCard
              title={"Registered Office"}
              content={"NO: 6, Shastri Nagar, Kodungaiyur, Chennai-600118"}
              isBgPrimary={false}
            />
            <LocationCard
              title={"Corporate Office"}
              content={
                "Tower C,8th floor, Kosmo One, Sai nagar, 3rd Main Road, Mogappair, West Ambattur Chennai-600058"
              }
              isBgPrimary={true}
            />
            <LocationCard
              title={"Warehouse"}
              content={"No: 703/192 Vijay Nagar vilangatupakkam Chennai-52"}
              isBgPrimary={false}
            />
          </div>
        </div>
        {/* distributors */}

        <div className="py-8 gap-8 grid grid-cols-1 lg:grid-cols-2 items-start text-xl container mx-auto ">
          <div className="py-4 gap-10 flex flex-col text-baseBlack ">
            <h3 className="text-4xl lg:text-5xl">
              Find Our Distributors Across India
            </h3>
            <p>
              Find authorized distributors in your region across India for
              purchasing container houses. Use our city-based search to connect
              with the nearest distributor and get in touch for more details.
            </p>
          </div>
          <div className=" px-6 py-4 flex flex-col gap-6 border-2 border-neutral rounded-md ">
            <div className="flex items-center gap-4">
              <LocationIcon color="#626262" size={24} />
              <input
                type="text"
                name=""
                id=""
                placeholder="Location"
                className="w-full focus:border-none active:border-none focus-within:border-none focus:outline-none placeholder:text-lg "
              />
              <span className="cursor-pointer">
                {" "}
                <SearchIcon size={18} />
              </span>
            </div>
            <div className="h-[524px] overflow-y-auto flex flex-col gap-3 p-3">
              {distributorData.map((item) => (
                <DistributorBox
                  name={item.name}
                  address={item.address}
                  phone={item.phone}
                  email={item.email}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

const DistributorBox: React.FC<{
  name: string;
  address: string;
  phone: string;
  email: string;
}> = ({ name, address, phone, email }) => {
  return (
    <>
      <div className="rounded-xl bg-secondary-100 p-4 flex flex-col gap-3 text-wrap">
        <div className="flex items-center gap-2 text-primary text-xl">
          <span>
            <ProfileOutlineIcon />
          </span>
          <h4>{name}</h4>
        </div>
        <div className="flex flex-col justify-start gap-3 ">
          <div className="flex items-center gap-2 text-neutral-800 text-xs">
            <span>
              <LocationIcon color="#3D3D3D" />
            </span>
            <h4>{address}</h4>
          </div>
          <div className="flex items-center gap-2 text-neutral-1000 text-xs">
            <span>
              <PhoneOutlineIcon size={20} />
            </span>
            <h4>{phone}</h4>
          </div>
          <div className="flex items-center gap-2 text-neutral-1000 text-xs">
            <span>
              <EmailOutlineIcon size={20} />
            </span>
            <h4>{email}</h4>
          </div>
        </div>
      </div>
    </>
  );
};
