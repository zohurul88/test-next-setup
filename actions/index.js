import axios from "axios";

/**
 *
 * @returns AxiosInstance
 */
export default function axiosInstance() {
  return axios.create({
    baseURL: "http://localhost:3007/api",
    withCredentials: true,
  });
}

export const onErrorResp = { success: false, data: [] };
