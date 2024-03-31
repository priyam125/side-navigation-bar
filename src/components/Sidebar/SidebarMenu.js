import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const SidebarMenu = ({ route, showAnimation, isOpen, setIsOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsOpen(true);
  };

  useEffect(() => {
    if (!isOpen) {
      setIsMenuOpen(false);
    }
  }, [isOpen]);
  return (
    <>
      <div
        className="flex text-white py-1.5 px-2.5 border-r-4 border-solid border-transparent transition duration-200 ease-custom justify-between"
        onClick={toggleMenu}
      >
        <div className="flex gap-2.5">
          <div className="icon">{route.icon}</div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                variants={showAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="whitespace-nowrap"
              >
                {route.name}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default SidebarMenu;
