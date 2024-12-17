import { Link } from "react-router-dom"
function Home()
{
    return(
        <>
            <main>
                <p>Click Here to Enter a new Employee</p>
                <Link to='/Tracking/EmployeeForm'><button>New Employee</button></Link><br></br>
                <p>Click Here to track of Employee</p>
                <Link to='/Tracking/ProjectAssignment'><button>Track Employee</button></Link>
            </main>
        </>
    )
}

export default Home