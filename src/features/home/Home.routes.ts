import type { RouteRecordRaw } from "vue-router";
import HomeView from "./HomeView.vue";
import { namedRoute } from "@/router/INamedRoute";

const homePageRouteName = "home";

export const homeRoute = namedRoute(homePageRouteName);

export const homeRoutes: RouteRecordRaw = {
  path: "/",
  name: homePageRouteName,
  component: HomeView,
};
