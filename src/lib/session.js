import 'server-only'
import {cookies} from 'next/headers'

import { SignJWT, jwtVerify } from 'jose';  

const secretKey = process.env.SESSION_SECRET;  
const encodedKey = new TextEncoder().encode(secretKey);  

export async function createSession(id){
  const expiresAt = new Date(Date.now() + 60 * 60 *1000) 
  // + 7 * 24 * 60 * 60 * 1000

  // 1. Create a session in the database


  // 2. Encrypt the session ID
  const session = await encrypt({ id, expiresAt })

  // 3. Store the session in cookies for optimistic auth checks
  const cookieStore = await cookies();
  cookieStore.set('session', session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  })
}

export async function encrypt(payload) {  
  return new SignJWT(payload)  
      .setProtectedHeader({ alg: 'HS256' })  
      .setIssuedAt()  
      .setExpirationTime('7d')  
      .sign(encodedKey);  
}  

export async function decrypt(session) {  
  try {  
      const { payload } = await jwtVerify(session, encodedKey, { algorithms: ['HS256'] });  
      return payload;  
  } catch (error) {  
      console.log(error, 'Failed to verify session');  
  }  
}