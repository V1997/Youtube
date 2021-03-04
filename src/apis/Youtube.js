import axios from "axios";

const KEY = "AIzaSyB7dm5j1djBAL9MB3zxdNPR57CDCNQGWKM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
