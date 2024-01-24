import React from 'react';
import {list} from "postcss";
import {Separator} from "@/components/ui/separator.tsx";
import {cn} from "@/lib/utils.tsx";

function DateComponent({weekDays}) {
    const generateTaskLabel = (num: number) : string => {
        if(num == 0) {
            return "No tasks"
        }
        if(num == 1) {
            return "1 task"
        }
        return `${num} tasks`
    }

    return (
        <>
            <ul className={'flex gap-4 mt-6 w-[120%] rounded mb-0 text-neutral-200'}>
                {weekDays.map((day) => {
                    return (
                        <li className={'flex-col w-[14.28%] mr-5 ml-5 text-2xl text-center'} key={day.number}>
                            <h1 className={'mt-4 font-semibold'}>{day.weekday}</h1>
                        </li>
                    )
                })}
            </ul>
            <ul className={'flex gap-4 h-[8rem] w-[120%] rounded bg-accent-calm-yellow bg-gray-900'}>
                {weekDays.map((day, i) => {
                    return (
                        <li key={i + day} className={cn('flex-col w-[14.28%] ml-5 mr-5', (day.weekday == 'Sat' || day.weekday == 'Sun') ? 'bg-bg-calm-blue' : 'bg-bg-calm-peach')}>

                            <h1 className={'text-5xl mt-4 font-semibold text-center'}>{day.day}</h1>
                            <Separator className={'bg-indigo-500 w-10 h-1 mx-auto'}></Separator>

                            <div className={'mt-4 text-center text-bold'}>
                                <a className={'text-lg'}>{generateTaskLabel(day.taskCnt)}</a>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </>
    );
}



export default DateComponent;