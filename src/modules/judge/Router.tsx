import { RouteObject } from "react-router";

import dashboardRoutes from "./dashboard/Router";

export default [
  {
    path: "/judge",
    children: [...dashboardRoutes],
  },
] as RouteObject[];
