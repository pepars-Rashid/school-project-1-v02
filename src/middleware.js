import { NextRequest, NextResponse } from 'next/server'; 
import { cookies } from 'next/headers'   
import { decrypt } from './lib/session';
// import { redirect } from 'next/navigation';

const protectedRoutes = ['/dashboard'];  
const publicRoutes = ['/login', '/'];  

export default async function middleware(req) {  
    const path = req.nextUrl.pathname;  
    const isProtectedRoute = protectedRoutes.includes(path); 
    const isPublicRoute = publicRoutes.includes(path)

    const cookie = (await cookies()).get('session')?.value
    console.log('cookie:', cookie)
    const session = await decrypt(cookie);  
    console.log('session:', session)

    if (isProtectedRoute && !(session?.id)) {  
      console.log('redirect to login' ,isProtectedRoute, !session?.userId)
      return NextResponse.redirect(new URL('/login', req.nextUrl));  
    }  

    if (
      isPublicRoute &&
      session?.userId &&
      !req.nextUrl.pathname.startsWith('/dashboard')
    ) {
      console.log('redirect to dashboard!!!!!!!!!!!!!!!' , session?.userId)
      return NextResponse.redirect(new URL('/dashboard', req.nextUrl))
    }
    return NextResponse.next()
  }   

export const config = {  
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],  
};