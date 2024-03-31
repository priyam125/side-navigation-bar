import "./App.css";
import SideBar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="bg-black h-screen text-white flex">
      <SideBar />
      <main className="ml-20">Hero</main>
    </div>
  );
}

export default App;
