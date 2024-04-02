// MenuItem.js

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";

const MenuItem = ({ route, isOpen, showAnimation, setIsOpen }) => {
  const location = useLocation();
  const isActive = location.pathname === route.path;
  return (
    <NavLink
      to={route.path}
      className={`flex items-center text-white gap-2.5 py-1.5 px-2.5 border-r-4 border-solid border-transparent transition duration-200 ease-custom hover:transition hover:duration-200 hover:ease-custom hover:border-[#2ab42a] hover:text-[#2ab42a]`}
      onClick={() => setIsOpen(false)}
    >
      <div className={`${isActive ? "text-[#2ab42a]" : ""} `}>{route.icon}</div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={showAnimation}
            initial="hidden"
            animate="show"
            exit="hidden"
            className={`${
              isActive
                ? "text-[#2ab42a] whitespace-nowrap"
                : "whitespace-nowrap"
            } `}
          >
            {route.name}
          </motion.div>
        )}
      </AnimatePresence>
    </NavLink>
  );
};

export default MenuItem;
