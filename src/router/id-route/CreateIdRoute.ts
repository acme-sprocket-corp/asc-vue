import type { RouteRecordRaw } from "vue-router";
import routeToId from "./RouteToId";
import type { Component } from "vue";

export default function createIdRoute(
  basePath: string,
  name: string,
  component: Component
): RouteRecordRaw {
  return {
    path: `${basePath}:id`,
    name,
    component,
    props: routeToId,
  };
}
