import {z} from "zod"



export const signUpSchema = z.object({
    email: z.string().email("Please enter a valid email "),
    password: z.string().min(10, "Password must be atlest 10 characters"),
    username: z.string().min(2, "Min 2 length")
})

export type SignUpSchema = z.infer<typeof signUpSchema>;


