import axios from "axios";

export { getImages };

const URL = 'https://pixabay.com/api/';
const KEY = '25250442-1f0e0fa9809b8d86f02acb467';

async function getImages(name, page) {
  try {
    const response = await axios.get(`${URL}?key=${KEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`);
    return response;
  } catch (error) {
    console.error(error);
  }
}