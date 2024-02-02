import React from 'react';
import {CardContent, CardHeader} from "@/components/ui/card.tsx";
import FadeIn from "react-fade-in";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button, buttonVariants} from "@/components/ui/button.tsx";
import {useForm} from "react-hook-form";
import * as z from "zod";
import {createTaskValidationSchema, editUserValidationSchema} from "@/lib/validation";
import {zodResolver} from "@hookform/resolvers/zod";
import {Textarea} from "@/components/ui/textarea.tsx";
import {cn} from "@/lib/utils.tsx";
import {Calendar} from "@/components/ui/calendar.tsx";
import {CalendarIcon, ChevronDownIcon} from "lucide-react";
import {format} from "date-fns";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover.tsx";
import {useUserContext} from "@/context/AuthContext.tsx";
import {ICreateTask, ITask} from "@/types";
import {useCreateTask, useUpdateUserById} from "@/services/api/graphQl/graphQlQueries.ts";
import {toast} from "@/components/ui/use-toast.ts";
import {Simulate} from "react-dom/test-utils";
import reset = Simulate.reset;

type props = {
    toggleForm: () => void
    updateTasks: () => void
    resetUpdateState: () => void
}

function AddTaskForm({toggleForm, updateTasks}: props) {
    const {mutateAsync: createTask, isPending} = useCreateTask();
    const {user} = useUserContext()
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    const form = useForm<z.infer<typeof createTaskValidationSchema>>({
        resolver: zodResolver(createTaskValidationSchema),
        defaultValues: {
            title: '',
            description: ''
        }
    })

    async function onSubmit(values: z.infer<typeof createTaskValidationSchema>) {
        const formatedToDate = new Date(values.target_date);
        const formatedToString = format(formatedToDate, 'yyyy-MM-dd HH:mm:ss.SSS').toString().substring(0, 10)
        const task: ICreateTask = {
            title: values.title,
            description: values.description,
            target_date: formatedToString,
            is_team: false,
            done: false,
            priority: 1,
            team_id: null,
            user_id: user.id
        }

        const res = await createTask(task)
        if (res == 'ok') {
            toast({
                className: 'bg-green-400',
                title: 'Task criada'
            })
            form.reset()
            toggleForm()
            await updateTasks()
        }
    }

    return (
        <div className={'text-[2rem] italic mr-[0%] text-center hover:text-gray-600 transition rounded'}>
            <CardHeader className={'text-white'}>
            </CardHeader>
            <CardContent>
                <FadeIn>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 h-auto">
                            <FormField
                                control={form.control}
                                name="title"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel className={'text-black text-xl'}>Title</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Buy pizza dough for sunday" type={'text'}
                                                   className={'bg-gray-900 text-neutral-300'} {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="description"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel className={'text-black text-xl'}>Description</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Buy on friday because it's pasta day in the supermarket"
                                                className="resize-none bg-gray-900 text-neutral-300"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="target_date"
                                render={({field}) => (
                                    <FormItem className="flex flex-col">
                                        <FormLabel className={'text-black text-xl'}>Target Date</FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        className={cn(
                                                            "resize-none pl-3 text-left text-neutral-300",
                                                            !field.value && "bg-gray-900 text-neutral-300 hover:bg-gray-900 hover:text-neutral-300"
                                                        )}
                                                    >
                                                        {field.value ? (
                                                            format(field.value, "PPP")
                                                        ) : (
                                                            <span className={'text-neutral-300'}>Pick a date</span>
                                                        )}
                                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50"/>
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0 h-[32rem]" align="start">
                                                <Calendar
                                                    className={'h-[7rem]'}
                                                    mode="single"
                                                    selected={field.value}
                                                    onSelect={field.onChange}
                                                    disabled={(date) =>
                                                        date < yesterday || date < new Date("1900-01-01")
                                                    }
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />

                            <Button type="submit" className={'mt-[6rem] bg-bg-calm-green'}>Create</Button>
                        </form>
                    </Form>
                </FadeIn>
            </CardContent>
        </div>
    );
}

export default AddTaskForm;