import type { RouteRecordRaw } from "vue-router";
import routeToId from "./RouteToId";
import type { Component } from "vue";

export default function createIdRoute(
  basePath: string,
  name: string,
  component: Component
): RouteRecordRaw {
  if (!basePath.startsWith("/") || !basePath.endsWith("/")) {
    throw new Error("The base path must stand and end with a '/'");
  }

  return {
    path: `${basePath}:id`,
    name,
    component,
    props: routeToId,
  };
}
