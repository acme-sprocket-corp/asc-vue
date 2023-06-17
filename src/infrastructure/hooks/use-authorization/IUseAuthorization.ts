import type { Ref } from "vue";
import type { NavigationFailure } from "vue-router";

export default interface IUseAuthorization {
  authError: Ref<string>;
  logIn: (userName: string, password: string) => Promise<AuthorizationReturn>;
  logOut: () => Promise<AuthorizationReturn>;
}

// This is the return type for Vue's router. We use it to comply with having
// a valid return type for Promises.
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export type AuthorizationReturn = void | undefined | NavigationFailure;
