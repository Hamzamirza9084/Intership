import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Assignments from './Assignment/Assignment';
import Fileview from './Fileview/Fileview';
import './App.css'
import Home from './Home/Home';

const BASE_URL = '/assignments'; 

function App() {
  const router = createBrowserRouter([
    {
      path: `${BASE_URL}/`, 
      element: <Home/>,
    },
    {
      path: `${BASE_URL}/view`, 
      element: <Fileview />,
    },
    {
      path: `${BASE_URL}/Assignments`, 
      element: <Assignments />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
