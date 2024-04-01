import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
import InputSearch from "./InputSearch";
import MenuItem from "./MenuItem";
import logo from "../assets/logo.png";
import routes from "../utils/routes";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const showAnimation = {
    hidden: { width: 0, opacity: 0, transition: { duration: 0.5 } },
    show: { opacity: 1, width: "auto", transition: { duration: 0.5 } },
  };

  return (
    <div className="main-container">
      <motion.div
        animate={{
          width: isOpen ? "200px" : "45px",
          transition: { duration: 0.3, type: "tween" },
        }}
        className="bg-[#1a1e1c] text-white h-screen overflow-y-auto"
      >
        <div className="flex items-center justify-between py-4 px-2.5">
          {isOpen && (
            <img
              className="h-8 w-28"
              src={logo}
              height={100}
              width={20}
              alt="logo"
            />
          )}
          <div className="w-7 cursor-pointer">
            <FaBars onClick={toggle} />
          </div>
        </div>
        <InputSearch isOpen={isOpen} />
        <section className="mt-4 flex flex-col gap-2">
          {routes.map((route, index) => (
            <MenuItem
              key={index}
              route={route}
              isOpen={isOpen}
              showAnimation={showAnimation}
            />
          ))}
        </section>
      </motion.div>
    </div>
  );
};

export default SideBar;
