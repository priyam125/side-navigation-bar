import "./App.css";
import SideBar from "./components/Sidebar";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <div className="bg-black h-screen text-white flex">
      <SideBar />
      <main className="ml-20">{location.pathname.toUpperCase().slice(1)}</main>
    </div>
  );
}

export default App;
