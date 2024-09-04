import Wrapper from '../assets/wrappers/BigSidebar'
import  {Logo , NavLinks} from './index'
import { useDashBoardContext } from '../assets/Pages/DashboardLayout'

const BigSidebar = () => {
  const { showSidebar} = useDashBoardContext()
  return (
   
    <Wrapper>
      <div className={showSidebar  ? 'sidebar-container ' : ' show-sidebar sidebar-container'}>
        <div className="content">
          <header>
            <Logo />
          </header>

          <NavLinks />
        </div>

      </div>
    </Wrapper>
  )
}

export default BigSidebar