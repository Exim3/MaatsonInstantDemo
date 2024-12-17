import React, { useEffect, useRef } from "react";
import distributionImage2 from "/images/distributerImage2.png";
import { FreedomIcon } from "../../components/icons";
import DistributorShip from "../../components/distributionForm";
import DirectorImage from "/images/director.png";
import { Link, useLocation } from "react-router-dom";

const Distributorship: React.FC = () => {
  const location = useLocation();
  const distributorshipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = "Distributorship";
    if (
      location.state?.scrollTo === "distributorshipDetail-section" &&
      distributorshipRef.current
    ) {
      // Using requestAnimationFrame for better synchronization with the browser's render cycle
      requestAnimationFrame(() => {
        window.scrollTo({
          top: distributorshipRef.current?.offsetTop,
          behavior: "smooth",
        });
      });
    }
  }, [location]);

  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="min-h-20 mt-5 lg:mt-10 "></div>
        {/* article1 */}
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2  gap-10 text-baseBlack">
          <div className="flex flex-col gap-6  font-semibold text-center lg:text-start">
            <h5 className="text-secondary font-semibold text-2xl   font-robotoSlab ">
              Grow with Maatson{" "}
            </h5>
            <h1 className="text-5xl lg:text-6xl   font-robotoSlab">
              Elevate Your Business with Maatson’s Instant Homes & Offices{" "}
            </h1>
            <p className="text-lg">
              Partner with Maatson to deliver modern, ready-to-assemble instant
              homes and offices. Join us in shaping sustainable and adaptable
              spaces that meet the evolving demands of your region.
            </p>
            <Link className="text-center" to={"/contact"}>
              <button className="btn-secondary-yellow">Contact Now</button>
            </Link>
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm">
              <span className="border-2 bg-neutral-100 text-primary border-primary-100 px-4 py-2 rounded-2xl">
                No Deposit Required
              </span>
              <span className="border-2 bg-neutral-100 text-primary border-primary-100 px-4 py-2 rounded-2xl">
                No Advance Required
              </span>
            </div>
          </div>
          <div className="w-full h-full ">
            <img
              src={DirectorImage}
              alt="distributer"
              className="object-cover w-[560px] mx-auto h-full rounded-xl"
            />
          </div>
        </div>
        {/* article2 */}
        <div className="flex flex-col gap-10">
          <div className="grid grid-cols-1 lg:grid-cols-2  container mx-auto items-center justify-center gap-10">
            <div className="py-6 px-4 flex flex-col gap-8 max-w-[560px] h-full mx-auto border-2 rounded-xl border-primary">
              <p className="font-semibold text-2xl text-primary font-robotoSlab  text-center">
                Product Description
              </p>
              <p className="text-lg">
                {" "}
                Maatson Instant houses and offices offer a flexible, durable,
                and cost-effective solution for modern living and working
                environments. These fully customizable units are designed for
                quick setup and can be tailored to meet your specific space
                requirements. With strong, Fire-resistant weather-resistant
                materials and easy portability, they provide an eco-friendly
                alternative for both residential and commercial use, ensuring
                comfort and convenience wherever you need it.
              </p>
            </div>
            <div className="h-full mx-auto">
              <img
                src={distributionImage2}
                alt="distributer"
                className="object-fill h-full"
              />
            </div>
          </div>
          {/* benefits */}
          <div className="bg-neutral-100 gap-8 py-6 flex flex-col ">
            <div className="benefits flex flex-col gap-6 container mx-auto">
              <div className="flex flex-col gap-3 text-center">
                <p className="text-primary-700 font-semibold text-2xl   font-robotoSlab ">
                  Benefits{" "}
                </p>
                <h3 className="text-3xl md:text-4xl text-baseBlack font-semibold">
                  Benefits of Becoming a Maatson Instant Homes Distributor{" "}
                </h3>{" "}
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center  gap-6">
                <div className="px-4 py-6 rounded-lg bg-white flex items-center w-full h-full border-2 border-primary   gap-6">
                  <span
                    style={{
                      textShadow:
                        "1px 1px 0px #3747B2, -1px -1px 0px #3747B2, 1px -1px 0px #3747B2, -1px 1px 0px #3747B2",
                    }}
                    className="text-6xl text-white  text-center"
                  >
                    01
                  </span>
                  <div className="flex flex-col gap-3 text-neutral-1000">
                    <h4 className="text-2xl font-semibold">
                      Digital marketing service
                    </h4>
                    <p className="text-xl">
                      We provide digital marketing services and lead generation
                      specifically tailored for your location to support our
                      distributors.
                    </p>
                  </div>
                </div>
                <div className="px-4 py-6 rounded-lg bg-white flex items-center w-full h-full border-2 border-primary gap-6">
                  <span
                    style={{
                      textShadow:
                        "1px 1px 0px #3747B2, -1px -1px 0px #3747B2, 1px -1px 0px #3747B2, -1px 1px 0px #3747B2",
                    }}
                    className="text-6xl text-white  text-center"
                  >
                    02
                  </span>
                  <div className="flex flex-col gap-3 text-neutral-1000">
                    <h4 className="text-2xl font-semibold">
                      Complete Freedom on pricing
                    </h4>
                    <p className="text-xl">
                      Here are no sales restrictions—you're free to set your own
                      prices based on your location and customer needs..
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="requirements flex flex-col gap-6 container mx-auto">
              <div className="flex flex-col gap-3 text-center">
                <p className="text-primary-700 font-semibold text-2xl   font-robotoSlab ">
                  Requirements{" "}
                </p>
                <h3 className="text-3xl md:text-4xl text-baseBlack font-semibold">
                  Requirements of Becoming a Maatson Instant Homes Distributor{" "}
                </h3>{" "}
              </div>
              <div className="px-4 py-6 rounded-lg border-2 border-secondary  bg-white flex items-center gap-6">
                <span className="  text-center ">
                  <FreedomIcon size={72} />
                </span>
                <div className="flex flex-col gap-3 text-neutral-1000">
                  <p className="text-xl">
                    Distributors are required to purchase one container and have
                    a minimum of 300 square feet of space available for placing
                    a demo unit.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Distributorship form */}
          <div ref={distributorshipRef}>
            <DistributorShip />
          </div>
        </div>
      </div>
    </>
  );
};

export default Distributorship;
