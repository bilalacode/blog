import axios from "axios";
const URL = "http://localhost:3001/blogs"

const getAll = async () => {
    const result = await axios.get(URL)
    return result.data
}


export default {getAll}