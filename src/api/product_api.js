import axios from "axios";

const BASE_URL = "http://localhost:8000/api/products";

export const getSaleProducts = async (skip = 0, limit = 10) => {
  const response = await axios.get(`${BASE_URL}/sale?skip=${skip}&limit=${limit}`);

  return response.data;
};

export const getBestSellers = async (skip = 0, limit = 10) => {
  const response = await axios.get(`${BASE_URL}/?skip=${skip}&limit=${limit}`);
  return response.data;
}
