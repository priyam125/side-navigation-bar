// InputSearch.js

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiSearch } from "react-icons/bi";

const InputSearch = ({ isOpen }) => {
  const inputAnimation = {
    hidden: { width: 0, padding: 0, transition: { duration: 0.2 } },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="flex items-center my-6 mx-0 h-7 p-2.5">
      <div className="search_icon">
        <BiSearch />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.input
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={inputAnimation}
            type="text"
            placeholder="Search"
            className="border-none ml-2.5 rounded bg-[#333333] text-white"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default InputSearch;
