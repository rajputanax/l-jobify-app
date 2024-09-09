import Wrapper from '../assets/wrappers/Navbar';
import Logo from './Logo';
import { FaAlignLeft } from 'react-icons/fa';
import { useDashBoardContext } from '../assets/Pages/DashboardLayout';
import LogoutContainer from './LogoutContainer';
import ThemeToggle from '../components/ThemeToggle'


const Navbar = () => {
  const {toggleSidebar} = useDashBoardContext()
 
  return (
    <Wrapper>
    <div className="nav-center">
      <button type="button" className="toggle-btn" onClick = {toggleSidebar} >
      <FaAlignLeft />
      </button>
      <div>
        <Logo/>
        <h4 className="logo-text">dashboard</h4>
      </div>
   
        <div className="btn-container">
          <ThemeToggle />
          <LogoutContainer />
        </div>
        
      </div>
    </Wrapper>
  )
}

export default Navbar