import NavBar from "../../../comps/navBar"
import ProtectedWrapper from "../ProtectedWrapper"
const Dashboard = ({session}) => {
    
    return (
    <main>
        <NavBar session={session}/>
        <h1>Dashboard</h1>
    </main>
    )
}


export default ProtectedWrapper(Dashboard)
