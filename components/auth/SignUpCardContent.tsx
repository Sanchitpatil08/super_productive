"use client";

import { signUpSchema, SignUpSchema } from "@/schema/signUpSchema"
import { CardContent } from "../ui/card"
import { Form } from "@/components/ui/form"
import { zodResolver} from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { ProviderSignInBtns } from "./ProviderSigninbtns"


export const SignUpCardContent = () =>{
    const form = useForm<SignUpSchema>({
        resolver: zodResolver (signUpSchema),
        defaultValues :{
            email: "",
            password: "",
            username: ""
        }
    });


        return(
            <CardContent>
                <Form {...form} >
                    <ProviderSignInBtns/>
                    <form>
                        
                    </form>
                </Form>
            </CardContent>
        )
}