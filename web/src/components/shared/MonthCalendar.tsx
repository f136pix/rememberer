import React, {useEffect, useState} from 'react';
import {DayPicker} from 'react-day-picker';
import {Link} from "react-router-dom";

import {Calendar} from "@/components/ui/calendar.tsx";
import {cn} from "@/lib/utils.tsx";

import 'react-day-picker/src/style.css';

function MonthCalendar({className, tasks}) {
    const [disabledDays, setDisabledDays] = useState();
    useEffect(() => {
        disableDays();
    }, [tasks]);
    const disableDays = () => {
        const dates = tasks.map(task => new Date(task.target_date));
        setDisabledDays(dates);
    };
    return (

        <div className={'w-screen flex flex-col'}>
            <div className={'flex justify-between content-center items-center'}>
                <h1 className={'text-black pt-6 text-[3rem] font-bold ml-[2%] align-middle'}>Your tasks</h1>
                <Link to={'/teams'} className={'text-black pt-6 text-[1rem] italic mr-[4%] underline hover:text-neutral-800'}>See more</Link>
            </div>
            <h3 className={'ml-[2%] font-light'}> the marked days are target-dates</h3>
            <div className={'flex justify-center'}>
                <DayPicker
                    className={'bg-bg-calm-green p-[2rem] rounded'}
                    mode={'single'}
                    disabled={disabledDays}
                />
            </div>
        </div>
    );
}

export default MonthCalendar;