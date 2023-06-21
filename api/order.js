import axios from "axios";

const url = process.env.NEXT_PUBLIC_BE_ENDPOINT;

const checkout = async ({ description, address }) => {
  const body = { description, address };
  const response = await axios.post(`${url}/order/checkout`, body, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return response.data;
};

export { checkout };
