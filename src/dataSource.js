import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:8080',
    auth: {
        username: 'mrak',
        password: 'mrak'
      },
    responseType: 'json'
});