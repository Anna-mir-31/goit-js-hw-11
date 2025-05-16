import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '28903135-2e38ca847315cff4cdbf6a245'; 

export async function getImagesByQuery(query) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
  return response.data;
}
