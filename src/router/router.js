import { createBrowserRouter } from "react-router-dom";
import AfterDetailPage from "../Q3/one/after";
import ModeTogglePage from "../Q3/two";
import AfterLoginPage from "../Q3/three/after";
import { ButtonPage } from "../Q3/four";
import AdminTogglePage from "../AdminTogglePage";

const router = createBrowserRouter([
  {
    path: "/admin",
    element: <AdminTogglePage />,
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
  {
    path: "/admin",
    element: <AdminTogglePage />,
  },
]);

export default router;
