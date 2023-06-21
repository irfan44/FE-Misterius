import axios from "axios";

const url = process.env.NEXT_PUBLIC_BE_ENDPOINT;

const getCart = async () => {
  const response = await axios.get(`${url}/cart`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return response.data;
};

const addToCart = async ({ productId, quantity }) => {
  const body = { productId, quantity };
  const response = await axios.post(`${url}/cart`, body, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return response.data;
};

export { getCart, addToCart };
