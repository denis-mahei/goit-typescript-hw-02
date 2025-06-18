import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';

const apiKeyAuth = import.meta.env.VITE_API_KEY;

export interface UnsplashImage {
  id: string;
  description: string;
  urls: {
    small: string;
    regular: string;
  };
}

export const fetchImageWithQuery = async (
  query: string,
  page: number
): Promise<UnsplashImage[]> => {
  const response = await axios.get(
    `/search/photos?query=${query}&orientation=landscape&per_page=12&page=${page}`,
    {
      headers: {
        Authorization: `Client-ID ${apiKeyAuth}`,
      },
    }
  );
  return response.data.results;
};
