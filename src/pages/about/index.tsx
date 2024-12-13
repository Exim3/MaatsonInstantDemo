import React, { useEffect } from "react";
import Banner from "../../components/banner/Banner";
import bannerImage from "/images/gallery5.png";
import coreValue1 from "/images/coreValue1.png";
import coreValue2 from "/images/coreValue2.png";
import coreValue3 from "/images/coreValue3.png";
import ContactSection from "../../components/contact";
import { CoreValueBox } from "../../components/box";
import { ExploreIcon } from "../../components/icons";

const About: React.FC = () => {
  useEffect(() => {
    document.title = "About Us";
  }, []);
  return (
    <>
      <div className="flex flex-col gap-10">
        <Banner
          title={"About Us"}
          content={
            "  We specialize in creating modern, sustainable container homes designed for flexibility and convenience. Our mission is to offer eco-friendly living solutions tailored to your lifestyle.  "
          }
          imageLink={bannerImage}
        />
        <div className="gap-6 flex flex-col text-center container mx-auto">
          <div className="flex flex-col gap-4">
            <p className="text-primary-700 font-semibold text-2xl font-robotoSlab">
              Who We are!{" "}
            </p>
            <h2 className="text-secondary text-4xl lg:text-5xl font-semibold">
              Instant Solutions{" "}
              <span className="text-baseBlack text-3xl lg:text-4xl">
                for Modern Living!
              </span>
            </h2>
            <p className="text-xl">
              At Maatson, we are dedicated to revolutionizing the concept of
              living and working spaces through our innovative container homes
              and offices. Our journey began with a vision to create
              sustainable, cost-effective, and versatile housing and office
              solutions that cater to a variety of lifestyles and business
              needs. With a focus on quality craftsmanship and environmentally
              friendly practices, we aim to provide comfortable, stylish spaces
              that can be customized to meet the unique needs of our customers.
              Our team is passionate about delivering exceptional service,
              ensuring that each container home and office reflects our
              commitment to excellence and innovation. Join us in redefining the
              future of housing and workspaces!At Maatson, we are dedicated to
              revolutionizing the concept of living and working spaces through
              our innovative container homes and offices. Our journey began with
              a vision to create sustainable, cost-effective, and versatile
              housing and office solutions that cater to a variety of lifestyles
              and business needs. With a focus on quality craftsmanship and
              environmentally friendly practices, we aim to provide comfortable,
              stylish spaces that can be customized to meet the unique needs of
              our customers. Our team is passionate about delivering exceptional
              service, ensuring that each container home and office reflects our
              commitment to excellence and innovation. Join us in redefining the
              future of housing and workspaces!
            </p>
          </div>
          <div className="flex flex-wrap p-4 items-center gap-6 text-neutral-1000 justify-center font-semibold ">
            <div className="w-full sm:w-[315px] h-auto max-w-xs  flex flex-col justify-center items-center  bg-neutral-100 p-8 gap-1">
              <span className="text-6xl ">09+</span>
              <p>Services</p>
            </div>
            <div className="w-full sm:w-[315px] h-auto max-w-xs  flex flex-col justify-center items-center  bg-neutral-100 p-8 gap-1">
              <span className="text-6xl ">40+</span>
              <p>Years of combined experience</p>
            </div>
          </div>
        </div>
        <div className="py-4 gap-6 flex flex-col container mx-auto">
          <div className="text-center flex flex-col gap-3 font-semibold ">
            <p className="text-primary-700 text-2xl font-robotoSlab">
              Core Values{" "}
            </p>{" "}
            <h3 className="text-3xl md:text-4xl">
              The Foundation of Our Commitment to Innovative Living Solutions
            </h3>
          </div>
          <div className="flex flex-wrap lg:grid lg:grid-cols-3  justify-center gap-8 h-full  mx-auto ">
            <CoreValueBox
              title={"Innovation"}
              img={coreValue1}
              content={
                "We prioritize creativity and cutting-edge design to deliver modern living solutions that meet the evolving needs of our customers."
              }
            />
            <CoreValueBox
              title={"Quality"}
              img={coreValue2}
              content={
                "We believe in excellence and craftsmanship, ensuring that every container home we create meets the highest standards of durability and comfort."
              }
            />
            <CoreValueBox
              title={"Customer-Centricity"}
              img={coreValue3}
              content={
                "Our customers are at the heart of everything we do. We strive to understand their unique needs and provide tailored solutions that exceed their expectations."
              }
            />
          </div>
        </div>
        <div className="flex flex-col container mx-auto py-6 gap-6 text-center text-xl">
          <div className="flex flex-col gap-3 font-semibold">
            <p className="text-primary-700 text-2xl font-robotoSlab">
              Maatson Maritime Intl (OPC) Pvt Ltd{" "}
            </p>{" "}
            <h3 className="text-3xl md:text-4xl ">
              Comprehensive Container and Logistics Solutions{" "}
            </h3>
          </div>
          <p>
            We MAATSON MARITIME INTL (OPC) PVT LTD are always been known for
            providing customer focused solutions and now with our comprehensive
            knowledge want to make this company with a difference. Since
            customer expectation is ‘on time’ delivery at reasonable cost, We
            and our global network partners have special freight rates contract
            with large global carriers and NVOCC’s and have access to
            competitive freight rates. We provide end to end and multi-modal
            logistics support as per the requirements of various industries.
          </p>
          <p>
            Our business associates around the world enable us to weave a global
            network that integrates with our promise to deliver your goods
            effectively on time every time. With the help of our vast and well
            settled network throughout India, we are able to provide our
            customers with hassle free services for both Sea Freight and Air
            freight activities. MAATSON MARITIME INTL (OPC) PVT LTD is your one
            stop solution for all your logistic needs. Being customer-focused in
            every aspect we deliver the ideal solution to meet customer needs.
          </p>
          <div className="bg-neutral-100 gap-6 py-6 flex flex-col rounded-2xl">
            <p className="text-primary-700 text-2xl font-robotoSlab">
              Our Services{" "}
            </p>{" "}
            <div className="flex items-center gap-6 flex-wrap justify-center">
              <ServiceChips serviceName={"Fabricated Container"} />
              <ServiceChips serviceName={"NVOCC liner services"} />
              <ServiceChips serviceName={"Custom Clearance"} />
              <ServiceChips serviceName={"Freight Forwarding - Air"} />
              <ServiceChips serviceName={"Freight Forwarding - Sea"} />
              <ServiceChips serviceName={"Warehousing"} />
              <ServiceChips serviceName={"Trading and Leasing of Container"} />
              <ServiceChips serviceName={"Export"} />
            </div>
            <p>Feel free to check out our logistics services!</p>{" "}
          </div>
        </div>
        <ContactSection />
      </div>
    </>
  );
};

export default About;

const ServiceChips: React.FC<{ serviceName: string }> = ({ serviceName }) => {
  return (
    <>
      <div className="bg-secondary-300 rounded-3xl ">
        <div className="flex items-center justify-center gap-4 p-2 border-4 border-white border-opacity-40 rounded-3xl text-sm">
          <p>{serviceName}</p>

          <div className="p-1 rounded-full bg-white bg-opacity-40 relative z-0">
            <span className="relative z-10">
              {" "}
              <ExploreIcon color="#121212" size={20} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
