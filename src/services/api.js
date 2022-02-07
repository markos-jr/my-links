
import axios from "axios";

// minha chave: 

export const key = '5bd3b3cd482fdaaab1e9f92b7f5232789532d9dd'

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization': `Bearer ${key}`
    }
})

export default api;

