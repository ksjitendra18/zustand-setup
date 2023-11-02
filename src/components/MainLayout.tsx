import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Toaster position="top-center" />
      <main className="max-w-7xl mx-auto px-3">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
