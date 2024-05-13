import {AxiosResponse} from "axios";
import axios from "../axios.js";

export const getImages = async <T>(
  query = "",
  page = 1
): Promise<AxiosResponse<T, {message: string}>> => {
  const response = await axios.get("/search/photos/", {
    params: {
      page,
      query,
    },
  });
  return response;
};
