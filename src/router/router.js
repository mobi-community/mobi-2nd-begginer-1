import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import Admin from "../page/admin-toggle-page";
import Layout from "../layout/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/admin",
        element: <Admin />,
      },
    ],
  },
]);

export default router;
