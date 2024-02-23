import {useMutation} from "@tanstack/react-query";
import {IRegisterUserReq, IUser, IUserReq} from "src/types";

import {
    checkIfExists,
    destroyToken,
    getCrsfToken,
    getCurrentUser,
    loginUserApi,
    registerUser
} from "@/services/api/auth/authApi.ts";

export const useLoginUser = () => {
    return useMutation({
        mutationFn: async (data: IUserReq): Promise<boolean> => {
            try {
                await loginUserApi((data));
                return true;
            } catch (err) {
                throw new Error(err.response.data.message);
            }
        }
    });
};
export const useDestroySession = () => {
    return useMutation({
        mutationFn: async (): Promise<boolean> => {
            try {
                await destroyToken();
                return true;
            } catch (err) {
                return err;
            }
        }
    });
};

export const useCheckEmailExists = () => {
    return useMutation({
            mutationFn: async (email: string): Promise<boolean> => {
                try {
                    const result = await checkIfExists(email);
                    return result.status == 200;
                } catch (err) {
                    return false;
                }
            }
        }
    );
};

export const useRegisterUser = () => {
    return useMutation({
            mutationFn: async (data : IRegisterUserReq): Promise<string> => {
                try {
                    const user : IRegisterUserReq = {
                        email: data.email,
                        name: data.name,
                        password: data.password,
                        password_confirmation: data.password_confirmation
                    };

                    const result = await registerUser(user);
                    console.log(result);
                    if (result.status == 204) {
                        return 'ok';
                    }
                    return result.response.data.message;
                } catch (err) {
                    return err.message;
                }
            }
        }
    );
};
