import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { "API-KEY": "b35ccfae-a737-4502-a353-a1e6b5bfd623"}
})


export const getUsers = (currentPage = 1, pageSize = 10) => {
    return  instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data
        })
}
