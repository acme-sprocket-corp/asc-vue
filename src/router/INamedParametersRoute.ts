import type { INamedRoute } from "./INamedRoute";

export interface INamedParametersRoute<T> extends INamedRoute {
  params: T;
}

export function namedParametersRoute<T>(
  name: string,
  parameters: T
): INamedParametersRoute<T> {
  return {
    name,
    params: parameters,
  };
}
