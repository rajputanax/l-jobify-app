import Wrapper from '../assets/wrappers/SmallSidebar'
import { useDashBoardContext } from '../assets/Pages/DashboardLayout'
import Logo from '../components/Logo'
import { FaTimes } from 'react-icons/fa'
import NavLinks from './NavLinks'

const SmallSidebar = () => {
  const {showSidebar , toggleSidebar} = useDashBoardContext()
  // console.log(data)
  return (
    <Wrapper>


      <div className={ showSidebar ? ' show-sidebar  sidebar-container ':' sidebar-container'}>

        <div className="content">
          <button type="button" className='close-btn' onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks isSmallSidebar />
        </div>

      </div>
      
      



    </Wrapper>
  )
}

export default SmallSidebar