import axios from 'axios';

const API = axios.create({ baseURL: 'https://tweets-vibe-backend.onrender.com' });
// const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
    if(localStorage.getItem("profile")) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`;
    }

    return req;
})


// user login/signup apis
export const signup = async (userData) => await API.post('/api/signup', userData);
export const login = async (userData) => await API.post('/api/login', userData);
export const search = async (searchData) => await API.post('/api/scrap-twitter', searchData);
export const getSearchData = async () => await API.get('/api/search-data');