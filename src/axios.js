import axios from "axios";
import {PHOTO_PER_PAGE} from "./utils/constants.js";

const instance = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID pc-GpPk628rjardJAdph1jLKlDUdJzQbaHO0shnsZu4",
  },
  params: {
    per_page: PHOTO_PER_PAGE,
    orientation: "landscape",
  },
});

export default instance;
