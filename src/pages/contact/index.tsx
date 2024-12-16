import React, { useEffect } from "react";
import Banner from "../../components/banner/Banner";
import bannerImage from "/images/contactBanner.png";
import ContactSection from "../../components/contact";
import LocationCard from "../../components/card/LocationCard";
import DistributerContactForm from "../../components/distributorContactForm";

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = "Contact Us";
  }, []);
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
              mapLink={"https://maps.app.goo.gl/wipNiYiG3VTLrpRw7"}
            />
            <LocationCard
              title={"Corporate Office"}
              content={
                "Tower C,8th floor, Kosmo One, Sai nagar, 3rd Main Road, Mogappair, West Ambattur Chennai-600058"
              }
              isBgPrimary
              mapLink={"https://maps.app.goo.gl/XUfBei16MJhMWWsF9"}
            />
            <LocationCard
              title={"Warehouse"}
              content={"No: 703/192 Vijay Nagar vilangatupakkam Chennai-52"}
              mapLink={"https://maps.app.goo.gl/5zxYHrnRjUFWdVxd9"}
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

          <DistributerContactForm />
        </div>
      </div>
    </>
  );
};

export default Contact;
