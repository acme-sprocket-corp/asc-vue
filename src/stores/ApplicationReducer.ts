import type { IAction, IPayloadAction } from "./actions";
import { ApplicationAction } from "./actions/ApplicationAction";
import {
  defaultApplicationState,
  type ApplicationState,
} from "./ApplicationState";

export default function applicationReducer(
  state: ApplicationState,
  action: IAction
): ApplicationState {
  switch (action.type) {
    case ApplicationAction.LogIn: {
      const value = action as IPayloadAction<string>;

      return {
        user: value.payload,
        isLoggedIn: true,
      };
    }
    case ApplicationAction.LogOut: {
      return defaultApplicationState;
    }
    default: {
      return state;
    }
  }
}
