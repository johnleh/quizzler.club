"use client"
import React from 'react'
import { signIn} from 'next-auth/react'
import { redirect } from 'next/navigation'
import { useSession } from "next-auth/react"
import Loading from '@/app/loading'

const SignIn = () => {
    const { data: session, status } = useSession()

    if(session && status !== "loading" ) {
        redirect('/dashboard')
    }

    const handleSignIn = async () => {
        await signIn()
    }

    return (
    <>
        <h1>Welcome to the Quizzler Club</h1>
        <button onClick={handleSignIn}>Sign In</button>
    </>
    )
}

export default SignIn
