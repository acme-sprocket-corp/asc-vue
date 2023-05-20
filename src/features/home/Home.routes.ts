import type { RouteRecordRaw } from "vue-router";
import HomeView from "./HomeView.vue";
import { namedRoute } from "@/router/INamedRoute";

const name = "home";

export const homeRoute = namedRoute(name);

export default function homeRoutes(): RouteRecordRaw {
  return {
    path: "/",
    name,
    component: HomeView,
  };
}
