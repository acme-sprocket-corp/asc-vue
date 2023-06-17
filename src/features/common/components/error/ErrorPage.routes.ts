import type { RouteRecordRaw } from "vue-router";
import ErrorPage from "./ErrorPage.vue";
import { namedRoute } from "@/router/INamedRoute";

const errorPageRouteName = "error";

export const errorRoute = namedRoute(errorPageRouteName);

export const errorPageRoutes: RouteRecordRaw = {
  path: "/error",
  name: errorPageRouteName,
  component: ErrorPage,
};
