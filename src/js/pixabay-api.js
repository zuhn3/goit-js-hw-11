import axios from 'axios';

const API_KEY = '49618803-936837fbab6b031520c07bf29';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });
    return response.data.hits; 
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
}