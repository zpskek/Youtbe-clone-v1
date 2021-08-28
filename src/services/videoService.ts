import axios from "axios";

const api = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: process.env.REACT_APP_YOUTUBE_API_KEY,
    part: "snippet",
  },
});

export const videosApi = {
  mostPopularVideos: () =>
    api.get("videos", {
      params: {
        chart: "mostPopular",
        maxResults: 25,
      },
    }),
};
