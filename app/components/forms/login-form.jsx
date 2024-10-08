'use client'
import { useEffect, useState } from "react";
import Button from "../../styles/Button";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Notiflix from "notiflix";
import {host} from "../../host_setting"
import { logger } from "../../helpers/logger";

export default function LoginForm() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()
    

    useEffect(() => {
        const isAuth = localStorage.getItem("isAuth")
        if (isAuth) {
            router.push("/")
        }
    }, [])

    const cleanInputs = () => {
        setEmail("")
        setPassword("")
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {   

            const response = await axios.post(`${host}/api/login`, {
                email,
                password
            })

            if (response.data.status === "success") {
                Notiflix.Notify.success(response.data.message)
                localStorage.setItem("auth", JSON.stringify({
                    "email": email,
                    "isAuth": true,
                }))
                router.push('/')
            } else {
                Notiflix.Notify.failure(response.data.message)
            }

            logger({status: response.data.status, message: response.data.message})
            

            
        } catch(err) {
            logger({status: "error", message: err.message})
            console.error(err)
        }

    }


    return(
        <form onSubmit={handleSubmit} className="flex flex-col p-3 gap-5 items-center mt-5">


            <p className={'font-bold text-4xl'}>Login</p>
            <div>
                <p>Enter email</p>
                <input className={"px-4 py-2 shadow-gray-950 shadow-md focus:outline-none focus:shadow-gray-950 focus:shadow-lg"} type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div>
                <p>Enter password</p>
                <input className={"px-4 py-2 shadow-gray-950 shadow-md focus:outline-none focus:shadow-gray-950 focus:shadow-lg"} type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
                
            <Button>Login</Button>

            <div>
                <span className={'mr-1 opacity-70'}>go to</span>
                <Link className={"font-bold underline"} href="/register">Registration</Link>   
            </div>
        </form>
    )
}