import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import { FiHome } from "react-icons/fi";
import { CgOrganisation } from "react-icons/cg";
import { HiOutlineCube } from "react-icons/hi";
import { BiWallet } from "react-icons/bi";
import logo from "../../assets/logo.png";

const routes = [
  {
    path: "/",
    name: "Home",
    icon: <FiHome />,
  },
  {
    path: "/users",
    name: "Organisation",
    icon: <CgOrganisation />,
  },
  {
    path: "/messages",
    name: "Assets",
    icon: <HiOutlineCube />,
  },
  {
    path: "/analytics",
    name: "Wallet",
    icon: <BiWallet />,
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      // width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      // width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.3,
              type: "smooth",
              damping: 10,
            },
          }}
          className="bg-[#1a1e1c] text-white h-screen overflow-y-auto"
        >
          <div className="flex items-center justify-between py-4 px-2.5">
            <AnimatePresence>
              {isOpen && (
                <motion.img
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="h-8 w-28"
                  src={logo}
                  height={100}
                  width={20}
                />
              )}
            </AnimatePresence>

            <div className="w-7">
              <FaBars onClick={toggle} />
            </div>
          </div>
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
          <section className="mt-4 flex flex-col gap-2">
            {routes.map((route, index) => {
              console.log(routes);
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="flex text-white gap-2.5 py-1.5 px-2.5 border-r-4 border-solid border-transparent transition duration-200 ease-custom hover:transition hover:duration-200 hover:ease-custom hover:border-white hover:bg-[#2d3359]
                  "
                  activeclassname="border-r-4 border-solid border-white"
                >
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
                </NavLink>
              );
            })}
          </section>
        </motion.div>
      </div>
    </>
  );
};

export default SideBar;
