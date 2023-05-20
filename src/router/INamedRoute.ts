export interface INamedRoute {
  name: string;
}

export function namedRoute(name: string): INamedRoute {
  return {
    name,
  };
}
