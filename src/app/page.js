"use client"
import { useSession } from "next-auth/react";
import { redirect } from 'next/navigation'

const Home = async () => {
  const session = useSession()
  if(session) {
    redirect('/dashboard')
  } else {
    redirect('/signIn')
  }
}


export default Home
