import axios from "../config.ts";
import {IRegisterUser, IRegisterUserReq, IUserReq} from "@/types";

export const getTeams = async (id: number, bool: boolean) => {
    try {
        const res = await axios.post('/graphql', {
                query: `query teams {
                teams(user_id:${id}, limit:${bool}) {
                    id
                    name
                    tasks
                    {
                        id,
                            title,
                            description
                    }
                    users {
                        id
                    }
                }
            }`
            }
        )
        return res
    } catch (err) {
        throw err
    }
}

export const getTasksByUser = async (data) => {
    const res = await axios.post('/graphql', {
            query: `query GetTasks{
  tasks(
    start_date: "${data.start}",
    end_date: "${data.end}",
    user_id: ${data.id}
  ) {
    id
    target_date
  }
}`
        }
    )
    return res
}