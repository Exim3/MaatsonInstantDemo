import React from "react";
import {
  EmailIcon,
  FaceBookIcon,
  InstagramIcon,
  LinkedInIcon,
  PhoneIcon,
  TelephoneIcon,
  TwitterIcon,
  YouTubeIcon,
} from "../icons";
import logo from "/images/logo.png";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <>
      <div>
        <div className="bg-[#B8BFE9]  flex flex-col   py-4 gap-4">
          <div className="grid grid-cols-1 md:grid-cols-4  gap-2  container mx-auto items-start text-center  lg:text-start justify-center   ">
            <div className="flex flex-col items-center lg:items-start gap-4">
              <div>
                <img src={logo} alt="Logo" />
              </div>
            </div>
            <div className="flex flex-col gap-4 w-full">
              <h3 className="font-semibold text-xl">Contact</h3>
              <div className="flex flex-col gap-3 w-full">
                <div className="flex gap-3 items-center justify-center lg:justify-start">
                  <PhoneIcon size={20} color="#232D70" />
                  <p>+91 90030 52529</p>
                </div>
                <div className="flex gap-3 items-center justify-center lg:justify-start">
                  <TelephoneIcon size={20} color="#232D70" />
                  <p>+91 44 7965 5171</p>
                </div>
                <div className="flex gap-1 items-center justify-center lg:justify-start">
                  <span>
                    {" "}
                    <EmailIcon size={20} color="#232D70" />
                  </span>
                  <p>sales@maatson.com</p>
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-xl">Quick Actions</h3>
              <div className="flex flex-col gap-3">
                <Link to={"/"}>Home</Link>
                <Link to={"models"}>Our Models</Link>
                <Link to={"about"}>About Us</Link>
                <Link to={"contact"}>Contact Us</Link>
              </div>
            </div>
            <div className="flex  flex-col gap-4">
              <h3 className="font-semibold text-xl">Socials</h3>
              <div className="flex flex-col w-full gap-3">
                <div className="flex gap-3 items-center justify-center lg:justify-start">
                  <YouTubeIcon size={20} color="#232D70" />
                  <a
                    href="https://www.youtube.com/@MAATSONMARITIME"
                    target="_blank"
                  >
                    <p>Youtube</p>
                  </a>
                </div>
                <div className="flex gap-3 items-center justify-center lg:justify-start">
                  <LinkedInIcon size={20} color="#232D70" />
                  <a
                    href="https://www.linkedin.com/company/maatsonmaritime/"
                    target="_blank"
                  >
                    <p>LinkedIn</p>
                  </a>
                </div>
                <div className="flex gap-3 justify-center items-center lg:justify-start">
                  <InstagramIcon size={20} color="#232D70" />
                  <a
                    href="https://www.instagram.com/maatson_maritime?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                  >
                    {" "}
                    <p>Instagram</p>
                  </a>
                </div>
                <div className="flex gap-3 items-center justify-center lg:justify-start">
                  <FaceBookIcon size={20} color="#232D70" />
                  <a
                    href="https://www.facebook.com/profile.php?id=61566622751970&mibextid=ZbWKwL"
                    target="_blank"
                  >
                    {" "}
                    <p>Facebook</p>
                  </a>
                </div>
                <div className="flex gap-3 items-center justify-center lg:justify-start">
                  <TwitterIcon size={20} color="#232D70" />
                  <p>X (twitter)</p>
                </div>
              </div>
            </div>{" "}
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-1 text-[#121212] font-semibold">
            <Link
              className="px-2 md:border-r-4 md:border-[#0F1432]"
              to={"/termsandconditions"}
            >
              Terms And Conditions
            </Link>
            <Link
              className="px-2 md:border-r-4 md:border-[#0F1432]"
              to={"/privacypolicy"}
            >
              Privacy Policy
            </Link>
            <Link className="px-2" to={"cookiepolicy"}>
              Cookie Policy
            </Link>
          </div>
        </div>
        <div className="bg-primary text-white text-center py-4">
          @2024. Maatson All Rights Received
        </div>
      </div>
    </>
  );
};

export default Footer;
