import {RouteObject} from "react-router";

import dashboardRoutes from "./dashboard/Router";

import usersRoutes from "./users/Router";

export default [
  {
    path: "/admin",
    children: [...dashboardRoutes, ...usersRoutes],
  },
] as RouteObject[];
