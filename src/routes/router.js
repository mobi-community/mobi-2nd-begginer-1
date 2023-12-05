import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import ManageMember from "../pages/manage_member";
import ManageMembers from "../pages/member";
import ManageProducts from "../pages/product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/member",
        element: <ManageMembers />,
      },
      {
        path: "/product",
        element: <ManageProducts />,
      },
    ],
  },
]);

export default router;
