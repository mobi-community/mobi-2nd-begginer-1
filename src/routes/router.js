import { createBrowserRouter } from "react-router-dom";
import ManageMember from "../pages/manage_member";
import ManageProduct from "../pages/manage_product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ManageMember />,
  },
  {
    path: "/product",
    element: <ManageProduct />,
  },
]);

export default router;
