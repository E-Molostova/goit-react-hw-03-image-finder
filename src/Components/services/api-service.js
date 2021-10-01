import axios from 'axios';

const fetchDataApi = (searchPic, page = 1) => {
  const URL = 'https://pixabay.com/api/';
  const KEY = '23291361-b9834d1407f849d06e39836e0';
  return axios
    .get(
      `${URL}?q=${searchPic}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(res => res.data);
};

export default fetchDataApi;

// https://pixabay.com/api/?q=что_искать
// & page=номер_страницы & key=твой_ключ
// & image_type=photo & orientation=horizontal
// & per_page=12
