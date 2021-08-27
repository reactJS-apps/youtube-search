import axios from 'axios';
const KEY = 'AIzaSyAdObW29k_2F2ic1BZMg7_OgP011wdxAdM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
