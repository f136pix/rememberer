import React, {useState} from "react";
import FadeIn from "react-fade-in";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod";

import {Button} from "@/components/ui/button.tsx";
import {CardContent, CardHeader} from "@/components/ui/card.tsx";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.tsx";
import {Input} from "@/components/ui/input.tsx";
import {toast} from "@/components/ui/use-toast.ts";
import {useUserContext} from "@/context/AuthContext.tsx";
import {editUserValidationSchema} from "@/lib/validation";
import {useUpdateUserById} from "@/services/api/graphQl/graphQlQueries.ts";




function EditUserForm(props) {
    const [errMsg, setErrMsg] = useState('');
    const {mutateAsync: updateUser, isPending: isUpdating} = useUpdateUserById();

    async function onSubmit(values: z.infer<typeof editUserValidationSchema>) {
        console.log(values);
        const updatedUser = {
            email: values.email,
            name: values.name,
            id: user.id
        };
        const res = await updateUser(updatedUser);
        if(res == 'email-duplicated') {
               setErrMsg('Email already in use');
                return;
        }
        setErrMsg('');

        toast({
            title: "User updated",
            className: 'bg-green-200'
        });
    }

    const {user} = useUserContext();

    const form = useForm<z.infer<typeof editUserValidationSchema>>({
        resolver: zodResolver(editUserValidationSchema),
        defaultValues: {
            email: user.email,
            name: user.name
        },
    });

    return (
        <div>
            <CardHeader className={'text-white'}>
            </CardHeader>
            <CardContent>
                <FadeIn>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 h-auto">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel className={'text-black text-xl'}>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder=" " type={'text'}
                                                   className={'bg-gray-900 text-neutral-300'} {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="name"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel className={'text-black text-xl'}>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder=" " type={'text'}
                                                   className={'bg-gray-900 text-neutral-300'} {...field} />
                                        </FormControl>
                                        <FormMessage>{errMsg}</FormMessage>
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className={'mt-[6rem] bg-bg-calm-green'}>Save</Button>
                        </form>
                    </Form>
                </FadeIn>
            </CardContent>
        </div>
    );
}

export default EditUserForm;
