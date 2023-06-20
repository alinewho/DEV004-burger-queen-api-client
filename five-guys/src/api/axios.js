import axios from "axios";

export const AppAxios = axios.create({
  baseURL: "http://localhost:8080/",
});

export const loginAxios = (email, password) => {
  return AppAxios.post(
    "/login",
    {
      email: email,
      password: password,
    },
    {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export const getProductsAxios = async (token) => {
  try {
    const products = await AppAxios.get("/products", {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return products.data;
  } catch (error) {
    console.log(error);
  }
};

export const placeOrdersAxios = async (token, order, options) => {
  try {
    await AppAxios.post("/orders", order, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    if (options.onSuccess) options.onSuccess();
  } catch (error) {
    if (options.onError) options.onError(error);
    console.log(error);
  }
};


export const getOrdersAxios = async (token) => {
  try {
    const orders = await AppAxios.get("/orders", {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return orders.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteOrderAxios = async (token, id) => {
  try {
    const response = await AppAxios.delete(`/orders/${id}`, {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const patchOrderStatus = async (token, status, id, options) => {
  try {
    await AppAxios.patch(`/orders/${id}`, status, {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    if (options.onSuccess) options.onSuccess();
  } catch (error) {
    if (options.onError) options.onError(error);
    console.log(error);
  }
}