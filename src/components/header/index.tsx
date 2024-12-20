import React, { useEffect, useRef, useState } from "react";
import logo from "/images/logo.png";
import { NavLink } from "react-router-dom";
import { HamburgerIcon } from "../icons";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isHamburgerShow, setHamburgerShow] = useState<boolean>(false);
  const hamburgerRef = useRef<HTMLUListElement | null>(null);
  const closeHamburger = () => {
    setHamburgerShow(false);
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target as Node)
      ) {
        closeHamburger();
      }
    };

    // Add the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div className=" fixed container mx-auto  top-5 lg:top-10 min-h-20 right-0 left-0  z-20">
        <nav className="shadow-primary-sd  relative flex  justify-between items-center px-3 py-2 rounded-2xl backdrop-blur-sm  bg-opacity-20">
          <Link to={"/"}>
            <img src={logo} alt="Logo" />
          </Link>
          <div className="flex items-center gap-2 ">
            <ul className="hidden lg:flex items-center gap-2 px-2 py-2 font-semibold bg-white rounded-md ">
              {/* Home Link */}
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "border-l-4 border-primary text-primary  px-4 py-2"
                    : "border-l-4 border-white hover:border-primary hover:text-primary hover:bg-primary-to-white px-4 py-2 transition-all  duration-700 ease-in-out"
                }
              >
                Home
              </NavLink>

              {/* Distributorship Link */}
              <NavLink
                to={"/distributorship"}
                className={({ isActive }) =>
                  isActive
                    ? "border-l-4 border-primary text-primary  px-4 py-2"
                    : "border-l-4 border-white hover:border-primary hover:text-primary hover:bg-primary-to-white px-4 py-2 transition-all  duration-700 ease-in-out"
                }
              >
                Distributorship
              </NavLink>

              {/* Our Models Link */}
              <NavLink
                to={"/models"}
                className={({ isActive }) =>
                  isActive
                    ? "border-l-4 border-primary text-primary  px-4 py-2"
                    : "border-l-4 border-white hover:border-primary hover:text-primary hover:bg-primary-to-white px-4 py-2 transition-all  duration-700 ease-in-out"
                }
              >
                Our Models
              </NavLink>

              {/* About Us Link */}
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  isActive
                    ? "border-l-4 border-primary text-primary  px-4 py-2"
                    : "border-l-4 border-white hover:border-primary hover:text-primary hover:bg-primary-to-white px-4 py-2 transition-all  duration-700 ease-in-out"
                }
              >
                About Us
              </NavLink>

              {/* Contact Us Link */}
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  isActive
                    ? "border-l-4 border-primary text-primary  px-4 py-2"
                    : "border-l-4 border-white hover:border-primary hover:text-primary hover:bg-primary-to-white px-4 py-2 transition-all  duration-700 ease-in-out"
                }
              >
                Contact Us
              </NavLink>

              {/* Inquire Now Button */}
              <Link to={"/enquiryform"} className="btn-primary px-4 py-2 ">
                Enquire Now
              </Link>
            </ul>

            {/* mobile view */}
            <div className="lg:hidden   rounded-2xl flex items-center gap-4 justify-center px-3 py-2 bg-white">
              <span
                onClick={() => setHamburgerShow((prev) => !prev)}
                className={`  p-3 `}
              >
                <HamburgerIcon size={20} />
              </span>
              <Link
                className="hidden sm:block btn-primary px-4 py-2 "
                to={"/enquiryform"}
              >
                Enquire Now
              </Link>
              {isHamburgerShow && (
                <ul
                  ref={hamburgerRef}
                  onClick={closeHamburger}
                  className="absolute top-full right-5 rounded-lg shadow-tertiary-sd px-4 py-3 max-w-[180px] bg-white flex flex-col w-full border"
                >
                  {/* Home Link */}
                  <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                      isActive
                        ? "border-l-4 border-primary text-primary  px-4 py-2"
                        : "border-l-4 border-white hover:border-primary hover:text-primary hover:bg-primary-to-white px-4 py-2 transition-all  duration-700 ease-in-out"
                    }
                  >
                    Home
                  </NavLink>

                  {/* Distributorship Link */}
                  <NavLink
                    to={"/distributorship"}
                    className={({ isActive }) =>
                      isActive
                        ? "border-l-4 border-primary text-primary  px-4 py-2"
                        : "border-l-4 border-white hover:border-primary hover:text-primary hover:bg-primary-to-white px-4 py-2 transition-all  duration-700 ease-in-out"
                    }
                  >
                    Distributorship
                  </NavLink>

                  {/* Our Models Link */}
                  <NavLink
                    to={"/models"}
                    className={({ isActive }) =>
                      isActive
                        ? "border-l-4 border-primary text-primary  px-4 py-2"
                        : "border-l-4 border-white hover:border-primary hover:text-primary hover:bg-primary-to-white px-4 py-2 transition-all  duration-700 ease-in-out"
                    }
                  >
                    Our Models
                  </NavLink>

                  {/* About Us Link */}
                  <NavLink
                    to={"/about"}
                    className={({ isActive }) =>
                      isActive
                        ? "border-l-4 border-primary text-primary  px-4 py-2"
                        : "border-l-4 border-white hover:border-primary hover:text-primary hover:bg-primary-to-white px-4 py-2 transition-all  duration-700 ease-in-out"
                    }
                  >
                    About Us
                  </NavLink>

                  {/* Contact Us Link */}
                  <NavLink
                    to={"/contact"}
                    className={({ isActive }) =>
                      isActive
                        ? "border-l-4 border-primary text-primary  px-4 py-2"
                        : "border-l-4 border-white hover:border-primary hover:text-primary hover:bg-primary-to-white px-4 py-2 transition-all duration-700 ease-in-out"
                    }
                  >
                    Contact Us
                  </NavLink>
                </ul>
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
