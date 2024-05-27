import { Outlet } from "react-router-dom";
import Navber from "../components/shered/Navber";
import Footer from "../components/shered/Footer/Footer";

export default function MainLayout() {
  return (
    <div>
      <Navber />
      <Outlet />
      <Footer />
    </div>
  );
}
