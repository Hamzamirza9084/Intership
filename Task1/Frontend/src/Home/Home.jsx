import { Link } from "react-router-dom"
function Home()
{
    return(
        <>
            <main>
                <p>Click Here to Upload the Assignments</p>
                <Link to='/assignments/assignments'><button>Assignments</button></Link><br></br>
                <p>Click Here to View the Assignments</p>
                <Link to='/assignments/view'><button>View</button></Link>
            </main>
        </>
    )
}

export default Home