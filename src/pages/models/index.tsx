import React from "react";
import Banner from "../../components/banner/Banner";
import modelBanner from "/images/modelBanner.png";
import model1 from "/images/model1.png";
import model2 from "/images/model2.png";
import model3 from "/images/model3.png";
import model4 from "/images/model4.png";
import model5 from "/images/model5.png";
import model6 from "/images/model6.png";
import model7 from "/images/model7.png";
import model8 from "/images/model8.png";
import model9 from "/images/model9.png";
import model10 from "/images/model10.png";
import model11 from "/images/model11.png";
import model12 from "/images/model12.png";
import model13 from "/images/model13.png";
import model14 from "/images/model14.png";
import model15 from "/images/model15.png";
import model16 from "/images/model16.png";
import ModelCard from "../../components/card/ModelCard";

const Models: React.FC = () => {
  const cards = [
    { image: model1, modelNumber: "3010", usages: "House, Offices" },
    { image: model2, modelNumber: "3020", usages: "House, farm house" },
    { image: model3, modelNumber: "3030", usages: "Office, Restaurant" },
    { image: model4, modelNumber: "3040", usages: "House, Restaurant" },
    { image: model5, modelNumber: "3050", usages: "Office, Row House" },
    {
      image: model6,
      modelNumber: "3060",
      usages: "Office, Restaurant, Hotels",
    },
    {
      image: model7,
      modelNumber: "3070",
      usages: "Restaurant, Hills Resort, House, Farm House",
    },
    { image: model8, modelNumber: "3080", usages: "Farm House, House, Office" },
    { image: model9, modelNumber: "3090", usages: "House, Offices" },
    {
      image: model10,
      modelNumber: "4010",
      usages: "Office, Hotels, Hills Resort",
    },
    { image: model11, modelNumber: "4020", usages: "House, Offices" },
    {
      image: model12,
      modelNumber: "4030",
      usages: "Office, Resort, Hotels, Restaurant",
    },
    { image: model13, modelNumber: "4040", usages: "Office, House" },
    {
      image: model14,
      modelNumber: "4050",
      usages: "Office, Resort, Hotels, Restaurant",
    },
    {
      image: model15,
      modelNumber: "4060",
      usages: "Office, Resort, Row House",
    },
    { image: model16, modelNumber: "4070", usages: "House, Hotels, Resort" },
  ];

  return (
    <>
      <Banner
        title={"Explore Our Models"}
        content={
          "Discover our range of innovative container designs, where each model combines style and functionality to meet your needs. Whether you're looking for a cozy home or a versatile office space, we have the perfect solution for you. If you have any custom design ideas, share them with us, and we will modify the design just for you. Browse our collection and find the design that inspires you! Submit your requirements in the form below, and let us help you bring your vision to life!"
        }
        imageLink={modelBanner}
      />
      <div className="container mx-auto   grid grid-cols-1 gap-6">
        {cards.map((item) => (
          <ModelCard
            image={item.image}
            modelNumber={item.modelNumber}
            usages={item.usages}
          />
        ))}
      </div>
    </>
  );
};

export default Models;
