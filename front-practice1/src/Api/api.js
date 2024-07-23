import axios from 'axios';

const api = axios.create({
    baseURL: '/api'  //이걸로 프록시 통해 요청 
});

export default api;