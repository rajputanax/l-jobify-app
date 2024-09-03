import Wrapper from '../assets/wrappers/SmallSidebar'
import { useDashBoardContext } from '../assets/Pages/DashboardLayout'
import Logo from '../components/Logo'
import { FaTimes } from 'react-icons/fa'
import links from '../utils/Links'
import { NavLink } from 'react-router-dom'







const SmallSidebar = () => {
  const {showSidebar , toggleSidebar} = useDashBoardContext()
  // console.log(data)
  return (
    <Wrapper>


      <div className={ showSidebar === false ? 'sidebar-container show-sidebar':'sidebar-container'}>

        <div className="content">
          <button type="button" className='close-btn' onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <div className="nav-links">
            {links.map((x) => {
              const { text, path, icon } = x;
              return (
                <NavLink to={path} key={text} className='nav-link' onClick={toggleSidebar}>
                  <span className='icon'>{icon}</span>
                  {text}
                </NavLink>
              )
            })}

            



          </div>
        </div>

      </div>
      
      



    </Wrapper>
  )
}

export default SmallSidebar