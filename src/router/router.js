import { createBrowserRouter } from "react-router-dom";
import AfterDetailPage from "../Q3/one/after";
import ModeTogglePage from "../Q3/two";
import AfterLoginPage from "../Q3/three/after";
import { ButtonPage } from "../Q3/four";
import SideMenuLayout from "../layout/SideMenu.js";
import UserListPage from "../page/UserListPage.js";
import UserRegisterPage from "../page/UserRegisterPage.js";
import ItemListPage from "../page/ItemListPage.js";
import ItemRegisterPage from "../page/ItemRegisterPage.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SideMenuLayout />,
    children: [
      {
        path: "/user/list",
        element: <UserListPage />,
      },
      {
        path: "/user/register",
        element: <UserRegisterPage />,
      },
      {
        path: "/item/list",
        element: <ItemListPage />,
      },
      {
        path: "/item/register",
        element: <ItemRegisterPage />,
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
