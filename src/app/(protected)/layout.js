import { getServerSession } from "next-auth/next"
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import Loading from "@/comps/loading"
const ProtectedLayout = async ({ children }) => {
    const session = await getServerSession(authOptions)
    if(session) {
        return (
            <>
            <p>ProtectedLayout</p>
                {children}
            </>
        )
    } else {
        redirect('/signIn')
        return <Loading/>
    }
}

export default ProtectedLayout
