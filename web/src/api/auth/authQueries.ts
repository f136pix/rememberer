import {useMutation} from "@tanstack/react-query";
import {destroyToken, getCrsfToken, getCurrentUser, loginUserApi} from "@/api/auth/authApi.ts";
import {INewUserReq} from "@/types";

export const useLoginUser = () => {
    return useMutation({
        mutationFn: async (data: INewUserReq): Promise<boolean> => {
            try {
                await loginUserApi((data))
                await getCurrentUser()
                return true
            } catch (err) {
                return err
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