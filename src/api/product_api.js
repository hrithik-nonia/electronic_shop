import axios from "axios";

const BASE_URL = "http://localhost:8000/api/products";

// get sale products
export const getSaleProducts = async (skip = 0, limit = 10) => {
  const response = await axios.get(`${BASE_URL}/sale?skip=${skip}&limit=${limit}`);
  return response.data;
};

// get best sellers
export const getBestSellers = async (skip = 0, limit = 10) => {
  const response = await axios.get(`${BASE_URL}/?skip=${skip}&limit=${limit}`);
  return response.data;
}

// fetch a single product by id
export const getProductById = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
}

// get product by catrgory
export const getProductByCategory = async (category, skip = 0, limit = 10) => {
  const response = await axios.get(
    `${BASE_URL}/category/${category}?skip=${skip}&limit=${limit}`
  );
  return response.data;
};
