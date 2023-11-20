"use client"
import React from 'react'
import { signIn} from 'next-auth/react'
import { redirect } from 'next/navigation'
import { useSession, getSession } from "next-auth/react"
import Loading from '@/comps/loading'

const SignIn = () => {
    const { data: session, status } = useSession()
    if(status === 'loading') {
        return <Loading/>
    }
    if(session) {
        redirect('/dashboard')
        return <Loading/>
    }

    return (
    <>
        <h1>Welcome to the Quizzler Club</h1>
        <button onClick={signIn}>Sign In</button>
    </>
    )
}

export default SignIn
