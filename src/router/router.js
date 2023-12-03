import { createBrowserRouter } from "react-router-dom";
import AdminTogglePage from "../AdminTogglePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminTogglePage />,
  },
]);

export default router;
