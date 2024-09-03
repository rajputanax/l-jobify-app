
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {
  DashboardLayout,
  HomeLayout,
  Landing,
  Login,
  Register,
  EditJob,
  AddJob,
  Admin, Alljob, Error, Stats, Profile,
  DeleteJob,
  
} from './assets/Pages'
import './App.css'

function App() {
 const router = createBrowserRouter([
  { 
    path: '/', 
    element: <HomeLayout />,
    errorElement:<Error/> ,
    children:[
      { index: 'true', element: <Landing /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'dashboard', element: <DashboardLayout />
        , children:[
          { path: 'edit-job', element: <EditJob /> },
          { path: 'add-job', element: <AddJob /> },
          { path: 'admin', element: <Admin /> },
          { path: 'all-job', element: <Alljob /> },
          { path: 'stats', element: <Stats /> },
          { path: 'profile', element: <Profile /> },
          { path: 'delete-job', element: <DeleteJob /> },
        ]
       },
    
    ]

   },

]);

  return (
    <>
    
   
    <RouterProvider router={router}/>   
   
     
    </>
  )
}

export default App;
