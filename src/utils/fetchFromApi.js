import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export default async function fetchFromApi(url) {
  try {
    const respose = await axios.get(`${BASE_URL}/${url}`, options);
    return respose.data;
  } catch (error) {
    throw new Error(error);
  }
}
