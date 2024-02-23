import {IRegisterUser, IRegisterUserReq, ITask, IUserReq} from "src/types";

import axios from "../config.ts";

export const getTeams = async (id: number, bool: boolean) => {
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
        );
        return res;
};

export const getTasksByUser = async (data) => {
    if (data.start && data.end) {
        const res = await axios.post('/graphql', {
                query: `query GetTasks{
                      tasks(
                        start_date: "${data.start}",
                        end_date: "${data.end}",
                        user_id: ${data.id},
                        done: ${data.done}
                      ) {
                        id
                        target_date
                        done
                      }
                    }`
            }
        );
        return res;
    }

    const res = await axios.post('/graphql', {
            query: `query GetTasks{
                      tasks(
                        done: ${data.done}
                        user_id: ${data.id}
                      ) {
                        id
                        target_date
                        title
                        description
                      }
                    }`
        }
    );
    return res;
};

export const updateUserById = async (data) : Promise<ITask> => {
    const res = await axios.post('/graphql', {
            query: `
            mutation { updateUser(id: "${data.id}", name: "${data.name}" email:"${data.email}")
                {
                    id
                    name
                    email
                }
            }`
        }
    );
    return res;
};

export const createTask = async (data) => {
    const res = await axios.post('/graphql', {
            query: `
            mutation {
              createTask(
                title: "${data.title}",
                description: "${data.description}",
                target_date: "${data.target_date}",
                is_team: ${data.is_team},
                done: ${data.done},
                priority: ${data.priority},
                team_id: ${data.team_id}, 
                user_id: ${data.user_id}
              ) {
                id
                title
                description
                target_date
                is_team
                done
                priority
                team {
                  id
                }
                user {
                  id
                }
              }
            }`
        }
    );
    return res;
};

export const updateTaskById= async (data) => {
    const res = await axios.post('/graphql', {
            query: `
                mutation updateTask{
                    updateTask(
                        id:${data.id}
                        done:${data.done}
                ) {
                        title
                    }
                }`
        }
    );
    return res;
};









