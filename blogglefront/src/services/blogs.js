import axios from "axios";
const URL = "/api/blogs";

let tokenSet = (token) => {
  return {
    headers: { Authorization: `Bearer ${token}` },
  };
};

const getAll = async () => {
  const result = await axios.get(`${URL}`);
  return result.data;
};

const getById = async (id) => {
  const result = await axios.get(`${URL}/${id}`);
  return result.data;
};

const createBlog = async (blog, token) => {
  const {title, content} = blog
  const result = await axios.post(URL, { title, content }, tokenSet(token));
  return result.data;
};

// eslint-disable-next-line
export default { getAll, getById, createBlog };
