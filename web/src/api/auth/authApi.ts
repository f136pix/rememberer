import axios from "../config.ts";
import {INewUserReq} from "@/types";

export const loginUserApi = async (data: INewUserReq) => {
    try {
        const res = await axios.post('/login', {
            email: data.email,
            password: data.password
        }, {
            withCredentials: true,
            headers: {
                "withCredentials": "true",
                "Content-Type": "application/json",
            }
        })
        console.log(res)
        return res
    } catch (err) {
        throw err
    }

}

export const destroyToken = async () => {
    try {
        const res = await axios.post('/logout', {},
            {
                withCredentials: true,
                headers: {
                    "withCredentials": "true",
                    "Content-Type": "application/json",
                }
            })
        console.log(res)
    } catch (err) {
        console.log(err)
    }
}

export const getCurrentUser = async () => {
    try {
        const res = await axios.get('/api/user',
            {
                withCredentials: true,
                headers: {
                    "withCredentials": "true",
                    "Content-Type": "application/json"
                }
            })
        // bussiness logic
        if(res.data) {
            return res.data
        }
        return false
    } catch (err) {
        return false
    }
}
export const getCrsfToken = async () => {
    axios.get('/sanctum/csrf-cookie').then(response => {
        console.log(response)
    });
}
