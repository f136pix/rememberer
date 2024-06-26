import {IRegisterUser, IRegisterUserReq, IUserReq} from "src/types";

import axios from "../config.ts";

export const loginUserApi = async (data: IUserReq) => {

    const res = await axios.post('/login', {
        email: data.email,
        password: data.password
    });
    console.log('loginUserApi', res.data);
    return res;

};

export const destroyToken = async () => {
    try {
        const res = await axios.post('/logout', {});
        console.log(res);
    } catch (err) {
        console.log(err);
    }
};

export const getCurrentUser = async () => {
    try {
        const res = await axios.get('/api/user');
        console.log('getCurrentUser', res);
        // bussiness logic
        if (res.data) {
            return res.data;
        }
        return false;
    } catch (err) {
        console.log('getCurrentUserErr', err);
        return false;
    }
};

export const checkIfExists = async (email: string) => {
    try {
        const res = await axios.post('/user-exists', {
            email: `${email}`
        });
        return res;
    } catch (err) {
        return err;
    }
};

export const registerUser = async (newUser: IRegisterUserReq) => {
    try {
        const res = await axios.post('/register', {
            email: newUser.email,
            name: newUser.name,
            password: newUser.password,
            password_confirmation: newUser.password_confirmation
        });
        return res;
    } catch (err) {
        return err;
    }

};

export const getCrsfToken = async () => {
    axios.get('/sanctum/csrf-cookie').then(response => {
        console.log(response);
    });
};
