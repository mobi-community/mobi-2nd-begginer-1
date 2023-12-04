import { createBrowserRouter } from "react-router-dom";
import AdminTogglePage from "../AdminTogglePage";
import AfterDetailPage from "../Q3/one/after";
import ModeTogglePage from "../Q3/two";
import AfterLoginPage from "../Q3/three/after";

const router = createBrowserRouter([
  {
    path: "/",
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
]);

export default router;
