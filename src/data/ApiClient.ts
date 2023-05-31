import type { AxiosRequestConfig } from "axios";
import { Api } from "./Api";

export default function apiClient(): Api<void> {
  const config: AxiosRequestConfig = {
    baseURL: import.meta.env.VITE_API_URL as string,
    headers: { Authorization: `Bearer ${""}` },
  };

  return new Api(config);
}
