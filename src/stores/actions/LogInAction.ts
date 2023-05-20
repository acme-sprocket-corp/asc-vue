import type { IPayloadAction } from ".";
import { ApplicationAction } from "./ApplicationAction";

export function logInAction(payload: string): IPayloadAction<string> {
  return {
    type: ApplicationAction.LogIn,
    payload,
  };
}
