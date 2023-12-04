import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import Admin from "../page/admin-toggle-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Admin />,
  },
]);

export default router;
