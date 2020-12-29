import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-bethehero-omnistack.herokuapp.com/'
});

export default api;