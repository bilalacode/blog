import axios from "axios";
const URL = "/api/users"

const getUsers = async () => {
    const result = await axios.get(URL)
    // console.log(result.data, "response")
    return result.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {getUsers}