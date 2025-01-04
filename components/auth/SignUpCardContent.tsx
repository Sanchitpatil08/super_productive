"use client";

import { signUpSchema, SignUpSchema } from "@/schema/signUpSchema"
import { CardContent } from "../ui/card"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { zodResolver} from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { ProviderSignInBtns } from "./ProviderSigninbtns"
import { Input } from "../ui/input";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import Link from "next/link";


export const SignUpCardContent = () =>{
    const t = useTranslations("AUTH")
    const form = useForm<SignUpSchema>({
        resolver: zodResolver (signUpSchema),
        defaultValues :{
            email: "",
            password: "",
            username: ""
        }
    });

    const onSubmit = async (data: SignUpSchema) =>{
        console.log(data);
    }


        return(
            <CardContent>
                <Form {...form} >
                    <form className=" space-y-7" onSubmit={form.handleSubmit(onSubmit)}>
                        <ProviderSignInBtns />
                        <div className=" space-y-1.5">
                            <FormField control={form.control} name="email" render={({field}) =>(
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder={t("EMAIL")} {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                            />


                            <FormField control={form.control} name="username" render={({field}) =>(
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder={t("USERNAME")} {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                            />

                            <FormField control={form.control} name="password" render={({field}) =>(
                                <FormItem>
                                    <FormControl>
                                        <Input type="password" placeholder={t("PASSWORD")} {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                            />

                        </div>


                        <div  className=" space-y-2 ">
                            <Button className=" w-full font-bold text-white " type="submit"> Sign Up </Button>
                        </div>
                        <p className=" text-xs text-center text-muted-foreground ">
                            {t("SIGN_UP.TERMS.FIRST")} { " "}
                            <Link className=" font-bold" href={"/"}>
                                {t("SIGN_UP.TERMS.SECOND")}
                            </Link>
                        </p>
                    </form>
                </Form>
            </CardContent>
        )
}