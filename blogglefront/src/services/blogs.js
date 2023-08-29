import axios from "axios";
const URL = "/api/blogs"

const getAll = async () => {
    const result = await axios.get(`${URL}`)
    return result.data
}

const getById = async (id) => {
    const result = await axios.get(`${URL}/${id}`)
    return result.data
}

// eslint-disable-next-line
export default {getAll, getById}