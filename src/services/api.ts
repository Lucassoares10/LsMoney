//service para buscar dados,enviar, api externa, etc
import axios from 'axios';

export const api = axios.create({
    baseURL : 'http://localhost:3000/api'
})