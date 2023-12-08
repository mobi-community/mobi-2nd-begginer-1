import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import Admin from "../page/admin-toggle-page";
import Layout from "../layout/layout";
import MemberRegister from "../page/member-register";
import ProductManagement from "../page/product-management";
import ProductRegister from "../page/product-register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/member-list",
        element: <Admin />,
      },
      {
        path: "/member-register",
        element: <MemberRegister />,
      },
      {
        path: "/product-list",
        element: <ProductManagement />,
      },
      {
        path: "/product-register",
        element: <ProductRegister />,
      },
    ],
  },
]);

export default router;
