import {useEffect, useState} from 'react';
import FadeIn from "react-fade-in";
import {Link} from "react-router-dom";

import AddTaskForm from "@/components/forms/AddTaskForm.tsx";
import TasksList from "@/components/shared/TasksList.tsx";
import FillScreenWrapper from "@/components/utils/FiilScreenWrapper.tsx";

function AddTaskIcon() {
    return (
        <Link to={''} className={'mr-[5rem]'}>
            <h1>+</h1></Link>
    );
}

function CloseTaskFormIcon() {
    return (
        <Link to={''} className={''}>
            <h1>-</h1></Link>
    );
}

function TasksDashboard() {
    const [isFormActive, setIsFormActive] = useState(false);
    const [updateTasks, setUpdateTasks] = useState(false);
    // reseting state to false
    useEffect(() => {
        setUpdateTasks(false);
    }, [updateTasks]);

    const toggleForm = () => {
        isFormActive ? setIsFormActive(false) : setIsFormActive(true);
    };

    const updateTasksFnct = async () => {
        setUpdateTasks(true);
        console.log(updateTasks);
    };


    return (
        <FillScreenWrapper>
            <div className={'min-h-screen bg-bg-calm-yellow'}>
                <div className={'pt-[4rem] flex justify-between align-middle items-center h-[10rem]'}>
                    <h1 className={'text-[4rem] font-bold ml-[3%]'}>Your Tasks</h1>
                    <h2></h2>
                    <div
                        className={'text-[2rem] italic mr-[10%] text-center'}>
                        {!isFormActive ?
                            <div onClick={toggleForm} className={'flex flex-col absolute right-[11.5rem] top-[7rem]'}>
                                <FadeIn>
                                    <p
                                        className={'text-[2rem] italic text-center hover:text-gray-600 transition'}>
                                        <AddTaskIcon/>
                                    </p>
                                </FadeIn>
                            </div>
                            :
                            <div className={'flex flex-col absolute right-[6.5rem] top-[7rem]'}>
                                <p onClick={toggleForm}
                                   className={'text-[2rem] italic text-center hover:text-gray-600 transition'}>
                                    <CloseTaskFormIcon/>
                                </p>
                                <FadeIn>
                                    <AddTaskForm toggleForm={toggleForm} updateTasks={updateTasksFnct}/>
                                </FadeIn>
                            </div>
                        }
                    </div>
                </div>
                <section className={'mt-[3rem ml-[5%] w-[65%]'}>
                    <TasksList shouldUpdate={updateTasks}/>
                </section>
            </div>
        </FillScreenWrapper>
    );
}

export default TasksDashboard;