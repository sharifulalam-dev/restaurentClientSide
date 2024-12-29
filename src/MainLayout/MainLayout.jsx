import { Outlet } from "react-router-dom";
import Footer from "./../Components/Footer";
import Navbar from "./../Components/Navbar";
export default function MainLayout() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto overflow-x-hidden">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
