import React, {useEffect, useState} from 'react';
import {useDestroySession, useLoginUser} from "@/api/auth/authQueries.ts";
import {checkIfExists, getCurrentUser} from "@/api/auth/authApi.ts";
import moment from "moment";
import DateComponent from "@/components/shared/DateComponent.tsx";
import MonthCalendar from "@/components/shared/MonthCalendar.tsx";
import Header from "@/components/shared/Header.tsx";
import {useUserContext} from "@/context/AuthContext.tsx";
import FillScreenWrapper from "@/components/utils/FiilScreenWrapper.tsx";
import TeamSection from "@/components/shared/TeamSection.tsx";
import {useGetCurrUserTeams, useGetTaskByUser} from "@/api/graphQl/graphQlQueries.ts";
import {toast} from "@/components/ui/use-toast.ts";
import {ITask} from "@/types";
import Footer from "@/components/shared/Footer.tsx";

function Dashboard(props) {
    const {mutateAsync: getTasks, isPending: isGettingTasks} = useGetTaskByUser();
    const {user} = useUserContext()
    const [weekDays, setWeekDays] = useState([])
    const [userTasks, setUserTasks] = useState([])

    useEffect(() => {
        getPeriodTasks()
    }, [user]);

    useEffect(() => {
        calculateremainingDays()
    }, [userTasks]);

    const getPeriodTasks = async () => {
        const currentDate = moment();
        const dateMinusOneYear = moment().subtract(1, 'year').format('YYYY-MM-DD HH:mm:ss');
        const datePlusOneYear = moment().add(1, 'year').format('YYYY-MM-DD HH:mm:ss');
        const data = {
            id: user.id,
            start: dateMinusOneYear,
            end: datePlusOneYear
        }
        const res: boolean | ITask[] = await getTasks(data)
        if (res !== false) {
            setUserTasks(res.tasks)
        } else {
            console.log('no tasks')
        }
    }

    const calculateremainingDays = () => {
        const today = moment();
        const currentDayOfWeek = today.day();
        const daysUntilSunday = 6 - currentDayOfWeek;
        const weekdays: [{}] = [];
        for (let i = 0; i <= daysUntilSunday; i++) {
            const day = today.clone().add(i, 'days');
            let tasksCount = 0;
            const tasks : ITask[] = userTasks.forEach((task : ITask) => {
                if (task.target_date.substring(0, 10) == day.format('YYYY-MM-DD HH:mm:ss').substring(0, 10)) {
                    tasksCount++
                }
            })
            weekdays.push({
                weekday: day.format('dddd').substring(0,3),
                number: day.format('YYYY-MM-DD HH:mm:ss').substring(0, 3),
                day: day.date(),
                taskCnt : tasksCount
            });
        }
        console.log(weekdays)
        setWeekDays(weekdays)
    }
    return (
        <div>
                <section className={'pt-8 ml-[5%] mr-[30%] pb-8'}>
                    <h1 className={'font-bold text-3xl text-neutral-200'}>Your tasks for the week</h1>
                    <DateComponent weekDays={weekDays}></DateComponent>
                </section>
                <section>
                    <TeamSection user={user}></TeamSection>
                </section>
                <section className={'h-auto bg-bg-calm-peach flex justify-center'}>
                    <MonthCalendar className={'w-auto mt-10'} tasks={userTasks}/>
                </section>
        </div>
    );
}

export default Dashboard;