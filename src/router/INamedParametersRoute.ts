import type { INamedRoute } from "./INamedRoute";
import type { RouteParamsRaw } from "vue-router";

export interface INamedParametersRoute extends INamedRoute {
  params: RouteParamsRaw;
}

export function namedParametersRoute(
  name: string,
  parameters: RouteParamsRaw
): INamedParametersRoute {
  return {
    name,
    params: parameters,
  };
}
