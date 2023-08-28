import axios from "axios";
const URL = "http://localhost:3001/blogs"

const getAll = async () => {
    const result = await axios.get(`${URL}`)
    return result.data
}

const getById = async (id) => {
    const result = axios.get(`${URL}/${id}`)
    return result.data
}

// eslint-disable-next-line
export default {getAll, getById}