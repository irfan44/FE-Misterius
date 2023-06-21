import axios from "axios";

const url = process.env.NEXT_PUBLIC_BE_ENDPOINT;

const getAll = async () => {
  const response = await axios.get(`${url}/product?name=`);
  return response.data;
};

const getById = async ({ productId }) => {
  const response = await axios.get(`${url}/product/${productId}`);
  return response.data;
};

export { getAll, getById };
