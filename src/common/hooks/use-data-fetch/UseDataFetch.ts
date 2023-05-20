import { onMounted, type Ref } from "vue";
import useState from "../use-state/UseState";
import type { AxiosResponse } from "axios";
import { useRouter } from "vue-router";
import { StatusCodes } from "./StatusCodes";

export default function useDataFetch<T>(
  defaultState: T,
  callback: () => Promise<AxiosResponse<T>>
): [state: Ref<T>, error: Ref<string>, loading: Ref<boolean>] {
  const [state, setState] = useState<T>(defaultState);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
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
              return setError("");
            }
          }
        })
        .catch((error: string) => setError(error))
        .finally(() => setLoading(false));

      if (error.value !== "") {
        await router.push({ name: "error" });
      }

      return result;
    };

    void getData();
  });

  return [state, error, loading];
}
