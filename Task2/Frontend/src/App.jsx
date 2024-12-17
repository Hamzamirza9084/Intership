import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EmployeeForm from './EmployeeForm/EmployeeForm';
import ProjectAssignment from './ProjectAssignment/ProjectAssignment';
import './App.css'
import Home from './Home/Home';

const BASE_URL = '/Tracking'; 

function App() {
  const router = createBrowserRouter([
    {
      path: `${BASE_URL}/`, 
      element: <Home/>,
    },
    {
      path: `${BASE_URL}/ProjectAssignment`, 
      element: <ProjectAssignment/>,
    },
    {
      path: `${BASE_URL}/EmployeeForm`, 
      element: <EmployeeForm/>,
    },
   
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
