'use server'

import { redirect } from 'next/navigation';
import { createSession } from "@/lib/session";
import { LoginupFormSchema } from "@/zod/LoginupFormSchema";

export async function login (preState ,data) {
  // const validatedFields = LoginupFormSchema.safeParse(formData);  
  //   if (!validatedFields.success) {  
  //       return { errors: validatedFields.error.flatten().fieldErrors };  
  //   }  

    const name = data.get('name')
    const password = data.get('password')

    const user = {
      id:123,
      dbusername: 'pepars',
      dbpassword: '123',
    }

    if ((name!==user.dbusername) || (password!==user.dbpassword)) {  
      console.log(name, password, user.dbusername, user.dbpassword)
      console.log(name!==user.dbusername, password!==user.dbpassword)
      console.log('Invalid password.')
      return { message: 'Invalid password.' };  
  }  

  // Create user session  
  await createSession(user.id);  
  redirect('/dashboard');
  //  Redirect to the dashboard upon successful login  
}  