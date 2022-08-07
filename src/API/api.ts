import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/keyword/158718/movies?api_key=79d5524a687b79f90d3ca38d4644f9d6&language=pt-BR&include_adult=true'
})

export default api