import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyBBru0Xc_Ngwwcy-VR_duD57Hpzn1gZFVU",
  },
});

export default request;
