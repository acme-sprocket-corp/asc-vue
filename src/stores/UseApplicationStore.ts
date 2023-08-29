import { defineStore } from "pinia";
import {
  defaultApplicationState,
  type ApplicationState,
} from "./ApplicationState";
import { useReducer } from "@/features/common/hooks";
import applicationReducer from "./ApplicationReducer";
import type IAction from "./actions/IAction";

export const useApplicationStore = defineStore("applicationStore", () => {
  const [state, dispatcher] = useReducer<ApplicationState, IAction>(
    applicationReducer,
    defaultApplicationState,
  );

  return { state, dispatcher };
});
