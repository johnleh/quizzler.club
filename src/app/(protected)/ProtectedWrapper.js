import React from "react"
import { getServerSession } from "next-auth/next"
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

const ProtectedWrapper = (Component) => {
  const RetrieveProtectedComponent = async (pageProps) => {
    
    const session = await getServerSession(authOptions)

    if(!session) {
      redirect('/signIn')
      return <Loading/>
    }

    const render = () => {
      return <Component session={session} {...pageProps} />
    }

    return render()
  }

  return RetrieveProtectedComponent
}


export default ProtectedWrapper