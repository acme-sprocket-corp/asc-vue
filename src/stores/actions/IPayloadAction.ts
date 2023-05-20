import type { IAction } from ".";

export default interface IPayloadAction<T> extends IAction {
  payload: T;
}
