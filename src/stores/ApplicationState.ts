export interface ApplicationState {
  user: string;
  isLoggedIn: boolean;
}

export const defaultApplicationState: ApplicationState = {
  user: "",
  isLoggedIn: false,
};
