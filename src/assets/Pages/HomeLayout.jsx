import React from 'react'
import { Outlet } from 'react-router-dom';



const HomeLayout = () => {
  return (
    <>
    <Outlet/>
    {/* <h3>Admin page</h3> */}
    </>
      
  )
}

export default HomeLayout;