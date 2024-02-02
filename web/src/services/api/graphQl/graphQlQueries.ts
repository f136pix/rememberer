import {useMutation} from "@tanstack/react-query";
import {destroyToken} from "@/services/api/auth/authApi.ts";
import {useUserContext} from "@/context/AuthContext.tsx";
import {
    createTask,
    getTasksByUser,
    getTeams,
    updateTaskById,
    updateUserById
} from "@/services/api/graphQl/graphQlApi.ts";
import {ITask, ITeam, IUser} from "src/types";

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
            mutationFn: async (data): Promise<any> => {
                try {
                    const res = await getTasksByUser(data);
                    return res.data.data.tasks
                } catch (err) {
                    return false
                }
            }
        })
}

export const useUpdateUserById = () => {
    return useMutation(
        {
            mutationFn: async (data): Promise<any> => {
                try {
                    const res = await updateUserById(data);
                    if(res.data?.errors) {
                        if(res.data.errors[0].extensions.debugMessage.substring(0,15) == 'SQLSTATE[23505]') {
                            return 'email-duplicated'
                        }
                    }
                    return 'ok'
                } catch (err) {
                    return false
                }
            }
        })
}

export const useCreateTask = () => {
    return useMutation(
        {
            mutationFn: async (data): Promise<any> => {
                try {
                    const res = await createTask(data);
                    if(res.data?.errors) {
                        if(res.data.errors[0]) {
                            console.log(res.data.errors[0])
                        }
                    }
                    return 'ok'
                } catch (err) {
                    console.log(err)
                    return false
                }
            }
        })
}

export const useUpdateTaskById = () => {
    return useMutation(
        {
            mutationFn: async (data): Promise<string | boolean> => {
                try {
                    const res :ITask = await updateTaskById(data);
                    return res.data.data.updateTask.title
                } catch (err) {
                    return false
                }
            }
        })
}