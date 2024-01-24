import React, {useEffect, useState} from 'react';
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import * as z from "zod"
import {CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";

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
import {emailValidationSchema, loginValidationSchema, registerValidationSchema} from "@/lib/validation";
import FadeIn from "react-fade-in";
import {useCheckEmailExists, useLoginUser, useRegisterUser} from "@/api/auth/authQueries.ts";
import {IUserReq} from "@/types";
import {useNavigate} from "react-router-dom";
import {Simulate} from "react-dom/test-utils";
import {ToastAction, Toast} from "@/components/ui/toast.tsx";
import {toast} from "@/components/ui/use-toast.ts";
import error = Simulate.error;
import {getCrsfToken} from "@/api/auth/authApi.ts";


export function AuthForm(props) {
    useEffect(() => {
        getCrsfToken()
    }, []);
    const navigate = useNavigate()
    const {mutateAsync: loginUser, isPending: isAuthenticatingUser} = useLoginUser()
    const {mutateAsync: checkEmail, isPending: isCheckingEmail} = useCheckEmailExists()
    const {mutateAsync: registerUser, isPending: isRegisteringUser} = useRegisterUser()
    const [formNumber, setFormNumber] = useState('1')
    const [equalsValue, setEqualsValue] = useState('')
    const [inputedEmail, setInputedEmail] = useState('')
    // initial form
    const form = useForm<z.infer<typeof emailValidationSchema>>({
        resolver: zodResolver(emailValidationSchema),
        defaultValues: {
            email: "",
        },
    })


    async function onSubmit(values: z.infer<typeof emailValidationSchema>) {
        setInputedEmail(values.email)
        const exists: boolean = await checkEmail(values.email)
        if (exists) {
            setFormNumber('2')
        } else {
            setFormNumber('3')
        }

    }

    // login form
    const formLogin = useForm<z.infer<typeof loginValidationSchema>>({
        resolver: zodResolver(loginValidationSchema),
        values: {
            email: inputedEmail,
            password: ''
        },
        defaultValues: {
            email: "",
            password: ""
        },
    })


    async function onSubmitLogin(values: z.infer<typeof loginValidationSchema>) {
        const user: IUserReq = {
            email: values.email,
            password: values.password
        }
        try {
            const res: boolean = await loginUser(user)
            if (!res) {
                throw new Error('There was a unexpected error')
            }
            return window.location.href = '/'
        } catch (err) {
            console.log(err)
            toast({
                variant: 'destructive',
                title: err.message
            })
        }
        //setFormNumber('3')
    }

    // register form
    const formRegister = useForm<z.infer<typeof registerValidationSchema>>({
        resolver: zodResolver(registerValidationSchema),
        values: {
            email: inputedEmail,
            name: '',
            password: '',
            passwordConfirm: ''
        },
        defaultValues: {
            email: "",
            name: "",
            password: "",
            passwordConfirm: ""
        },
    })


    async function onSubmitRegister(values: z.infer<typeof registerValidationSchema>) {
        if (values.password !== values.passwordConfirm) {
            setEqualsValue('Passwords not matching')
            return
        }

        const res = await registerUser(values)
        if (res === 'ok') {
            window.location.href = '/'
            toast({
                className: 'bg-green-700',
                title: 'User created succefully'
            })
            return
        }
        toast({
            variant: 'destructive',
            title: res
        })
    }


    if (formNumber == '1') {
        return (
            <>
                <CardHeader className={'text-white'}>
                    <CardTitle>Welcome!</CardTitle>
                    <CardDescription>To proceed, please insert your email.</CardDescription>
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
                                            <FormLabel className={'text-white'}>Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="joao@mail.com" type={'text'}
                                                       className={'bg-gray-900 text-neutral-300'} {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit" className={'mt-[6rem] bg-bg-calm-green'}>Submit</Button>
                            </form>
                        </Form>
                    </FadeIn>
                </CardContent>
            </>
        )
    } else if (formNumber == '2') {
        return (
            <>
                <FadeIn>
                    <CardHeader className={'text-white'}>
                        <CardTitle>Welcome (SEU NOME)!</CardTitle>
                        <CardDescription>Confirm your password to enter.</CardDescription>
                    </CardHeader>
                    <CardContent>

                        <Form {...formLogin}>
                            <form onSubmit={formLogin.handleSubmit(onSubmitLogin)} className="space-y-8 h-auto">
                                <FormField
                                    control={formLogin.control}
                                    name="email"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel className={'text-white'}>Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="joao@mail.com" type={'text'}
                                                       className={'bg-gray-900 text-neutral-300'} {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={formLogin.control}
                                    name={"password"}
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel className={'text-white'}>Pasword</FormLabel>
                                            <FormControl>
                                                <Input placeholder="****" type={'text'}
                                                       className={'bg-gray-900 text-neutral-300'} {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit" className={'mt-[6rem] bg-bg-calm-green'}>Submit</Button>
                            </form>
                        </Form>

                    </CardContent>
                </FadeIn>
            </>
        )
    } else if (formNumber == '3') {
        return (
            <>
                <FadeIn>
                    <CardHeader className={'text-white'}>
                        <CardTitle>Sing up now !</CardTitle>
                        <CardDescription>Create your account to enter!.</CardDescription>
                    </CardHeader>
                    <CardContent>

                        <Form {...formRegister}>
                            <form onSubmit={formRegister.handleSubmit(onSubmitRegister)} className="space-y-8">
                                <FormField
                                    control={formRegister.control}
                                    name="email"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel className={'text-white'}>Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="joao@mail.com" type={'text'}
                                                       className={'bg-gray-900 text-neutral-300'} {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={formRegister.control}
                                    name="name"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel className={'text-white'}>Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Joao da Silva" type={'text'}
                                                       className={'bg-gray-900 text-neutral-300'} {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={formRegister.control}
                                    name="password"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel className={'text-white'}>Pasword</FormLabel>
                                            <FormControl>
                                                <Input placeholder="****" type={'password'}
                                                       className={'bg-gray-900 text-neutral-300'} {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={formRegister.control}
                                    name="passwordConfirm"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel className={'text-white'}>Confirm password</FormLabel>
                                            <FormControl>
                                                <Input placeholder="****" type={'password'}
                                                       className={'bg-gray-900 text-neutral-300'} {...field} />
                                            </FormControl>
                                            <FormMessage>{equalsValue}</FormMessage>
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit" className={'mt-[6rem] bg-bg-calm-green'}>Submit</Button>
                            </form>
                        </Form>

                    </CardContent>
                </FadeIn>
            </>
        )
    }
}

export default AuthForm;