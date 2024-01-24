import {useMutation} from "@tanstack/react-query";
import {destroyToken} from "@/api/auth/authApi.ts";
import {useUserContext} from "@/context/AuthContext.tsx";
import {getTasksByUser, getTeams} from "@/api/graphQl/graphQlApi.ts";
import {ITask, ITeam} from "@/types";

export const useGetCurrUserTeams = () => {
    return useMutation(
        {
            mutationFn: async ({id: id, bool: bool}): Promise<boolean | [ITeam]> => {
                try {
                    const res = await getTeams(id, bool);
                    return res.data.data.teams
                } catch (err) {
                    return false
                }
            }
        })
}
export const useGetTaskByUser = () => {
    return useMutation(
        {
            mutationFn: async (data): Promise<boolean | [ITask]> => {
                try {
                    const res = await getTasksByUser(data);
                    return res.data.data
                } catch (err) {
                    return false
                }
            }
        })
}