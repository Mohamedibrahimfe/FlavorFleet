import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <ToastContainer />
    </>
  );
};

export default Layout;
