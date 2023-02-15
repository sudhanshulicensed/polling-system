import axios from "axios"

const http = axios.create({
    baseURL: 'http://176.9.137.77:3031',
    headers: {
      'Content-type': 'application/json',
    },
});

export default http;