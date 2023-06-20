import axios from "axios";

const getAllProduct = async () => {
    const response = await axios.get('https://wafo-skripsi-production.up.railway.app/product?name=')
    return response.data;
};

export {getAllProduct}