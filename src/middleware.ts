import { NextRequest, NextResponse } from "next/server";

export function middleware(req:NextRequest){
    const token = req.cookies.has('token')

    if(!token){
        return NextResponse.redirect(new URL('/',req.url))
    }

    NextResponse.next()
}

export const config = {
    matcher: "/dashboard"
}