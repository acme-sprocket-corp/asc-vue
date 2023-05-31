import { useRouter, type NavigationFailure } from "vue-router";
import type IUseAuthorization from "./IUseAuthorization";
import { useApplicationStore } from "@/stores/UseApplicationStore";
import useLocalStorage from "../use-local-storage/UseLocalStorage";
import type { LogInRequest } from "@/data/Api";
import apiClient from "@/data/ApiClient";
import { logInAction, logOutAction } from "@/stores/actions";
import { homeRoute } from "@/features/home/Home.routes";
import { errorRoute } from "@/common/components/error/ErrorPage.routes";
import { StatusCodes } from "../use-data-fetch/StatusCodes";
import jwtDecode from "jwt-decode";
import type AccessTokenPayload from "@/data/AccessTokenPayload";
import useState from "../use-state/UseState";
import { ValueDefaults } from "@/common";
import type { AuthorizationReturn } from "./IUseAuthorization";

export default function useAuthorization(): IUseAuthorization {
  const router = useRouter();
  const store = useApplicationStore();
  const localStorage = useLocalStorage();
  const [authError, setAuthError] = useState<string>(ValueDefaults.String);

  const logIn = async (
    userName: string,
    password: string
  ): Promise<AuthorizationReturn> => {
    const request: LogInRequest = { userName, password };

    return apiClient()
      .api.logIn(request)
      .then((response) => {
        if (response.status === (StatusCodes.Success as number)) {
          const payload = jwtDecode<AccessTokenPayload>(
            response.data.accessToken
          );

          localStorage.saveRefreshToken(response.data.refreshToken);

          store.dispatcher(
            logInAction(payload.UserName, response.data.accessToken)
          );

          return router.push(homeRoute);
        } else {
          return;
        }
      })
      .catch(() => {
        void router.push(errorRoute);
      });
  };

  const logOut = async (): Promise<AuthorizationReturn> => {
    localStorage.deleteRefreshToken();

    store.dispatcher(logOutAction());

    return router.push(homeRoute);
  };

  return { authError, logIn, logOut };
}
