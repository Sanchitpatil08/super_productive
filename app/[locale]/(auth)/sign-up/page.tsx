import { Authcard } from "@/components/auth/AuthCard"
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Sign Up",
    description:"Sign up "
}

const SignUp = () =>{
    return <Authcard/>
}

export default SignUp;
