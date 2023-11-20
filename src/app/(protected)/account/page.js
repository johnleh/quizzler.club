import NavBar from '@/comps/navBar'
import ProtectedWrapper from '../ProtectedWrapper'

const Account = ({session}) => {
  return (
    <main>
        <NavBar session={session}/>
        <h1>Account</h1>
    </main>
  )
}


export default ProtectedWrapper(Account)
