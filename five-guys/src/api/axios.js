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

export const getProductsAxios = async (token) => {
  try {
    const products = await AppAxios.get("/products", {
    withCredentials: true,
    headers: {
      'Authorization' : `Bearer ${token}`
  }
  });
    return products.data;
  } catch (error) {
    console.log(error);
  }
};
export const getOrdersAxios = async (token) => {
  try {
    const orders = await AppAxios.get("/orders", {
    withCredentials: true,
    headers: {
      'Authorization' : `Bearer ${token}`
  }
  });
    return orders.data;
  } catch (error) {
    console.log(error);
  }
};
