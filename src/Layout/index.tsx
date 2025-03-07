import { Outlet, useLocation } from "react-router";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

const Layout = () => {
  const location = useLocation();
  const islogin = location.pathname === "/login";
  return (
    <>
      {!islogin && <Navbar />}
      <Outlet />
      {!islogin && <Footer />}
    </>
  );
};
export default Layout;
