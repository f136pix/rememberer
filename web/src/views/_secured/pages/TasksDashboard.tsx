import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {CardContent, CardHeader} from "@/components/ui/card.tsx";
import FadeIn from "react-fade-in";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useForm} from "react-hook-form";
import * as z from "zod";
import {editUserValidationSchema} from "@/lib/validation";
import {zodResolver} from "@hookform/resolvers/zod";
import AddTaskForm from "@/components/forms/AddTaskForm.tsx";
import TasksList from "@/components/shared/TasksList.tsx";

function AddTaskIcon() {
    return (
        <Link to={''} className={'mr-[5rem]'}>
            <h1>+</h1></Link>
    )
}

function CloseTaskFormIcon() {
    return (
        <Link to={''} className={''}>
            <h1>-</h1></Link>
    )
}

function TasksDashboard(props) {
    const [isFormActive, setIsFormActive] = useState(false)
    const [updateTasks, setUpdateTasks] = useState(false)
    // reseting state to false
    useEffect(() => {
        setUpdateTasks(false)
    }, [updateTasks]);

    const toggleForm = () => {
        isFormActive ? setIsFormActive(false) : setIsFormActive(true)
    }

    const updateTasksFnct = async () => {
        setUpdateTasks(true)
        console.log(updateTasks)
    }


    return (
        <div className={'min-h-screen bg-bg-calm-yellow'}>
            <div className={'pt-[4rem] flex justify-between align-middle items-center h-[10rem]'}>
                <h1 className={'text-[4rem] font-bold ml-[3%]'}>Your Tasks</h1>
                <h2></h2>
                <div
                    className={'text-[2rem] italic mr-[10%] text-center'}>
                    {!isFormActive ?
                        <div onClick={toggleForm}
                             className={'mr-[5rem] text-[2rem] italic text-center hover:text-gray-600 transition'}>
                            <FadeIn><AddTaskIcon/></FadeIn></div> :
                        <div className={'flex flex-col absolute right-[6.5rem] top-[7rem]'}><p onClick={toggleForm}
                                                                                               className={'text-[2rem] italic text-center hover:text-gray-600 transition'}>
                            <CloseTaskFormIcon/></p><FadeIn><AddTaskForm toggleForm={toggleForm}
                                                                         updateTasks={updateTasksFnct}/></FadeIn></div>}
                </div>
            </div>
            <section className={'mt-[3rem ml-[5%] w-[65%]'}>
                <TasksList shouldUpdate={updateTasks}/>
            </section>
        </div>
    );
}

export default TasksDashboard;