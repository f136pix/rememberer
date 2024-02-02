import React, {useEffect, useState} from 'react';
import {useGetTaskByUser, useUpdateTaskById} from "@/services/api/graphQl/graphQlQueries.ts";
import {useUserContext} from "@/context/AuthContext.tsx";
import {ITask} from "@/types";
import FadeIn from "react-fade-in";
import {Check} from "lucide-react";
import {toast} from "@/components/ui/use-toast.ts";

function TasksList({shouldUpdate}) {
    const {user} = useUserContext()
    const {mutateAsync: getTasks, isPending: isGettingTasks} = useGetTaskByUser();
    const {mutateAsync: updateTask, isPending: isUpdatingTask} = useUpdateTaskById();
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        retrieveTaskByUser()
    }, [user, shouldUpdate]);



    const retrieveTaskByUser = async () => {
        const res = await getTasks({id: user.id, done: false})
        const groupedByDateArray = res.reduce((result, item) => {
            const date = item.target_date.split(' ')[0]; // Extracting the date part
            const existingGroup = result.find(group => group[0].target_date.split(' ')[0] === date);

            if (existingGroup) {
                existingGroup.push(item);
            } else {
                result.push([item]);
            }

            return result;
        }, []);

        setTasks(groupedByDateArray)
        console.log(groupedByDateArray)
    }

    const checkTask = async (id: number) => {
        const data = {
            id: id,
            done: true
        }
        const res = await updateTask(data)
        console.log(res)
        if (res) {
            toast({
                className: 'bg-green-300',
                title: `Task ${res} completed`
            })
            retrieveTaskByUser()
        }
    }

    return (
        <div>
            <FadeIn>
                {tasks.map((date, index) => (
                    <div key={index} className={'flex flex-col'}>
                        <h1 className={'font-bold text-[3rem] border-black border-b-4 w-[50%]'}>{date[0].target_date.substring(2, 10).replace(/-/g, ',')}</h1>
                        {date.map((task) => (
                            <div key={task.id} className={''}>
                                <h2 className={'font-bold text-4xl uppercase mt-4'}>{task.title}</h2>
                                <div className={'flex'}>
                                    {task.description.length < 100 ?
                                        <p className={'text-xl text-neutral-800 w-[80%]'}>{task.description}</p> :
                                        <p className={'text-xl text-neutral-800 break-words w-[80%]'}>{task.description.substring(0, 97) + '...'}</p>}

                                    <Check onClick={() => checkTask(task.id)}
                                           className={'w-[20%] justify-end text-green-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100 cursor-pointer'}/>

                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </FadeIn>
        </div>
    );
}

export default TasksList;