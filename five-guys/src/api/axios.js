import axios from 'axios';

export const AppAxios = axios.create({
    baseURL: 'http://localhost:8080/'
});

export const loginAxios = (email, password) => {
    return AppAxios.post('/login', {
        "email": email,
        "password": password,
      }, {
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json'
        }
      } ) 
}

export const getProductsAxios = (token) => {
  return AppAxios.get("/products", {
    withCredentials: true,
    headers: {
      'Authorization' : `Bearer ${token}`
  }
  });
};
