import { z } from 'zod';  

export const LoginupFormSchema = z.object({  
    name: z.string().min(2).trim(),    
    password: z.string().min(2).regex(/[a-zA-Z]/).regex(/[0-9]/).regex(/[^a-zA-Z0-9]/).trim(),  
});