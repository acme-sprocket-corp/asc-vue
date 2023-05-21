import type { RouteLocationNormalized } from "vue-router";
import type IEntityIdProperties from "./IEntityIdProperties";
import { Guid } from "js-guid";

export default function routeToId(
  route: RouteLocationNormalized
): IEntityIdProperties {
  return {
    id: new Guid(route.params.id as string),
  };
}
