"use client"
import { signOut} from 'next-auth/react'
import Link from 'next/link'
const NavBar = ({session}) => {
 
    const name = session?.user?.name

    return (
        <>
            <p>Welcome {name}</p>
            <Link href={'/dashboard'}>dashboard</Link>
            <Link href={'/account'}>Account</Link>
            <button onClick={signOut}>Sign Out</button>
        </>
    )
}


export default NavBar
