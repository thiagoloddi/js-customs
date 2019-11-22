import axios from 'axios';

export const getFonts = (query = '') => {
  return axios.get('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyC6YzUjEzxVQC6VZMB30E7k_kIajJlMdbs' + query)
    .then(res => res.data);
}