import axios from 'axios';

export const AppAxios = axios.create({
    baseURL: 'http://localhost:8080/'
});

export const loginAxios = (email, password) => {
    return AppAxios.post('/login', {
        "email": email,
        "password": password,
      })
}