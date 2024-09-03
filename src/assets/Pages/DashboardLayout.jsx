import BigSidebar from '../../components/BigSidebar'
import SmallSidebar from '../../components/SmallSidebar'
import Navbar from '../../components/Navbar'
import Wrapper from '../wrappers/Dashboard'
import { Outlet } from 'react-router-dom'
import { useContext, useState } from 'react'
import { createContext } from 'react'

const DasboardContext = createContext()
const DashboardLayout = () => {
  const user = {
    name :'john'
  }
  const test = ()=>{
    return console.log('thara bhai joginder')
  }
    const [showSidebar , setShowSidebar] = useState(false) ;
    const [isDarkTheme, setIsDarkTheme] = useState(false) ;

    const toggleSidebar = () => {
      setShowSidebar(!showSidebar)
    }
 

    const toggleDarkTheme = () => {
      setIsDarkTheme(!isDarkTheme)
    }


    const  logoutUser = async () => {
     console.log('logout user')
    }


  return (
    <DasboardContext.Provider
      value={{
        test,
        user,
        showSidebar,
        isDarkTheme,
        toggleSidebar,
        toggleDarkTheme,
        logoutUser
      }}
    >

    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className='dashboard-page'>
             <Outlet /> 
          </div>
        </div>
      </main>
    </Wrapper>

    </DasboardContext.Provider>

  )
}


export const useDashBoardContext = () =>{
  return useContext(DasboardContext);
} 
export default DashboardLayout;