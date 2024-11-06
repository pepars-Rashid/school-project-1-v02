"use client"
// import { useFormState, useFormStatus } from 'react-dom'
import {useActionState} from 'react'
import { login } from "@/actions/auth";

export function LoginForm() { 
  const [State, action] = useActionState(login, { message: "" });

    return (  
        <form action={action}>  
            <div>  
                <label htmlFor="name">Name</label>  
                <input id="name" name="name" placeholder="Name" />  
            </div>    
            <div>  
                <label htmlFor="password">Password</label>  
                <input id="password" name="password" type="password" />  
            </div>  
            <button type="submit">Login</button>  
        </form>  
    );  
}