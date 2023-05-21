import type { Guid } from "js-guid";
import {
  namedParametersRoute,
  type INamedParametersRoute,
} from "../INamedParametersRoute";

export default function namedIdParametersRoute(
  name: string,
  id: Guid
): INamedParametersRoute {
  return namedParametersRoute(name, { id: id.toString() });
}
