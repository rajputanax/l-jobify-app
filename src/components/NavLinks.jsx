
import React from "react";   
import { useDashBoardContext} from '../assets/Pages/DashboardLayout';
import links from '../utils/Links'
import { NavLink } from 'react-router-dom'
// ..............................................................

const NavLinks = ({isSmallSidebar}) => {
  const { toggleSidebar} = useDashBoardContext()
  return (
    <>
    <div className="nav-links">
            {links.map((x) => {
              const { text, path, icon } = x;
              return (
                <NavLink to={path} key={text} className='nav-link' onClick={ isSmallSidebar ? toggleSidebar : null}>
                  <span className='icon'>{icon}</span>
                  {text}
                </NavLink>
              )
            })}

            



          </div>
    </>
  )
}
// ..............................................................

export default NavLinks;