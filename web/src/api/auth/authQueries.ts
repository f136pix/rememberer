import {useMutation} from "@tanstack/react-query";
import {destroyToken, getCrsfToken, getCurrentUser, loginUserApi} from "@/api/auth/authApi.ts";
import {INewUserReq} from "@/types";

export const useLoginUser = () => {
    return useMutation({
        mutationFn: async (data: INewUserReq): Promise<boolean> => {
            try {
                await loginUserApi((data))
                return true
            } catch (err) {
                throw new Error(err.response.data.message)
            }
        }
    })
}
export const useDestroySession = () => {
    return useMutation({
        mutationFn: async (): Promise<boolean> => {
            try {
                await destroyToken()
                return true
            } catch (err) {
                return err
            }
        }
    })
}