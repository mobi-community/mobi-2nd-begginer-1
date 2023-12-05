import { Outlet } from "react-router-dom";
import ToggleButton from "./toggle_btn";

const Layout = () => {
  return (
    <>
      <ToggleButton />
      <Outlet />
    </>
  );
};

export default Layout;
