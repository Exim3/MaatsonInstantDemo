import React, { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop: React.FC = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location]);

  return null;
};

export default ScrollToTop;
