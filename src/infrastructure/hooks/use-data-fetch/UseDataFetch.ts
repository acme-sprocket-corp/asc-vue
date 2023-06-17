import { onMounted, type Ref } from "vue";
import type { AxiosResponse } from "axios";
import { useRouter } from "vue-router";
import { StatusCodes } from "./StatusCodes";
import { namedRoute } from "@/router/INamedRoute";
import { ValueDefaults } from "@/features/common/utilities";
import { useState } from "@/features/common/hooks";

export default function useDataFetch<T>(
  defaultState: T,
  callback: () => Promise<AxiosResponse<T>>
): [state: Ref<T>, error: Ref<string>, loading: Ref<boolean>] {
  const [state, setState] = useState<T>(defaultState);
  const [error, setError] = useState<string>(ValueDefaults.String);
  const [loading, setLoading] = useState<boolean>(ValueDefaults.Boolean);
  const router = useRouter();

  onMounted(() => {
    const getData = async (): Promise<void> => {
      const result = callback()
        .then((response) => {
          switch (response.status) {
            case StatusCodes.Success: {
              return setState(response.data);
            }
            case StatusCodes.BadRequest: {
              return setError(response.statusText);
            }
            case StatusCodes.InternalServerError: {
              return setError(response.statusText);
            }
            default: {
              return setError(ValueDefaults.String);
            }
          }
        })
        .catch((error: string) => setError(error))
        .finally(() => setLoading(false));

      if (error.value !== ValueDefaults.String) {
        await router.push(namedRoute("error"));
      }

      return result;
    };

    void getData();
  });

  return [state, error, loading];
}
