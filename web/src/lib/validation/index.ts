import {z} from "zod";

export const emailValidationSchema = z.object({
    email: z.string().email({message: 'Must be a valid email'}),
})

export const loginValidationSchema = z.object({
    email: z.string().email({message: 'Must be a valid email'}),
    password: z.string().min(8, {message: 'Must have at least 8 characters'})
})

export const registerValidationSchema = z.object({
    email: z.string().email({message: 'Must be a valid email'}),
    name: z.string().min(2),
    password: z.string().min(8, {message: 'Must have at least 8 characters'}),
    passwordConfirm: z.string().min(8)
})

