import type { AxiosRequestConfig } from "axios";
import { Api } from "./Api";
import { useApplicationStore } from "@/stores/UseApplicationStore";

export default function apiClient(): Api<void> {
  const store = useApplicationStore();

  const config: AxiosRequestConfig = {
    baseURL: import.meta.env.VITE_API_URL as string,
    headers: { Authorization: `Bearer ${store.state.accessToken}` },
  };

  return new Api(config);
}
