import { createBrowserRouter } from "react-router-dom";
import AfterDetailPage from "../Q3/one/after";
import ModeTogglePage from "../Q3/two";
import AfterLoginPage from "../Q3/three/after";
import { ButtonPage } from "../Q3/four";
import AdminTogglePage from "../page/AdminTogglePage";
import MainPage from "../MainPage";
import SideMenuLayout from "../layout/SideMenu.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SideMenuLayout />,
    children: [
      {
        path: "/admin",
        element: <AdminTogglePage />,
      },
    ],
  },
  {
    path: "/ex/1",
    element: <AfterDetailPage />,
  },
  {
    path: "/ex/2",
    element: <ModeTogglePage />,
  },
  {
    path: "/ex/3",
    element: <AfterLoginPage />,
  },
  {
    path: "/ex/4",
    element: <ButtonPage />,
  },
]);

export default router;
