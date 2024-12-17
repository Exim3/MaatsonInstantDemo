// utils/aosUtils.ts

import AOS from "aos";
import "aos/dist/aos.css";

const initializeAOS = (options = {}) => {
  AOS.init({
    duration: 1000, // Default duration for animations
    offset: 200, // Trigger when element is 200px away
    once: true, // Trigger animation only once
    mirror: true, // Trigger animation when scrolling back up
    ...options, // Merge with any custom options passed
  });
};

const refreshAOS = () => {
  AOS.refresh();
};

export { initializeAOS, refreshAOS };
