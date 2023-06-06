import axios from 'axios';
import { API_URL } from '../config';

const axiosConfig = axios.create({
    baseURL: API_URL,
});

export default axiosConfig;
