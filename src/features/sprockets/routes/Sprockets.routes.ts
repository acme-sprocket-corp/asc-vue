import type { RouteRecordRaw } from "vue-router";
import SprocketDetails from "../details/SprocketDetails.vue";
import namedIdParametersRoute from "@/router/id-route/NamedIdParametersRoute";
import type { INamedParametersRoute } from "@/router/INamedParametersRoute";
import type { Guid } from "js-guid";
import createIdRoute from "@/router/id-route/CreateIdRoute";

const sprocketDetails = "sprocketDetails";

export const sprocketDetailsRoute = (id: Guid): INamedParametersRoute =>
  namedIdParametersRoute(sprocketDetails, id);

export default function sprocketRoutes(): Array<RouteRecordRaw> {
  return [createIdRoute("/sprocket/", sprocketDetails, SprocketDetails)];
}
