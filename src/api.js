import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: {
    key: "AIzaSyB_zPagsw9NMYrBT07Z6OTpGCRPXEuEhVY",
  },
  headers: {
    Accept: "application/json,",
  },
});

export default request;
