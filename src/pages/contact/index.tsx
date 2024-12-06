import React from "react";
import Banner from "../../components/banner/Banner";
import bannerImage from "/images/contactBanner.png";
import ContactSection from "../../components/contact";
import LocationCard from "../../components/card/LocationCard";

const Contact: React.FC = () => {
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
        <div className="location py-6 container mx-auto bg-neutral-100 text-center flex flex-col gap-8">
          <div className="flex flex-col gap-3">
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
      </div>
    </>
  );
};

export default Contact;
