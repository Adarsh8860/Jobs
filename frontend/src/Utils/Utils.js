import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://jobs-3-m2jq.onrender.com/api/v1',     // use http unless you have a cert for https
});

export default axiosClient;
