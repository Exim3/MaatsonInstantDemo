import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const LandingPage = lazy(() => import("./pages/landingPage"));
const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const Contact = lazy(() => import("./pages/contact"));
const Distributorship = lazy(() => import("./pages/distributorship"));
const Models = lazy(() => import("./pages/models"));
const Enquiry = lazy(() => import("./pages/enquiry"));

const AllRoutes: React.FC = () => {
  return (
    <>
      <Suspense
        fallback={
          <div className="flex justify-center items-center min-h-screen">
            <div className="w-10 h-10 border-4 border-primary border-t-transparent border-solid rounded-full animate-spin"></div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<LandingPage />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="distributorship" element={<Distributorship />} />
            <Route path="models" element={<Models />} />
          </Route>
          <Route path="/enquiryform" element={<Enquiry />}></Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default AllRoutes;
