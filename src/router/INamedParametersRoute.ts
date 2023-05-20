import type { INamedRoute } from "./INamedRoute";

export default interface INamedParametersRoute<T> extends INamedRoute {
  params: T;
}
