import {useMutation} from "@tanstack/react-query";
import {getCrsfToken, loginUserApi} from "@/api/auth/authApi.ts";
import {INewUserReq} from "@/types";

export const useLoginUser = () => {
    return useMutation({
        mutationFn: async (data: INewUserReq): Promise<boolean> => {
            try {
                console.log(data)
                await getCrsfToken()
                await loginUserApi((data))
                return true
            } catch (err) {
                return err
            }
        }
    })
}