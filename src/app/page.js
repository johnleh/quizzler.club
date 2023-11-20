import Loading from '@/comps/loading'
import { getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]/route"
import { redirect } from 'next/navigation'

const Home = async () => {
  const session = await getServerSession(authOptions)
  if(session) {
    redirect('/dashboard')
    return <Loading/>
  } else {
    redirect('/signIn')
    return <Loading/>
  }
}


export default Home
