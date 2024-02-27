import NavBar from "./navBar"
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import { getServerSession } from "next-auth/next"

const ProtectedLayout = async ({ children }) => {
    const session = await getServerSession(authOptions)
    if(!session) {
        redirect('/signIn')
    }

    return (
        <main>
            <NavBar session={session}/>
            <p>ProtectedLayout</p>
            {children}
        </main>
    )
}

export default ProtectedLayout
