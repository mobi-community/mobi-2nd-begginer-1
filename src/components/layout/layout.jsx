import { Outlet } from "react-router-dom";
import SliceToggle from "./slideToggle";

const Layout = () => {
  return (
    <>
      <SliceToggle />
      <Outlet />
    </>
  );
};
export default Layout;
