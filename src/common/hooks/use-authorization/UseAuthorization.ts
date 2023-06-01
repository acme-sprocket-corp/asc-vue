import { useRouter } from "vue-router";
import type { LogInRequest, LogOutRequest } from "@/data/Api";
import apiClient from "@/data/ApiClient";
import { logInAction, logOutAction } from "@/stores/actions";
import { homeRoute } from "@/features/home/Home.routes";
import { errorRoute } from "@/common/components/error/ErrorPage.routes";
import jwtDecode from "jwt-decode";
import type AccessTokenPayload from "@/data/AccessTokenPayload";
import { ValueDefaults } from "@/common/utilities";
import type { AuthorizationReturn } from "./IUseAuthorization";
import { useApplicationStore } from "@/stores/UseApplicationStore";
import {
  useLocalStorage,
  useState,
  StatusCodes,
  type IUseAuthorization,
} from "@/common/hooks";

export default function useAuthorization(): IUseAuthorization {
  const router = useRouter();
  const store = useApplicationStore();
  const localStorage = useLocalStorage();
  const [authError] = useState<string>(ValueDefaults.String);

  const logIn = async (
    userName: string,
    password: string
  ): Promise<AuthorizationReturn> => {
    const request: LogInRequest = { userName, password };

    return apiClient()
      .api.logIn(request)
      .then((response) => {
        if (response.status === StatusCodes.Success.valueOf()) {
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
    const request: LogOutRequest = { userName: store.state.user };

    return apiClient()
      .api.logOut(request)
      .then(() => {
        localStorage.deleteRefreshToken();

        store.dispatcher(logOutAction());

        return router.push(homeRoute);
      });
  };

  return { authError, logIn, logOut };
}
