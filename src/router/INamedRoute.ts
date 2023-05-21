import { type RouteLocationNamedRaw } from "vue-router";

export interface INamedRoute extends RouteLocationNamedRaw {
  name: string;
}

export function namedRoute(name: string): INamedRoute {
  return {
    name,
  };
}
