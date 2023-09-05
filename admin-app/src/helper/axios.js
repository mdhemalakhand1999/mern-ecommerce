import axios from 'axios';
import { api } from '../urlConfig';

const axiosInstance = axios.create({
    baseUrl: api,
    // headers: {
    //     'Authorization': '',
    // }
})

export default axiosInstance;