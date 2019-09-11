import axios from "axios";
const apiKey = "AIzaSyATZk47TaAjsAxUQIbt0lDQCPdgCBt71OU";

// Group all API Calls
export default {
  searchYouTube: function(term) {
    return axios.get("https://www.googleapis.com/youtube/v3/search", {
      params: {
        part: "snippet",
        q: term,
        type: "video",
        key: apiKey
      }
    });
  }
};
