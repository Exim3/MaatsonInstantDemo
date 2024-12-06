import React from "react";
import Header from "../../components/header";
import { Outlet } from "react-router";
import Footer from "../../components/footer";

const LandingPage: React.FC = () => {
  return (
    <>
      <div className=" bg-white font-roboto flex flex-col gap-6">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
