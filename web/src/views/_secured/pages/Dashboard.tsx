import {useEffect, useState} from 'react';
import moment from "moment";
import {ITask, ITaskReq} from "src/types";

import DateComponent from "@/components/shared/DateComponent.tsx";
import MonthCalendar from "@/components/shared/MonthCalendar.tsx";
import TeamSection from "@/components/shared/TeamSection.tsx";
import {useUserContext} from "@/context/AuthContext.tsx";
import {useGetTaskByUser} from "@/services/api/graphQl/graphQlQueries.ts";

function Dashboard() {
    const {mutateAsync: getTasks} = useGetTaskByUser();
    const {user} = useUserContext();
    const [weekDays, setWeekDays] = useState([]);
    const [userTasks, setUserTasks] = useState<ITask[] | []>([]);

    useEffect(() => {
        getPeriodTasks();
    }, [user]);

    useEffect(() => {
        calculateremainingDays();
    }, [userTasks]);

    const getPeriodTasks = async () => {
        const dateMinusOneYear = moment().subtract(1, 'year').format('YYYY-MM-DD HH:mm:ss');
        const datePlusOneYear = moment().add(1, 'year').format('YYYY-MM-DD HH:mm:ss');
        const data : ITaskReq= {
            id: user.id,
            start: dateMinusOneYear,
            end: datePlusOneYear,
            done: false
        };
        const res: false | ITask[] = await getTasks(data);
        if (res !== false) {
            // @ts-expect-error eslint fuzzing
            setUserTasks(res);
        } else {
            console.log('no tasks');
        }
    };

    const calculateremainingDays = () => {
        const today = moment();
        const currentDayOfWeek = today.day();
        const daysUntilSunday = 6 - currentDayOfWeek;
        const weekdays = [];
        for (let i = 0; i <= daysUntilSunday; i++) {
            const day = today.clone().add(i, 'days');
            let tasksCount = 0;
            // @ts-ignore
            userTasks?.forEach((task : ITask) => {
                console.log(task);
                if(task.done !== false) {
                    return;
                }
                // @ts-ignore
                if (task.target_date.substring(0, 10) == day.format('YYYY-MM-DD HH:mm:ss').substring(0, 10)) {
                    tasksCount++;
                }
            });
            weekdays.push({
                weekday: day.format('dddd').substring(0,3),
                number: day.format('YYYY-MM-DD HH:mm:ss').substring(0, 3),
                day: day.date(),
                taskCnt : tasksCount
            });
        }

        setWeekDays(weekdays);
        return (weekdays);
    };

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
                    <MonthCalendar className={'w-auto mt-10'} tasks={userTasks} userId ={user.id} />
                </section>
        </div>
    );
}

export default Dashboard;