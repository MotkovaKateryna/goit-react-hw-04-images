import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api',

  params: {
    image_type: 'photo',
    orientation: 'horizontal',
    key: '30821762-b8f2171742f26b4a3279c46a9',
  },
});

export const fetchImages = async (q, page = 1) => {
  const { data } = await instance.get('/', {
    params: {
      q,
      page,
      per_page: 12,
    },
  });
  return data;
};
