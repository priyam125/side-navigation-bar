import { FiHome } from "react-icons/fi";
import { CgOrganisation } from "react-icons/cg";
import { HiOutlineCube } from "react-icons/hi";
import { BiWallet } from "react-icons/bi";

const routes = [
  { path: "/", name: "Home", icon: <FiHome /> },
  { path: "/organisation", name: "Organisation", icon: <CgOrganisation /> },
  { path: "/assets", name: "Assets", icon: <HiOutlineCube /> },
  { path: "/wallet", name: "Wallet", icon: <BiWallet /> },
];

export default routes;
