import React, { useState } from "react";
import gallery1 from "/images/gallery1.png";
import gallery2 from "/images/gallery2.png";
import gallery3 from "/images/gallery3.png";
import gallery4 from "/images/gallery4.png";
import gallery5 from "/images/gallery5.png";
import featureIcon1 from "/images/featureIcon1.png";
import featureIcon2 from "/images/featureIcon2.png";
import featureIcon3 from "/images/featureIcon3.png";
import advantageBanner from "/images/advantageBanner.png";
import distributerImage from "/images/distributerImage.png";
import design1 from "/images/design1.png";
import design2 from "/images/design2.png";
import design3 from "/images/design3.png";
import design4 from "/images/design4.png";
import design5 from "/images/design5.png";
import design6 from "/images/design6.png";
import truck from "/images/truck.png";
import indicatorImage from "/images/indicatorImage.png";
import { DesignBox, FeatureBox } from "../../components/box";
import {
  AdvantageIcon,
  ExploreIcon,
  SummaryAddIcon,
  SummaryMinusIcon,
} from "../../components/icons";
import { TestimonalSlider } from "../../components/slick/TestimonalSlick";
import { ContainerCarousel } from "../../components/slick/ContainerCarousel";
import { Link, useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigateDistributor = () => {
    navigate("/distributorship", {
      state: { scrollTo: "distributorshipDetail-section" },
    }); // Pass state with scroll target
  };
  const featureBoxes = [
    {
      title: "Eco Friendly Assembly",
      img: featureIcon1,
      alt: "Eco Friendly Assembly",
      content:
        "Assembled with screws and nuts in 24 hours by just three workers, these container houses and offices ensure quick, efficient setup.",
    },
    {
      title: "Customizable Design",
      img: featureIcon2,
      alt: "Customizable Design",
      content:
        "Instant Container Houses and Offices offer fully customizable designs, tailored to meet specific needs and preferences.",
    },
    {
      title: "Quality Materials",
      img: featureIcon3,
      alt: "Quality Materials",
      content:
        "Crafted from rust-free, fire-resistant, and weatherproof materials, these container houses and offices offer long-lasting durability in any climate.",
    },
  ];

  const advantages = [
    "Cost-effective.",
    "Rust-free containers.",
    "Reduced transportation cost.",
    "Quick 24-hour assembly.",
    "High-quality, safe components.",
    "Customizable sizes to fit your needs.",
  ];

  const containerDesigns = [
    { img: design1, modelNumber: "MMI-3010" },
    { img: design2, modelNumber: "MMI-3020" },
    { img: design3, modelNumber: "MMI-3030" },
    { img: design4, modelNumber: "MMI-3040" },
    { img: design5, modelNumber: "MMI-3050" },
    { img: design6, modelNumber: "MMI-3060" },
  ];

  const testimonalData = [
    {
      rating: 4.5,
      content:
        "Our container office from Maatson was assembled in just a day, and it's perfect for our growing, business. The flexibility and modern design exceeded our expectations!",
      author: "-Ravi S., Chennai",
    },
    {
      rating: 4.5,
      content:
        "Our container office from Maatson was assembled in just a day, and it's perfect for our growing, business. The flexibility and modern design exceeded our expectations!",
      author: "-Ravi S., Chennai",
    },
  ];

  const question = [
    {
      summary: "What are the benefits of using container houses and offices?",
      detail:
        "Container houses and offices are cost-effective, eco-friendly, portable, and quick to assemble. They offer versatile living and working spaces that can be customized to fit your needs.",
      isOpen: false,
    },
    {
      summary: "Can I customize my container house or office?",
      detail:
        "Container houses and offices are cost-effective, eco-friendly, portable, and quick to assemble. They offer versatile living and working spaces that can be customized to fit your needs.",
      isOpen: false,
    },
    {
      summary: "Are container houses safe in extreme weather conditions?",
      detail:
        "Maatson container houses are built to withstand extreme weather conditions, ensuring safety and durability. Their robust design provides reliable shelter in any climate.",
      isOpen: false,
    },
    {
      summary: "Can I use my container office as a permanent workspace?",
      detail:
        "Yes, Maatson container offices are designed for long-term use, making them an ideal choice for a permanent and durable workspace.",
      isOpen: false,
    },
    {
      summary: "Is it possible to relocate a container house or office?",
      detail:
        "Yes, container houses and offices are fully relocatable. They can be easily assembled, disassembled, and moved to a new location as needed.",
      isOpen: false,
    },
    {
      summary: "How long does it take to build a container house or office?",
      detail:
        "Maatson container houses and offices can be assembled within 24 hours, offering a quick and efficient solution for your space needs.",
      isOpen: false,
    },
    {
      summary: "Can container houses and offices be eco-friendly?",
      detail:
        "Yes, Maatson container houses and offices are eco-friendly, crafted from durable galvanized steel, promoting sustainable and efficient construction practices.",
      isOpen: false,
    },
    {
      summary: "Do container houses require a foundation?",
      detail:
        "Container houses typically don't require a traditional foundation, especially for temporary setups. However, for permanent installations, a simple foundation like concrete blocks or steel beams may be used.",
      isOpen: false,
    },
  ];
  const [questionData, setQuestionData] = useState(question);

  const handleSummaryToggle = (index: number) => {
    setQuestionData((prev) =>
      prev.map((item, i) =>
        i === index
          ? { ...item, isOpen: !item.isOpen } // Toggle the isOpen property
          : item
      )
    );
  };
  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="hero flex flex-col gap-10">
          {/* HERO */}
          <div className="banner-section flex flex-col gap-3">
            {/* Hero-Banner */}
            <div className="relative py-4 flex flex-col gap-6">
              <div className="absolute inset-0 bg-[url('/images/heroBanner.png')] bg-cover  opacity-10"></div>
              <div className="min-h-20  lg:mt-5"></div>
              <div className="container mx-auto h-full py-3 flex flex-col gap-6 relative z-10">
                <div className="py-2 gap-4 flex flex-col text-center">
                  <div className="flex flex-col gap-1  text-5xl lg:text-6xl font-semibold">
                    <h1 className=" text-secondary font-robotoSlab">
                      Transform Your Space{" "}
                    </h1>
                    <span className="text-baseBlack">
                      {" "}
                      Instantly with Container Homes and Offices!
                    </span>
                  </div>
                  <p className="text-xl">
                    Experience customizable, sustainable, and durable container
                    homes that can be tailored for residences, offices, or guest
                    houses. Enjoy quick assembly, affordability, and endless
                    design possibilities with options for off-grid solutions and
                    nationwide delivery.
                  </p>
                  <div className="flex flex-col gap-3">
                    <div className="flex gap-4 items-center justify-center">
                      <Link to={"/enquiryform"} className="btn-primary">
                        Enquiry Now
                      </Link>
                      <Link to={"/models"} className="btn-primary-outline">
                        Explore Our Designs
                      </Link>
                    </div>
                    <p className="text-accent-400">
                      Easy assembly, ready fast! Contact us for details!
                    </p>{" "}
                  </div>
                </div>
                <div className="hidden gallery-desktop lg:flex justify-center items-center gap-5">
                  <div
                    className={`bg-[url('/images/gallery1.png')]  bg-cover bg-center w-[360px] h-[360px] flex-1 transition-all ease-in-out duration-700 rounded-[10px] p-2 hover:flex-[2] `}
                  ></div>
                  <div
                    className={`bg-[url('/images/gallery2.png')]  bg-cover bg-center w-[360px] h-[360px] flex-1 transition-all ease-in-out duration-700 rounded-[10px] p-2  hover:flex-[2] `}
                  ></div>
                  <div
                    className={`bg-[url('/images/gallery3.png')] bg-cover bg-center w-[360px] h-[360px] flex-1 transition-all ease-in-out duration-700 rounded-[10px] p-2 hover:flex-[2] `}
                  ></div>
                  <div
                    className={`bg-[url('/images/gallery4.png')] bg-cover bg-center w-[360px] h-[360px] flex-1 transition-all ease-in-out duration-700 rounded-[10px] p-2 hover:flex-[2]`}
                  ></div>
                  <div
                    className={`bg-[url('/images/gallery5.png')]  bg-cover bg-center w-[360px] h-[360px] flex-1 transition-all ease-in-out duration-700 rounded-[10px] p-2 hover:flex-[2] `}
                  ></div>
                </div>
                <div className="lg:hidden px-2">
                  <ContainerCarousel
                    data={[gallery1, gallery2, gallery3, gallery4, gallery5]}
                  />
                </div>
              </div>
            </div>
            {/* features */}
            <div className="features py-4 gap-8 flex flex-col container mx-auto text-baseBlack text-center">
              <div className="flex flex-col gap-4">
                <p className="text-primary-700 font-semibold text-2xl font-robotoSlab">
                  Features
                </p>
                <h3 className="text-3xl md:text-4xl">
                  Why Choose Our Container Homes And Office
                </h3>
              </div>
              <div className="flex flex-wrap lg:grid lg:grid-cols-3 items-center gap-8 justify-center">
                {featureBoxes.map((item) => (
                  <FeatureBox
                    key={item.title}
                    img={item.img}
                    title={item.title}
                    content={item.content}
                    alt={item.alt}
                  />
                ))}
              </div>
            </div>
          </div>
          {/* ADVANTAGES */}
          <div className="advantages grid grid-cols-1 lg:grid-cols-2 container mx-auto items-center justify-center gap-10">
            <div className={`flex items-center justify-center `}>
              <img
                src={advantageBanner}
                alt="advantage-Banner"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col gap-8 items-center lg:justify-between ">
              <div className="flex flex-col gap-4">
                <p className="text-primary-700 font-semibold text-2xl text-center  font-robotoSlab ">
                  Advantages
                </p>
                <h3 className="text-3xl md:text-4xl text-baseBlack text-center">
                  Why Choose Our Container Homes And Office
                </h3>{" "}
              </div>
              <div className="flex flex-col gap-2 text-2xl">
                {advantages.map((item: string) => (
                  <IconTextBox icon={<AdvantageIcon />} text={item} />
                ))}
              </div>
            </div>
          </div>
          {/* DISTRIBUTOR */}
          <div className="distributor gap-8 flex flex-col container mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-10 px-6 py-4 bg-primary-900 text-white rounded-2xl">
              <div className="flex flex-col gap-6 text-center w-full lg:w-2/3">
                <div className="flex flex-col gap-3 justify-center">
                  <h3 className="text-3xl md:text-4xl">
                    Become a Distributer of Maatson
                  </h3>
                  <p className="text-2xl">container House / Office in India </p>
                </div>
                <div className="flex flex-col gap-6">
                  <p className="text-3xl text-primary-100">
                    No Deposit ,No Advance Required!{" "}
                  </p>
                  <div>
                    <button
                      className="btn-secondary-yellow "
                      onClick={handleNavigateDistributor}
                    >
                      View Distributor Details
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full  lg:w-1/3">
                <img
                  src={distributerImage}
                  alt="distributor"
                  className=" w-full"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-6 py-4 text-white rounded-2xl">
              <div className="w-full md:w-1/3 flex justify-center">
                <img src={truck} alt="truck" />
              </div>
              <div className="flex flex-col gap-6 text-center w-full lg:w-2/3">
                <p className="text-primary-700 font-semibold text-2xl text-center  font-robotoSlab ">
                  Loading Capacity
                </p>
                <h3 className="text-3xl md:text-4xl text-baseBlack">
                  A 32ft Closed Container Truck can hold 7 SET OF Assembly
                  Containers{" "}
                </h3>{" "}
                <p className="text-neutral-1000 font-semibold text-3xl">
                  Save Transportation Cost
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* DESIGNS */}
        <div className="designs bg-neutral-100">
          <div className="container mx-auto py-4 gap-8 flex flex-col ">
            {" "}
            <div className="flex flex-col gap-6 text-center">
              <p className="text-primary-700 font-semibold text-2xl   font-robotoSlab ">
                Our Designs
              </p>
              <h3 className="text-3xl md:text-4xl text-baseBlack ">
                Explore our innovative container house and office designs,
                crafted for versatility, sustainability, and modern living
                solutions{" "}
              </h3>{" "}
            </div>
            <div className="flex flex-col gap-3">
              {" "}
              <div className="grid grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3 gap-6">
                {containerDesigns.map((item) => (
                  <DesignBox
                    modelNumber={item.modelNumber}
                    img={item.img}
                    alt={item.modelNumber}
                  />
                ))}
              </div>
              <div className="flex items-center justify-center gap-3 cursor-pointer">
                <Link
                  to={"/models"}
                  className="text-center text-primary font-semibold px-4 py-3 "
                >
                  Explore More
                </Link>
                <ExploreIcon size={16} />
              </div>
            </div>
          </div>
        </div>
        {/* TESTIMONALS */}
        <div className="flex flex-col text-center container mx-auto gap-6">
          <p className="text-primary-700 font-semibold text-2xl   font-robotoSlab ">
            Testimonials
          </p>
          <div className="flex flex-col lg:flex-row justify-center items-center container mx-auto gap-16">
            <div className="flex flex-col gap-6 h-full">
              <h3 className="text-4xl md:text-5xl font-semibold text-baseBlack ">
                Discover the Experiences of Our Satisfied Clients!
              </h3>
              <p className="text-2xl font-semibold">
                {" "}
                Get inspired by the experiences of clients who chose Maatson for
                their container living and working needs.
              </p>
              <div className="flex items-center justify-center">
                <img src={indicatorImage} alt="" />
              </div>
            </div>
            <div className="slickCarosoul h-96 w-[300px] px-2 ">
              <TestimonalSlider data={testimonalData} />
            </div>
          </div>
        </div>
        {/* FREQUENTLY ASKED QUESTIONS */}
        <div className="flex flex-col gap-10 py-4 container mx-auto">
          <div className="flex flex-col gap-6 text-center">
            <p className="text-primary-700 font-semibold text-2xl   font-robotoSlab ">
              Frequently Asked Questions{" "}
            </p>
            <h3 className="text-3xl md:text-4xl text-baseBlack font-semibold">
              Your Essential Guide to Maatson Instant Homes and Offices:
              <span className="block">Answers to Common Queries</span>
            </h3>{" "}
          </div>
          <div className="max-w-[850px] w-full mx-auto flex flex-col gap-4">
            {questionData.map((item, index) => (
              <QuestionBox
                summary={item.summary}
                detail={item.detail}
                index={index + 1}
                isOpen={item.isOpen}
                toggleSummary={() => handleSummaryToggle(index)}
              />
            ))}
          </div>
          <div className="flex flex-col gap-6 text-center">
            <h3 className="md:text-2xl text-baseBlack  font-semibold">
              Transform Your Space with Maatson’s Instant Homes and Offices!
              <span className="block">
                {" "}
                Contact Us Now to Bring Your Vision to Life—Affordable,
                Portable, and Tailored to Your Needs!
              </span>
            </h3>{" "}
            <div>
              <Link to={"/contact"} className="btn-primary">
                Contact Now
              </Link>
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

const IconTextBox: React.FC<{
  icon: React.ReactNode;
  text: string;
  className?: string;
}> = ({ icon, text, className }) => {
  return (
    <>
      <div
        className={`flex px-4 py-3 gap-4 items-center text-accent ${className}`}
      >
        <div className="">{icon}</div>
        <p>{text}</p>
      </div>
    </>
  );
};

const QuestionBox: React.FC<{
  summary: string;
  detail: string;
  index: number;
  isOpen: boolean;
  className?: string;
  toggleSummary: () => void;
}> = ({ summary, detail, className, index, isOpen, toggleSummary }) => {
  return (
    <>
      <div
        className={`flex p-4 gap-4 items-center border-2  justify-between rounded-md shadow-primary-sd border-primary-100 text-baseBlack ${className}`}
      >
        <p className="text-secondary-900 text-4xl">
          {index > 9 ? index : `0${index}`}
        </p>{" "}
        <div className="flex items-center  gap-2 justify-between w-full">
          <div className="flex flex-col ">
            <h4 className="font-semibold md:text-2xl  ">{summary}</h4>
            {isOpen && (
              <>
                <div className="h-[2px] bg-primary-600 my-2"></div>
                <p>{detail}</p>
              </>
            )}
          </div>
        </div>
        <div className="cursor-pointer" onClick={toggleSummary}>
          {isOpen ? <SummaryMinusIcon /> : <SummaryAddIcon />}
        </div>
      </div>
    </>
  );
};

export default Home;
