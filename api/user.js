import axios from "axios";

const url = process.env.NEXT_PUBLIC_BE_ENDPOINT;

const login = async ({ email, password }) => {
  const body = { email, password };
  const response = await axios.post(`${url}/user/login`, body);
  return response.data;
};

const register = async ({ name, email, password, phone }) => {
  const body = { name, email, password, phone };
  const response = await axios.post(`${url}/user/register`, body);
  return response.data;
};

const me = async () => {
  const response = await axios.get(`${url}/user/me`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return response.data;
};

export { login, register, me };
